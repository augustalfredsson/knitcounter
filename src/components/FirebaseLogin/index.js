import React from "react";
import Grid from "../Grid";
import { Title } from "../../styles";
import { projectsList } from "../../data";
import firebase from "firebase";

const FirebaseLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  const login = () => {
    firebase.auth().signInWithRedirect(provider);
  };

  firebase
    .auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        localStorage.setItem("accessToken", token);
        // ...
      }
      // The signed-in user info.
      var user = result.user;
      console.log("user", user);

      localStorage.setItem("user", user);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  return (
    <>
      Sign in with Google
      <button onClick={login}>Continue</button>
    </>
  );
};

export default FirebaseLogin;
