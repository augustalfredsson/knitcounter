import React, { useState } from "react";
import {
  WrapperFlexColumn,
  Column,
  ProjectTitle,
  CounterTitle,
  Number,
  Button,
  Row
} from "./styles";

import ProjectLink from "../ProjectLink";

const CounterContainer = ({ projectTitle, counterTitle }) => {
  const [counter, setCounter] = useState(0);
  return (
    <WrapperFlexColumn>
      <Column> 
        <CounterTitle>{counterTitle}</CounterTitle>
        <ProjectLink href={`${window.location.origin}/${projectTitle}`}>
          {projectTitle}
        </ProjectLink>
      </Column>
      <Row>
        <Number>{counter}</Number>
      </Row>
      <Row>
        <Button onClick={() => setCounter(counter - 1)}>-</Button>
        <Button onClick={() => setCounter(counter + 1)}>+</Button>
      </Row>
    </WrapperFlexColumn>
  );
};

export default CounterContainer;
