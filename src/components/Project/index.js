import React, { useState } from "react";
import styled from "styled-components";
import firebase, { auth } from "firebase";
import { projectsList } from "../../data";
import { Title } from "../../styles";
import Grid from "../Grid";
import ProjectLink from "../ProjectLink";

const Project = ({ match, history }) => {
  const [project, setProject] = useState();

  var database = firebase.firestore();
  auth().onAuthStateChanged(function(user) {
    if (user && !project) {
      const docRef = database.collection("users").doc(user.uid);
      docRef.get().then(doc => {
        const project = doc.data().projects.find(item => {
          return item.id === match.params.id;
        });
        setProject(project);
      });
    }
  });

  if (project) {
    return (
      <>
        <Title>{project.name}</Title>
        <Grid
          list={project.counters}
          onItemClick={counterId => history.push(`/${project.id}/${counterId}`)}
        />
        <ProjectLink href={`${window.location.origin}/`}>
          More projects
        </ProjectLink>
      </>
    );
  }
  return (
    <>
      <Title>Loading</Title>{" "}
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
