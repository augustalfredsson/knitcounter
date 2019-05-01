import React from "react";
import styled from "styled-components";
import { ProjectTitle } from "../CounterContainer/styles";

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 auto;
`;

const ProjectLink = ({ href, children }) => {
  return (
    <StyledLink href={href}>
      <ProjectTitle>{children}</ProjectTitle>
    </StyledLink>
  );
};
export default ProjectLink;
