import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import ProjectLink from "./ProjectLink.js";
import { useCounter } from "../helpers/firebaseHooks";

const Counter = ({ match }) => {
  const [canDecrement, setCanDecrement] = useState(true);
  const [canIncrement, setCanIncrement] = useState(true);
  const [editedNote, setEditedNote] = useState(null);

  const {
    error,
    loading,
    counter,
    project,
    increment,
    decrement,
    saveNote
  } = useCounter(match.params.id, match.params.counterId);

  useEffect(() => {
    if (counter) {
      setCanDecrement(counter.value > 0);
      setCanIncrement(
        counter.valueLimit === 0 || counter.value < counter.valueLimit
      );

      if (counter.note !== editedNote) {
        setEditedNote(counter.note);
      }
    }
  }, [counter]);

  const handleOnNoteChanged = event => {
    setEditedNote(event.target.value);
  };

  const handleSaveNote = () => {
    saveNote(editedNote);
  };

  if (loading) {
    return <></>;
  }

  return (
    <WrapperFlexColumn>
      <NavBar title={counter.name} />
      <ProjectLink href={`/project/${project.id}`} state={{ ...project }}>
        {project.name}
      </ProjectLink>
      <Center>
        <Number>{counter.value}</Number>
      </Center>

      <Row>
        <Column>
          <SaveButton
            visible={counter.note !== editedNote}
            onClick={handleSaveNote}
          >
            Save
          </SaveButton>
          <Note
            value={editedNote}
            onChange={handleOnNoteChanged}
            placeholder="Add a note..."
          />
        </Column>
      </Row>
      <Row>
        <Button onClick={decrement} disabled={!canDecrement}>
          -
        </Button>
        <Button onClick={increment} disabled={!canIncrement}>
          +
        </Button>
      </Row>
    </WrapperFlexColumn>
  );
};

export default Counter;

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
  width: 100%;
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
  color: white;
  background-color: ${p => (p.disabled ? "#dedede" : "black")};
  border-radius: 8px;
  border: none;
  font-weight: bold;
  font-size: 40px;
  touch-action: manipulation;
  outline: none;
  &:first-child {
    margin-left: 0px;
  }
  &:hover {
    ${p => !p.disabled && "cursor: pointer "};
  }
`;

const Row = styled.div`
  display: flex;
  flex: row;
  justify-content: center;
  align-items: flex-end;
  margin: 0 0 24px 0;
`;

const Note = styled.textarea`
  margin: 0 0 0 0;
  padding: 4px;
  background: transparent;
  width: 100%;
  font-size: 16px;
  text-align: center;
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
`;

const SaveButton = styled.button`
  margin: 0 0 0 0;
  font-size: 12px;
  align-self: flex-end;
  visibility: ${p => (p.visible ? "visible" : "hidden")};
  color: white;
  background: #63ab69;
  padding: 4px 8px;
  border: none;
  border-radius: 5px;
  :hover {
    cursor: pointer;
  }
`;
