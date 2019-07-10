import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";

describe("First react component test with enzyme", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });
});

describe("Examining the syntax of Jest tests", () => {
  it("sums numbers", () => {
    expect(1 + 2).toEqual(3);

    expect(2 + 2).toEqual(4);
  });
});
