import React from "react";
import Grid from "../Grid";
import { Title } from "../../styles";
import { projectsList } from "../../data";
import styled from "styled-components";
import firebase from "firebase";

const FirebaseLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  const login = () => {
    console.log("logging in");

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
        // The signed-in user info.
        var user = result.user;
        console.log("user", JSON.stringify(user));

        localStorage.setItem("user", JSON.stringify(user));
      }
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

  const user = localStorage.getItem("user");

  if (user) {
    return <Image src={JSON.parse(user).photoURL} alt="" />;
  } else {
    return (
      <>
        <Button onClick={login}>Sign in with Google</Button>
      </>
    );
  }
};

export default FirebaseLogin;

const Button = styled.button`
  border: 1px solid #232323;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
`;

const Image = styled.img`
  width: 50px;
  border-radius: 100%;
`;
