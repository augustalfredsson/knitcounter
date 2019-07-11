import React, { useState, useEffect } from "react";
import firebase, { auth } from "firebase";
import { useSession } from "./auth";

export function useProjects() {
  // initialize our default state
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);
  const user = useSession();
  // when the id attribute changes (including mount)
  // subscribe to the recipe document and update
  // our state when it changes.
  useEffect(() => {
    console.log("user", user);
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .onSnapshot(
        querySnapshot => {
          const p = {};
          querySnapshot.forEach(doc => {
            p[doc.id] = doc.data();
          });
          setLoading(false);
          setProjects(p);
        },
        err => {
          console.log("error", err);

          setError(err);
        }
      );
    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when our id
    // changes to a different value.
    return () => unsubscribe();
  }, [user]);

  return {
    error,
    loading,
    projects
  };
}

export function useProject(projectId) {
  // initialize our default state
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const user = useSession();
  // when the id attribute changes (including mount)
  // subscribe to the recipe document and update
  // our state when it changes.
  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .onSnapshot(
        doc => {
          setProject(doc.data());
          setLoading(false);
        },
        err => {
          console.log("error", err);
          setError(err);
        }
      );
    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when our id
    // changes to a different value.
    return () => unsubscribe();
  }, [user]);

  return {
    error,
    loading,
    project
  };
}

export function useCounter(projectId, counterId) {
  const user = useSession();
  // initialize our default state
  const [counter, setCounter] = useState(null);
  const { error, loading, project } = useProject(projectId);
  // when the id attribute changes (including mount)
  // subscribe to the recipe document and update
  // our state when it changes.
  useEffect(() => {
    if (project) {
      setCounter(project.counters[counterId]);
    }
  }, [project]);

  const increment = () => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .update(
        `counters.${counterId}.value`,
        firebase.firestore.FieldValue.increment(1)
      )
      .then(d => {});
    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when our id
    // changes to a different value.
    return () => unsubscribe();
  };

  const decrement = () => {
    const unsubscribe = firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .update(
        `counters.${counterId}.value`,
        firebase.firestore.FieldValue.increment(-1)
      )
      .then(d => {});
    // returning the unsubscribe function will ensure that
    // we unsubscribe from document changes when our id
    // changes to a different value.
    return () => unsubscribe();
  };

  return {
    error,
    loading,
    counter,
    project,
    increment,
    decrement
  };
}
