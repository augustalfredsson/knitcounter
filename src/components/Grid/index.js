import React, { useState } from "react";
import { GridContainer, GridItem, ProjectCard } from "./styles.js";

const Grid = ({ list }) => {
  const [itemIdClicked, setItemIdClicked] = useState(null);
  console.log(itemIdClicked);
  return (
    <GridContainer>
      {list.map(item => {
        if (itemIdClicked && itemIdClicked === item.id) {
          return (
            <GridItem key={item.id}>
              <ProjectCard
                background={item.image}
                onClick={() => {
                  setItemIdClicked(item.id);
                }}
              >
                <span>{item.name}</span>
              </ProjectCard>
            </GridItem>
          );
        } else if (!itemIdClicked) {
          return (
            <GridItem key={item.id}>
              <ProjectCard
                background={item.image}
                onClick={() => {
                  setItemIdClicked(item.id);
                }}
              >
                <span>{item.name}</span>
              </ProjectCard>
            </GridItem>
          );
        }
      })}
    </GridContainer>
  );
};

export default Grid;
