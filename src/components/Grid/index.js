import React, { useState } from "react";
import { GridContainer, GridItem, ProjectCard } from "./styles.js";

const Grid = ({ list }) => {
  const [itemIdClicked, setItemIdClicked] = useState(null);

  return (
    <GridContainer singleItem={itemIdClicked}>
      {list.map(item => {
        return (
          <GridItem
            key={item.id}
            show={itemIdClicked === null || itemIdClicked === item.id}
          >
            <ProjectCard
              background={item.image}
              onClick={() => {
                if (itemIdClicked === null) {
                  setItemIdClicked(item.id);
                } else {
                  setItemIdClicked(null);
                }
              }}
            >
              <span>{item.name}</span>
            </ProjectCard>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default Grid;
