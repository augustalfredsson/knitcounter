import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "firebase";

const UserAvatar = ({ photoURL }) => {
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  const toggle = () => {
    setShowLogoutButton(!showLogoutButton);
  };
  const logout = () => {
    auth().signOut();
  };

  return (
    <Wrapper>
      <Image src={photoURL} onClick={toggle} alt="" />
      {showLogoutButton && <Button onClick={logout}>Log out</Button>}
    </Wrapper>
  );
};
export default UserAvatar;

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  border: 1px solid #232323;
  border-radius: 5px;
  padding: 10px;
  margin: 0 0 0 10px;
`;

const Image = styled.img`
  width: 50px;
  border-radius: 100%;
`;
