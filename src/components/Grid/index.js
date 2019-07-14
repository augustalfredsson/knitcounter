import React, { useState } from "react";
import styled from "styled-components";
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
          <CreateProjectButton onClick={onAdditionalItemClick}>
            {additionalItem.label}
          </CreateProjectButton>
        </GridItem>
      )}
    </GridContainer>
  );
};

export default Grid;

export const CreateProjectButton = styled.button`
  flex: 1 1 100px;
  height: 100%;
  padding: 0;
  text-align: center;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: bold;
  font-size: 40px;
  touch-action: manipulation;
  &:hover {
    cursor: pointer;
  }
`;
