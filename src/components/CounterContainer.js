import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import ProjectLink from "./ProjectLink.js";
import { useCounter } from "../helpers/firebaseHooks";

const CounterContainer = ({ match }) => {
  const [count, setCount] = useState();
  const { error, loading, counter, project, increment, decrement } = useCounter(
    match.params.id,
    match.params.counterId
  );

  if (counter) {
    return (
      <WrapperFlexColumn>
        <NavBar title={counter.name} />
        <ProjectLink href={`${window.location.origin}/project/${project.id}`}>
          {project.name}
        </ProjectLink>
        <Center>
          <Number>{counter.value}</Number>
        </Center>
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

const CounterTitle = styled.h3`
  font-size: 50px;
  width: 100%;
  text-align: center;
  margin: 24px 0 0 0;
`;

const Number = styled.p`
  align-self: center;
  color: black;
  font-size: 140px;
  margin: 0;
  opacity: 0.8;
  @media (min-width: 425px) {
    font-size: 200px;
  }
`;

const WrapperFlexColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Center = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Button = styled.button`
  flex: 1 1 100px;
  height: 100px;
  margin-left: 8px;
  text-align: center;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 8px;
  font-weight: bold;
  font-size: 40px;
  touch-action: manipulation;
  &:first-child {
    margin-left: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  flex: row;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 24px 0;
`;
