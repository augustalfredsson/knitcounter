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
  const [project, setProject] = useState({});
  const [counters, setCounters] = useState({});
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

export function useCounter(projectId, counterId, initialCounterState = {}) {
  const db = firebase.firestore();
  const user = useSession();
  const [counter, setCounter] = useState(initialCounterState);
  const [hasSavedNote, setHasSavedNote] = useState(false);
  const { error, loading, project } = useProject(projectId);
  const counterRef = db
    .collection("users")
    .doc(user.uid)
    .collection("projects")
    .doc(projectId)
    .collection("counters")
    .doc(counterId);

  useEffect(() => {
    const unsubscribe = counterRef.onSnapshot(doc => {
      setCounter(doc.data());
    });
    return () => unsubscribe();
  }, user);

  const increment = () => {
    if (user) {
      counterRef
        .update("value", firebase.firestore.FieldValue.increment(1))
        .then(d => {});
    }
  };

  const decrement = () => {
    if (user) {
      counterRef
        .update("value", firebase.firestore.FieldValue.increment(-1))
        .then(d => {});
    }
  };

  const saveNote = note => {
    if (user) {
      counterRef.update("note", note).then(d => {
        setHasSavedNote(true);
      });
    }
  };

  return {
    error,
    loading,
    counter,
    project,
    increment,
    decrement,
    saveNote,
    hasSavedNote
  };
}

export const useCreateProject = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [projectId, setProjectId] = useState();
  const { upload, uploading, imageURL } = useUploadImage();

  const db = firebase.firestore();
  const user = useSession();
  const createProject = (projectName, imageToUpload) => {
    var newProjectRef = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc();
    setProjectId(newProjectRef.id);

    upload(imageToUpload, newProjectRef.id).then(snapshot => {
      snapshot.ref.getDownloadURL().then(url => {
        newProjectRef
          .set({
            name: projectName,
            id: newProjectRef.id,
            image: url
          })
          .then(() => {
            setLoading(false);
          });
      });
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

  const createCounter = (counterName, countTo = 0) => {
    var counterRef = db
      .collection("users")
      .doc(user.uid)
      .collection("projects")
      .doc(projectId)
      .collection("counters")
      .doc();

    setCounterId(counterRef.id);

    counterRef
      .set({
        name: counterName,
        id: counterRef.id,
        value: 0,
        valueLimit: countTo,
        note: ""
      })
      .then(() => {
        setLoading(false);
      })
      .catch(e => {
        setError(e);
      });
  };

  return { createCounter, counterId, loading, error };
};

export const useUploadImage = (image, imageName) => {
  const user = useSession();
  const { uploading, setUploading } = useState(true);

  const upload = (image, imageName) => {
    var folderRef = firebase
      .storage()
      .ref()
      .child("images")
      .child(user.uid);
    var imageRef = folderRef.child(`${imageName}.jpg`);
    return imageRef.put(image);
  };

  return { upload, uploading };
};
