import React, { useState, useEffect } from "react";
import firebase, { auth } from "firebase";
import { useSession } from "./auth";

export function useProjects() {
  const db = firebase.firestore();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);
  const user = useSession();
  useEffect(() => {
    const unsubscribe = db
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
    return () => unsubscribe();
  }, [user]);

  return {
    error,
    loading,
    projects
  };
}

export function useProject(projectId) {
  const db = firebase.firestore();
  // initialize our default state
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);
  const user = useSession();
  useEffect(() => {
    const unsubscribe = db
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
    return () => unsubscribe();
  }, [user]);

  return {
    error,
    loading,
    project
  };
}

export function useCounter(projectId, counterId) {
  const db = firebase.firestore();
  const user = useSession();
  const [counter, setCounter] = useState(null);
  const { error, loading, project } = useProject(projectId);
  useEffect(() => {
    if (project) {
      setCounter(project.counters[counterId]);
    }
  }, [project]);

  const increment = () => {
    const unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .update(
        `counters.${counterId}.value`,
        firebase.firestore.FieldValue.increment(1)
      )
      .then(d => {});
    return () => unsubscribe();
  };

  const decrement = () => {
    const unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .update(
        `counters.${counterId}.value`,
        firebase.firestore.FieldValue.increment(-1)
      )
      .then(d => {});
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

export const useCreateProject = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projectId, setProjectId] = useState();
  const db = firebase.firestore();
  const user = useSession();
  const createProject = projectName => {
    var newProjectRef = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc();
    setProjectId(newProjectRef.id);

    newProjectRef
      .set({ name: projectName, id: newProjectRef.id, counters: {} })
      .then(() => setLoading(false))
      .catch(e => {
        setError(e);
      });
  };

  return { createProject, projectId, loading, error };
};
