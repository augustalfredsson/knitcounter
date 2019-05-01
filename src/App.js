import React, { Component } from "react";
import CounterContainer from "./components/CounterContainer";
import Grid from "./components/Grid";
import { AppContainer } from "./styles";
import "./App.css";

const projectsList = [
  {
    name: "Kofta",
    counters: [{ name: "Ärm", value: 37 }, { name: "Krage", value: 88 }],
    image:
      "https://images.unsplash.com/photo-1513890333407-6f85205e8ef2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80"
  },
  {
    name: "Vantar",
    counters: [{ name: "Tumme", value: 74 }, { name: "Handflata", value: 93 }],
    image:
      "https://images.unsplash.com/photo-1541944743827-e04aa6427c33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3326&q=80"
  },
  {
    name: "Halsduk",
    counters: [{ name: "Halsduk", value: 74 }],
    image:
      "https://images.unsplash.com/photo-1530396333989-24c5b8f805dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
  }
];

class App extends Component {
  render() {
    return (
      <AppContainer>
        <h1 style={{ width: "200px" }}>Projects</h1>
        <Grid list={projectsList} />
      </AppContainer>
    );
  }
}

export default App;
