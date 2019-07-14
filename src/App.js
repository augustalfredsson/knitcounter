import React, { Component } from "react";
import ProjectsGrid from "./components/ProjectsGrid.js";
import Project from "./components/Project.js";
import CreateProject from "./components/CreateProject.js";
import CreateCounter from "./components/CreateCounter.js";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CounterContainer from "./components/CounterContainer.js";
import { AppContainer } from "./styles";
import { useAuth, userContext } from "./helpers/auth";
import "./App.css";

const App = () => {
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBjDkWq5TSbn-rU9UXPEGMrKNCIBI2ZkUI",
    authDomain: "knit-counter.firebaseapp.com",
    databaseURL: "https://knit-counter.firebaseio.com",
    projectId: "knit-counter",
    storageBucket: "knit-counter.appspot.com",
    messagingSenderId: "664947759934",
    appId: "1:664947759934:web:9970e52d75326152"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const { initializing, user } = useAuth();
  if (initializing) {
    return <div />;
  }

  return (
    <userContext.Provider value={{ user }}>
      <AppContainer>
        <Router>
          <Route path="/" exact component={ProjectsGrid} />
          <Route path="/createproject" exact component={CreateProject} />
          <Route
            path="/createcounter/:projectId"
            exact
            component={CreateCounter}
          />
          <Route path="/project/:id" exact component={Project} />
          <Route
            path="/project/:id/:counterId"
            exact
            component={CounterContainer}
          />
        </Router>
      </AppContainer>
    </userContext.Provider>
  );
};

export default App;
