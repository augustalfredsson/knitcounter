import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Grid from "./Grid.js";
import ProjectLink from "./ProjectLink.js";
import { useProject } from "../helpers/firebaseHooks";

const Project = ({ match, history }) => {
  // const [project, setProject] = useState();
  const { project, counters, loading, error } = useProject(match.params.id);

  const onCounterClicked = counterId => {
    history.push(`/project/${project.id}/${counterId}`);
  };

  return (
    <>
      {!loading && (
        <>
          <NavBar title={project.name} />
          <Grid
            data={counters}
            onItemClick={onCounterClicked}
            additionalItem={{ label: "+" }}
            onAdditionalItemClick={() =>
              history.push(`/createcounter/${project.id}`)
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
