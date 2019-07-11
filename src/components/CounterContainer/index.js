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
import { useCounter } from "../../helpers/firebaseHooks";

const CounterContainer = ({ match }) => {
  const [count, setCount] = useState();
  const { error, loading, counter, project, increment, decrement } = useCounter(
    match.params.id,
    match.params.counterId
  );

  if (counter) {
    return (
      <WrapperFlexColumn>
        <Column>
          <ProjectLink href={`${window.location.origin}/project/${project.id}`}>
            {project.name}
          </ProjectLink>
          <CounterTitle>{counter.name}</CounterTitle>
        </Column>
        <Row>
          <Number>{counter.value}</Number>
        </Row>
        <Row>
          <Button onClick={decrement}>-</Button>
          <Button onClick={increment}>+</Button>
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
