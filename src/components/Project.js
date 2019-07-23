import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Grid from "./Grid.js";
import ProjectLink from "./ProjectLink.js";
import { useProject } from "../helpers/firebaseHooks";
import Loading from "./Loading";

const Project = ({ match, history }) => {
  // const [project, setProject] = useState();
  const { project, counters, loading, error } = useProject(match.params.id);

  //Use pushed state if available
  let pushedState = history.location.state || { name: "Title" };

  const onCounterClicked = data => {
    history.push({
      pathname: `/project/${project.id}/${data.id}`,
      state: { ...data }
    });
  };

  return (
    <>
      <>
        <NavBar title={project.name || pushedState.name} />
        {loading ? (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        ) : (
          <>
            <GridWrapper>
              <Grid
                data={counters}
                onItemClick={onCounterClicked}
                additionalItem={{ label: "+" }}
                onAdditionalItemClick={() =>
                  history.push(`/createcounter/${project.id}`)
                }
              />
            </GridWrapper>
            <ProjectLink href={`/`}>More projects</ProjectLink>
          </>
        )}
      </>
    </>
  );
};

export default Project;

const LoadingWrapper = styled.div``;

const GridWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 0 16px 0;
`;
