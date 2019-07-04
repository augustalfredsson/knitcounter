import React from "react";
import Grid from "../Grid";
import { Title, NavBar, NavBarItem } from "../../styles";
import { projectsList } from "../../data";
import FirebaseLogin from "../FirebaseLogin";

const ProjectsGrid = ({ list, history }) => {
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
      <Grid
        list={projectsList}
        onItemClick={id => {
          history.push(`/${id}`);
        }}
      />
    </>
  );
};

export default ProjectsGrid;
