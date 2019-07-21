import React from "react";
import styled from "styled-components";

const Loading = () => (
  <StyledLoading viewBox="0 0 64 64">
    <circle className="c1" cx="8" cy="25" r="8" fill="#000000" />
    <circle className="c2" cx="32" cy="25" r="8" fill="#000000" />
    <circle className="c3" cx="56" cy="25" r="8" fill="#000000" />
  </StyledLoading>
);

const StyledLoading = styled.svg`
  width: 100%;
  max-width: 50px;
  margin: 40px;

  & .c1 {
    animation: breathe 2s ease-in-out infinite;
    animation-delay: 0s;
  }

  & .c2 {
    animation: breathe 2s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  & .c3 {
    animation: breathe 2s ease-in-out infinite;
    animation-delay: 0.4s;
  }

  @keyframes breathe {
    0% {
      transform: translateY(0px);
    }

    15% {
      transform: translateY(-8px);
    }

    30% {
      transform: translateY(0px);
    }
  }
`;

export default Loading;
