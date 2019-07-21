import React from "react";
import Grid from "./Grid.js";
import NavBar from "./NavBar";
import { useProjects } from "../helpers/firebaseHooks";

const ProjectsGrid = ({ list, history }) => {
  const { error, loading, projects } = useProjects();

  return (
    <>
      <NavBar title="Projects" />

      {projects && (
        <Grid
          data={projects}
          onItemClick={data => {
            history.push({
              pathname: `/project/${data.id}`,
              state: { ...data }
            });
          }}
          additionalItem={{ label: "+" }}
          onAdditionalItemClick={() => history.push("/createproject")}
        />
      )}
    </>
  );
};

export default ProjectsGrid;
