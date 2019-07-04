import React, { useState } from "react";
import styled from "styled-components";
import { projectsList } from "../../data";
import { Title } from "../../styles";
import Grid from "../Grid";
import ProjectLink from "../ProjectLink";

const Project = ({ match, history }) => {
  const item = projectsList.find(item => {
    return item.id === match.params.id;
  });
  return (
    <>
      <Title>{item.name}</Title>
      <Grid
        list={item.counters}
        onItemClick={counterId => history.push(`/${item.id}/${counterId}`)}
      />
      <ProjectLink href={`${window.location.origin}/`}>
        More projects
      </ProjectLink>
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
