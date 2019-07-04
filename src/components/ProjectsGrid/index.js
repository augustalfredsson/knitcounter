import React, { useState } from "react";
import firebase, { auth } from "firebase";
import Grid from "../Grid";
import { Title, NavBar, NavBarItem } from "../../styles";
import FirebaseLogin from "../FirebaseLogin";

const ProjectsGrid = ({ list, history }) => {
  const [projects, setProjects] = useState();

  var database = firebase.firestore();
  auth().onAuthStateChanged(function(user) {
    if (user && !projects) {
      const docRef = database.collection("users").doc(user.uid);
      docRef.get().then(doc => {
        console.log("doc.data().projects", doc.data().projects);
        setProjects(doc.data().projects);
      });
    }
  });

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
      {projects && (
        <Grid
          list={projects}
          onItemClick={id => {
            history.push(`/${id}`);
          }}
        />
      )}
    </>
  );
};

export default ProjectsGrid;
