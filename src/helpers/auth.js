import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase";

export const userContext = React.createContext({
  user: null
});

export const useSession = () => {
  const { user } = useContext(userContext);
  return user;
};

export const useAuth = () => {
  const [state, setState] = useState(() => {
    const user = firebase.auth().currentUser;
    return { initializing: !user, user };
  });

  function onChange(user) {
    setState({ initializing: false, user });
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  return state;
};
