import React, { useState } from "react";
import { GridContainer, GridItem, Card, CardLabel } from "./styles.js";

const Grid = ({ list, onItemClick }) => {
  const [itemIdClicked, setItemIdClicked] = useState(null);
  return (
    <GridContainer>
      {list.map(item => {
        return (
          <GridItem
            key={item.id}
            show={itemIdClicked === null || itemIdClicked === item.id}
          >
            <Card background={item.image} onClick={() => onItemClick(item.id)}>
              <CardLabel>{item.name}</CardLabel>
            </Card>
          </GridItem>
        );
      })}
    </GridContainer>
  );
};

export default Grid;
