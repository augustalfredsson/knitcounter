import React, { useState } from "react";
import styled from "styled-components";
import { getColorFromPalette } from "../helpers/color";

const Grid = ({ data, onItemClick, additionalItem, onAdditionalItemClick }) => {
  const [itemIdClicked, setItemIdClicked] = useState(null);
  return (
    <GridContainer>
      {Object.keys(data).map((key, i) => {
        console.log("i", i);
        return (
          <GridItem
            key={data[key].id}
            show={itemIdClicked === null || itemIdClicked === data[key].id}
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
        <GridItem key="additionalItem">
          <CreateButton onClick={onAdditionalItemClick}>
            {additionalItem.label}
          </CreateButton>
        </GridItem>
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
  cursor: pointer;
  background-color: transparent;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 8px;
  transition: box-shadow 0.4s, width 0.4s;
  box-shadow: 0px 6px 20px 0px #0000002e;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  background-color: ${p => p.backgroundColor};
  &:hover {
    box-shadow: 0px 6px 10px 0px #0000002e;
  }
`;

const CardLabel = styled.span`
  /* text-shadow: 0px 0px 5px black; */
  transition: opacity 0.2s;
  line-height: 1;
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
