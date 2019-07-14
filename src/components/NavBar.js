import React from "react";
import styled from "styled-components";
import FirebaseLogin from "./FirebaseLogin";

const NavBar = ({ title }) => {
  return (
    <Wrapper>
      <NavBarItem>
        <FirebaseLogin />
      </NavBarItem>
      <NavBarItem>
        <Title>{title}</Title>
      </NavBarItem>
      <NavBarItem />
    </Wrapper>
  );
};

export default NavBar;

export const Title = styled.h1`
  width: 100%;
  margin: 24px 0 24px 0;
  font-size: 48px;
  opacity: 0.9;
  display: ${props => (props.hide ? "none" : "inline-block")};
`;

export const Wrapper = styled.div`
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
