import React, { useState } from "react";
import { GridContainer, GridItem, Card, CardLabel } from "./styles.js";

const Grid = ({ data, onItemClick, additionalItem, onAdditionalItemClick }) => {
  const [itemIdClicked, setItemIdClicked] = useState(null);
  return (
    <GridContainer>
      {Object.keys(data).map(key => {
        return (
          <GridItem
            key={data[key].id}
            show={itemIdClicked === null || itemIdClicked === data[key].id}
          >
            <Card
              background={data[key].image}
              onClick={() => onItemClick(data[key].id)}
            >
              <CardLabel>{data[key].name}</CardLabel>
            </Card>
          </GridItem>
        );
      })}
      {additionalItem && (
        <GridItem key="additionalItem">
          <Card onClick={onAdditionalItemClick}>
            <CardLabel>{additionalItem.label}</CardLabel>
          </Card>
        </GridItem>
      )}
    </GridContainer>
  );
};

export default Grid;
