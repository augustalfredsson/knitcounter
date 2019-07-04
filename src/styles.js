import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 0 6%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h1`
  width: 100%;
  margin: 24px 0 24px 0;
  opacity: 0.9;
  display: ${props => (props.hide ? "none" : "inline-block")};
`;

export const NavBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NavBarItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
`;
