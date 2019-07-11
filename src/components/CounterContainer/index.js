import React, { useState } from "react";
import firebase, { auth } from "firebase";
import {
  WrapperFlexColumn,
  Column,
  CounterTitle,
  Number,
  Button,
  Row
} from "./styles";
import ProjectLink from "../ProjectLink";

const CounterContainer = ({ match }) => {
  const [project, setProject] = useState();
  const [counter, setCounter] = useState();
  const [count, setCount] = useState();
  const [user, setUser] = useState();

  var database = firebase.firestore();
  auth().onAuthStateChanged(function(user) {
    if (user && !counter) {
      setUser(user.uid);
      const docRef = database.collection("users").doc(user.uid);
      docRef.get().then(doc => {
        const project = doc.data().projects.find(item => {
          return item.id === match.params.id;
        });
        setProject(project);
        const counter = project.counters.find(counter => {
          return counter.id === match.params.counterId;
        });
        setCounter(counter);
        setCount(parseInt(counter.value));
      });
    }
  });

  const increase = () => {
    const userRef = database
      .collection("users")
      .doc(user)
      .update({ projects: {} });
    // docRef.set().then(function() {
    //   console.log("Document successfully written!");
    // });
  };

  if (counter) {
    return (
      <WrapperFlexColumn>
        <Column>
          <ProjectLink href={`${window.location.origin}/${project.id}`}>
            {project.name}
          </ProjectLink>
          <CounterTitle>{counter.name}</CounterTitle>
        </Column>
        <Row>
          <Number>{count}</Number>
        </Row>
        <Row>
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Button onClick={increase}>+</Button>
        </Row>
      </WrapperFlexColumn>
    );
  } else {
    return (
      <WrapperFlexColumn>
        <Column>
          <CounterTitle>Loading</CounterTitle>
        </Column>
      </WrapperFlexColumn>
    );
  }
};

export default CounterContainer;
