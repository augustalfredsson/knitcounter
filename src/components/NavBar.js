import React from "react";
import styled from "styled-components";
import FirebaseLogin from "./FirebaseLogin.js";

const NavBar = ({ title = "Title" }) => {
  return (
    <Wrapper>
      <NavBarItem>
        <FirebaseLogin />
      </NavBarItem>
      <NavBarItemMiddle>
        <Title>{title}</Title>
      </NavBarItemMiddle>
      <NavBarItem />
    </Wrapper>
  );
};

export default NavBar;

const Title = styled.h1`
  width: 100%;
  margin: 24px 0 24px 0;
  font-size: 36px;
  line-height: 1;
  display: ${props => (props.hide ? "none" : "inline-block")};

  @media (min-width: 425px) {
    font-size: 48px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavBarItem = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  align-items: center;
`;

const NavBarItemMiddle = styled(NavBarItem)`
  flex-grow: 4;
`;
