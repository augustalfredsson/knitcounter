import React, { Component } from "react";
import ProjectsGrid from "./components/ProjectsGrid";
import Project from "./components/Project";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CounterContainer from "./components/CounterContainer";
import { AppContainer } from "./styles";
import "./App.css";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Router>
          <Route path="/" exact component={ProjectsGrid} />
          <Route path="/:id" exact component={Project} />
          <Route path="/:id/:counterId" exact component={CounterContainer} />
        </Router>
      </AppContainer>
    );
  }
}

export default App;
