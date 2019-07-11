import React, { useState } from "react";
import styled from "styled-components";
import firebase, { auth } from "firebase";
import { projectsList } from "../../data";
import { Title } from "../../styles";
import Grid from "../Grid";
import ProjectLink from "../ProjectLink";
import { useProject } from "../../helpers/firebaseHooks";

const Project = ({ match, history }) => {
  // const [project, setProject] = useState();
  const { project, loading, error } = useProject(match.params.id);

  return (
    <>
      {loading && <Title>Loading</Title>}

      {project && (
        <>
          <Title>{project.name}</Title>
          <Grid
            data={project.counters}
            onItemClick={counterId =>
              history.push(`/${project.id}/${counterId}`)
            }
          />
          <ProjectLink href={`${window.location.origin}/`}>
            More projects
          </ProjectLink>
        </>
      )}
    </>
  );
};

export default Project;

const ListItem = styled.div`
  margin: 16px 0;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
`;
