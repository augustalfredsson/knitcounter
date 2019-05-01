import React, { useState } from "react";
import {
  WrapperFlexColumn,
  Column,
  ProjectTitle,
  CounterTitle,
  Number,
  Button,
  Row
} from "./styles";

import ProjectLink from "../ProjectLink";

const CounterContainerNotStyled = ({ projectTitle, counterTitle }) => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="wrapper-flex-column">
      <div className="column">
        <h3 className="counter-title">{counterTitle}</h3>
        <a
          className="project-link"
          href={`http://localhost:3000/${projectTitle}`}
        >
          {projectTitle}
        </a>
      </div>
      <div className="row">
        <p className="number">{counter}</p>
      </div>
      <div className="row">
        <button
          className="counter-button"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
        <button
          className="counter-button"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CounterContainerNotStyled;
