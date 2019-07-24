import React, { useState } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { auth } from "firebase";
import { useSession } from "../helpers/auth";
import UserAvatar from "./UserAvatar.js";

const FirebaseLogin = ({ history }) => {
  var provider = new auth.GoogleAuthProvider();

  const user = useSession();

  const login = () => {
    auth().signInWithRedirect(provider);
  };

  auth()
    .getRedirectResult()
    .then(function(result) {
      if (result.credential) {
        // The signed-in user info.
        var user = result.user;
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

  const goHome = () => {
    history.push("/");
  };

  if (user) {
    return <UserAvatar photoURL={user.photoURL} onClick={goHome} />;
  } else {
    // No user is signed in.
    return <Button onClick={login}>Log in with Google</Button>;
  }
};

export default withRouter(FirebaseLogin);

const Button = styled.button`
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
  margin: 20px;
`;
