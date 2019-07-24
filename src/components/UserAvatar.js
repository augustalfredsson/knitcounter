import React, { useState } from "react";
import styled from "styled-components";

const UserAvatar = ({ photoURL, onClick }) => {
  return (
    <Wrapper>
      <Image src={photoURL} onClick={onClick} alt="" />
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
