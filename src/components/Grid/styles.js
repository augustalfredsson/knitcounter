import styled from "styled-components";

export const GridContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 20px 0;
  display: grid;
  transition: grid-template-columns 1s;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 16px;
`;

export const GridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  cursor: pointer;
  background-color: transparent;
`;

export const Card = styled.div`
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
  background-size: cover;
  background-position: center center;
  &:hover {
    box-shadow: 0px 6px 10px 0px #0000002e;
  }
`;

export const CardLabel = styled.span`
  text-shadow: 0px 0px 5px black;
  transition: opacity 0.2s;
  line-height: 1;
`;
