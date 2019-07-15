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
  const [countTo, setCountTo] = useState();

  const handleCounterNameInputChange = event => {
    setCounterName(event.target.value);
  };

  const handleCountToInputChange = event => {
    setCountTo(event.target.value);
  };

  useEffect(() => {
    if (!loading && counterId) {
      history.push(`/project/${match.params.projectId}/${counterId}`);
    }
  }, [loading, counterId]);

  return (
    <>
      <NavBar title="New counter" />
      {error && <Error>Something went wrong, please try again!</Error>}
      <Form>
        <InputWrapper>
          <Label>Counter Name</Label>
          <Input
            type="text"
            value={counterName}
            onChange={handleCounterNameInputChange}
          />
        </InputWrapper>
        <InputWrapper>
          <Label>Count to: (optional)</Label>
          <Input
            type="number"
            value={countTo}
            onChange={handleCountToInputChange}
          />
        </InputWrapper>
        <Row>
          <CancelButton onClick={() => history.goBack()}>Cancel</CancelButton>
          <Button onClick={() => createCounter(counterName, countTo)}>
            Create
          </Button>
        </Row>
      </Form>
    </>
  );
};

export default CreateProject;

const Form = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px 0 0 0;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 0 0 0;
  width: 100%;
  &:first-of-type {
    margin-top: 0;
  }
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
