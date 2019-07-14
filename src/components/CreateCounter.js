import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectLink from "./ProjectLink.js";
import { useCreateCounter } from "../helpers/firebaseHooks";
import NavBar from "./NavBar";

const CreateProject = ({ match, history }) => {
  const { createCounter, counterId, loading, error } = useCreateCounter(
    match.params.projectId
  );
  const [counterName, setCounterName] = useState("");

  function handleInputChange(event) {
    setCounterName(event.target.value);
  }

  useEffect(() => {
    if (!loading && counterId) {
      history.push(`/project/${match.params.projectId}/${counterId}`);
    }
  }, [loading, counterId]);

  return (
    <>
      <NavBar title="New counter" />
      {error && <Error>Something went wrong, please try again!</Error>}
      <InputWrapper>
        <Label>Counter Name</Label>
        <Input type="text" value={counterName} onChange={handleInputChange} />
        <Row>
          <CancelButton onClick={() => history.goBack()}>Cancel</CancelButton>
          <Button onClick={() => createCounter(counterName)}>Create</Button>
        </Row>
      </InputWrapper>
    </>
  );
};

export default CreateProject;

const InputWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0;
`;

const Label = styled.label`
  text-align: left;
  width: 100%;
  font-weight: bold;
  margin: 0 0 8px 0;
`;

const Input = styled.input`
  width: 100%;
  font-size: 16px;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid black;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  flex: row;
  justify-content: flex-end;
  margin: 0 0 24px 0;
`;

const Button = styled.button`
  align-self: flex-end;
  margin: 8px 0;
  padding: 8px;
  background: #63ab69;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: 1px solid #63ab69;
  border-radius: 8px;
`;

const CancelButton = styled(Button)`
  background: transparent;
  color: black;
  border: 1px solid black;
  margin: 8px 8px 8px 0;
`;

const Error = styled.span`
  color: red;
`;
