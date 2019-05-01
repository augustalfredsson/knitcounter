import styled from "styled-components";

export const ProjectTitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #323232;
  margin: 4px auto 0 auto;
  padding: 4px 8px;
  border: 1px solid #323232;
  border-radius: 4px;
  font-family: "Courier New", Courier, monospace;
`;

export const CounterTitle = styled.h3`
  font-size: 50px;
  width: 100%;
  text-align: center;
  margin: 24px 0 0 0;
`;

export const Number = styled.p`
  align-self: center;
  color: black;
  font-size: 200px;
  margin: 0;
  opacity: 0.8;
`;

export const BodyText = styled.p`
  align-self: center;
  color: black;
  font-size: 200px;
  margin: 0;
  opacity: 0.8;
`;

export const WrapperFlexColumn = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  flex: 1 1 100px;
  height: 100px;
  margin-left: 8px;
  text-align: center;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 4px;
  font-weight: bold;
  font-size: 40px;
  &:first-child {
    margin-left: 0px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex: row;
  justify-content: center;
  margin: 0 0 24px 0;
`;
