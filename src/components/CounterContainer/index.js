import React, { useState } from "react";
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
  const project = projectsList.find(project => {
    return (project.id = match.params.id);
  });

  const counter = project.counters.find(counter => {
    return (counter.id = match.params.counterId);
  });
  const [count, setCount] = useState(counter.value);

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
};

export default CounterContainer;
