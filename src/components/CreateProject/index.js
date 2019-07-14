import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectLink from "../ProjectLink";
import { useCreateProject } from "../../helpers/firebaseHooks";
import NavBar from "../NavBar";

const CreateProject = ({ history }) => {
  const { createProject, projectId, loading, error } = useCreateProject();
  const [projectName, setProjectName] = useState("");

  function handleInputChange(event) {
    setProjectName(event.target.value);
  }

  useEffect(() => {
    if (!loading && projectId) {
      history.push(`/project/${projectId}`);
    }
  }, [loading, projectId]);

  return (
    <>
      <NavBar title="New project" />
      {error && <Error>Something went wrong, please try again!</Error>}
      <InputWrapper>
        <Label>Project Name</Label>
        <Input type="text" value={projectName} onChange={handleInputChange} />
        <Button onClick={() => createProject(projectName)}>Create</Button>
      </InputWrapper>
      <ProjectLink href={`${window.location.origin}/`}>
        Back to projects
      </ProjectLink>
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
  font-size: 24px;
  max-width: 300px;
  padding: 8px;
`;

const Button = styled.button`
  align-self: flex-end;
  margin: 8px 0;
  padding: 8px;
  background: blue;
  font-size: 16px;
  font-weight: bold;
  color: white;
  border: none;
  border-radius: 4px;
`;

const Error = styled.span`
  color: red;
`;
