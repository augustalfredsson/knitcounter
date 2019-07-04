import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "firebase";
import UserAvatar from "../UserAvatar";

const FirebaseLogin = () => {
  var provider = new auth.GoogleAuthProvider();

  const [currentUser, setCurrentUser] = useState();

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

  auth().onAuthStateChanged(function(user) {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });

  if (currentUser) {
    return <UserAvatar photoURL={currentUser.photoURL} />;
  } else {
    // No user is signed in.
    return <Button onClick={login}>Log in with Google</Button>;
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
