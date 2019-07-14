import React, { useState } from "react";
import styled from "styled-components";

const UserAvatar = ({ photoURL }) => {
  const goHome = () => {
    window.location = window.location.origin;
  };

  return (
    <Wrapper>
      <Image src={photoURL} onClick={goHome} alt="" />
    </Wrapper>
  );
};
export default UserAvatar;

const Wrapper = styled.div`
  display: flex;
  &:hover {
    cursor: pointer;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
