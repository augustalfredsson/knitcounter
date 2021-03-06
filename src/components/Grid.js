import React, { useState } from "react";
import styled from "styled-components";
import { getColorFromPalette } from "../helpers/color";

const Grid = ({ data, onItemClick, additionalItem, onAdditionalItemClick }) => {
  const [itemIdClicked, setItemIdClicked] = useState(null);
  return (
    <GridContainer>
      {Object.keys(data).map((key, i) => {
        return (
          <GridItem
            key={data[key].id}
            show={itemIdClicked === null || itemIdClicked === data[key].id}
            data-testid="GridItem"
          >
            <Card
              image={data[key].image}
              backgroundColor={
                data[key].backgroundColor || getColorFromPalette(i)
              }
              onClick={() => onItemClick(data[key])}
            >
              <CardLabel>{data[key].name}</CardLabel>
            </Card>
          </GridItem>
        );
      })}
      {additionalItem && (
        <AdditionalGridItem key="additionalItem">
          <CreateButton onClick={onAdditionalItemClick}>
            {additionalItem.label}
          </CreateButton>
        </AdditionalGridItem>
      )}
    </GridContainer>
  );
};

export default Grid;

const GridContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  display: grid;
  transition: grid-template-columns 1s;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 16px;
`;

const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  background-color: transparent;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.4s, width 0.4s;
  box-shadow: 0px 6px 20px 0px #0000002e;
  &:hover {
    box-shadow: 0px 6px 10px 0px #0000002e;
  }
`;

const AdditionalGridItem = styled(GridItem)`
  box-shadow: none;
`;

const Card = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
  border: none;
  background-image: url(${p => p.image});
  background-size: cover;
  background-position: center center;
  background-color: ${p => p.backgroundColor};
  ${p =>
    p.image &&
    "::before { content: ''; background: black; position: absolute; top: 0; left: 0; width: 100%; height: 100%;opacity: 0.2;}"}
  &:hover {
    cursor: pointer;
  }
`;

const CardLabel = styled.span`
  font-size: 24px;
  color: white;
  line-height: 1;
  padding: 4px;
  opacity: 1;
  filter: brightness(1);
  border-radius: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CreateButton = styled.button`
  flex: 1 1 100px;
  height: 100%;
  padding: 0;
  text-align: center;
  background-color: transparent;
  border: 2px dashed black;
  border-radius: 8px;
  font-weight: bold;
  font-size: 40px;
  touch-action: manipulation;
  transition: 0.25s color ease-in-out, 0.25s background ease-in-out;
  &:hover,
  &:active {
    cursor: pointer;
    background: black;
    color: white;
  }
`;
