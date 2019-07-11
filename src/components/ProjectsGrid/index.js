import React, { useState, useEffect } from "react";
import firebase, { auth } from "firebase";
import Grid from "../Grid";
import { Title, NavBar, NavBarItem } from "../../styles";
import FirebaseLogin from "../FirebaseLogin";
import { useSession } from "../../helpers/auth";
import { useProjects } from "../../helpers/firebaseHooks";

const ProjectsGrid = ({ list, history }) => {
  const { error, loading, projects } = useProjects();

  return (
    <>
      <NavBar>
        <NavBarItem>
          <FirebaseLogin />
        </NavBarItem>
        <NavBarItem>
          <Title>Projects</Title>
        </NavBarItem>
        <NavBarItem />
      </NavBar>

      {loading && <Title>Loading projects</Title>}
      {projects && (
        <Grid
          data={projects}
          onItemClick={id => {
            history.push(`/project/${id}`);
          }}
          additionalItem={{ label: "+" }}
          onAdditionalItemClick={() => history.push("/create")}
        />
      )}
    </>
  );
};

export default ProjectsGrid;
