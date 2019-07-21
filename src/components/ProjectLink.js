import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProjectLink = ({ href, state = {}, children }) => {
  return (
    <StyledLink to={{ pathname: href, state: state }}>
      <ProjectTitle>{children}</ProjectTitle>
    </StyledLink>
  );
};
export default ProjectLink;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 0 auto;
`;

export const ProjectTitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: black;
  margin: 0px auto 0 auto;
  padding: 8px 8px;
  border: 1px solid black;
  border-radius: 8px;
  :hover {
    background: rgba(100, 100, 100, 0.1);
  }
`;
