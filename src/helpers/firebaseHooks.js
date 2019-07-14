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
    var unsubscribe;
    if (user) {
      unsubscribe = db
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
    }
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
  const [counters, setCounters] = useState(null);
  const user = useSession();
  useEffect(() => {
    var unsubscribe;
    if (user) {
      const docRef = db
        .collection("users")
        .doc(user.uid)
        .collection("projects")
        .doc(projectId);

      unsubscribe = docRef.onSnapshot(
        doc => {
          setProject(doc.data());
          docRef
            .collection("counters")
            .get()
            .then(querySnapshot => {
              const c = {};
              querySnapshot.forEach(doc => {
                c[doc.id] = doc.data();
              });
              setCounters(c);
              setLoading(false);
            });
        },
        err => {
          console.log("error", err);
          setError(err);
        }
      );

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  return {
    error,
    loading,
    project,
    counters
  };
}

export function useCounter(projectId, counterId) {
  const db = firebase.firestore();
  const user = useSession();
  const [counter, setCounter] = useState(null);
  const { error, loading, project } = useProject(projectId);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .collection("counters")
      .doc(counterId)
      .onSnapshot(doc => {
        setCounter(doc.data());
      });
    return () => unsubscribe();
  }, user);

  const increment = () => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("projects")
        .doc(projectId)
        .collection("counters")
        .doc(counterId)
        .update("value", firebase.firestore.FieldValue.increment(1))
        .then(d => {});
    }
  };

  const decrement = () => {
    if (user) {
      db.collection("users")
        .doc(user.uid)
        .collection("projects")
        .doc(projectId)
        .collection("counters")
        .doc(counterId)
        .update("value", firebase.firestore.FieldValue.increment(-1))
        .then(d => {});
    }
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

    newProjectRef.set({ name: projectName, id: newProjectRef.id }).then(() => {
      setLoading(false);
    });
  };

  return { createProject, projectId, loading, error };
};

export const useCreateCounter = projectId => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [counterId, setCounterId] = useState();
  const db = firebase.firestore();
  const user = useSession();

  const createCounter = counterName => {
    var counterRef = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .collection("counters")
      .doc();

    setCounterId(counterRef.id);

    counterRef
      .set({ name: counterName, id: counterRef.id, value: 0 })
      .then(() => {
        setLoading(false);
      })
      .catch(e => {
        setError(e);
      });
  };

  return { createCounter, counterId, loading, error };
};
