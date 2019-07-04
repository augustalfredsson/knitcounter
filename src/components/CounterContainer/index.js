import React, { useState } from "react";
import firebase, { auth } from "firebase";
import {
  WrapperFlexColumn,
  Column,
  ProjectTitle,
  Number,
  Button,
  Row
} from "./styles";
import { Title } from "../../styles";
import { projectsList } from "../../data";
import ProjectLink from "../ProjectLink";

const CounterContainer = ({ match }) => {
  const [project, setProject] = useState();
  const [counter, setCounter] = useState();
  const [count, setCount] = useState();

  var database = firebase.firestore();
  auth().onAuthStateChanged(function(user) {
    if (user && !counter) {
      const docRef = database.collection("users").doc(user.uid);
      docRef.get().then(doc => {
        const project = doc.data().projects.find(item => {
          return item.id === match.params.id;
        });
        setProject(project);
        console.log("project", project);
        const counter = project.counters.find(counter => {
          return counter.id === match.params.counterId;
        });
        setCounter(counter);
        setCount(parseInt(counter.value));
      });
    }
  });

  if (counter) {
    return (
      <WrapperFlexColumn>
        <Column>
          <Title>{counter.name}</Title>
          <ProjectLink href={`${window.location.origin}/${project.id}`}>
            {project.name}
          </ProjectLink>
        </Column>
        <Row>
          <Number>{count}</Number>
        </Row>
        <Row>
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Button onClick={() => setCount(count + 1)}>+</Button>
        </Row>
      </WrapperFlexColumn>
    );
  } else {
    return (
      <WrapperFlexColumn>
        <Column>
          <Title>Loading</Title>
        </Column>
      </WrapperFlexColumn>
    );
  }
};

export default CounterContainer;
