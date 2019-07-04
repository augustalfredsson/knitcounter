import firebase, { auth } from "firebase";

export const getUsersProjects = () => {
  var database = firebase.firestore();
  auth().onAuthStateChanged(function(user) {
    if (user) {
      const docRef = database.collection("users").doc(user.uid);
      return docRef.get();
    } else {
      return new Promise(function(resolve, reject) {
        resolve("No user");
      });
    }
  });

  return new Promise(function(resolve, reject) {
    resolve("No user");
  });
};
