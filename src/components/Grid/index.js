import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  grid-template-rows: auto auto;
  grid-gap: 16px;
`;

const GridItem = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-align: center;
  color: white;
  border-radius: 5px;
  transition: box-shadow 0.4s, width 0.4s;
  box-shadow: 0px 6px 20px 0px #0000002e;
  background-image: url(${props => props.background});
  background-size: auto 100%;
  &:hover {
    box-shadow: 0px 6px 10px 0px #0000002e;
  }
  span {
    text-shadow: 0px 0px 5px black;
  }
`;

const Grid = ({ list }) => {
  return (
    <GridContainer>
      {list.map(item => {
        return (
          <GridItem>
            <ProjectCard background={item.image}>
              <span>{item.name}</span>
            </ProjectCard>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default Grid;
