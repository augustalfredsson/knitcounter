import React from "react";
import Grid from "../Grid";
import { Title } from "../../styles";
import { projectsList } from "../../data";
import FirebaseLogin from "../FirebaseLogin";

const ProjectsGrid = ({ list, history }) => {
  return (
    <>
      <Title>Projects</Title>
      <Grid
        list={projectsList}
        onItemClick={id => {
          history.push(`/${id}`);
        }}
      />

      <FirebaseLogin />
    </>
  );
};

export default ProjectsGrid;
