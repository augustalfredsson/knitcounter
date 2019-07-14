import React from "react";
import styled from "styled-components";

const ProjectLink = ({ href, children }) => {
  return (
    <StyledLink href={href}>
      <ProjectTitle>{children}</ProjectTitle>
    </StyledLink>
  );
};
export default ProjectLink;

const StyledLink = styled.a`
  text-decoration: none;
  margin: 0 auto;
`;

export const ProjectTitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #323232;
  margin: 0px auto 0 auto;
  padding: 4px 8px;
  border: 1px solid #323232;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
  :hover {
    background: rgba(100, 100, 100, 0.1);
  }
`;
