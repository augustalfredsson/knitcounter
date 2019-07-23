import React from "react";
import { render } from "@testing-library/react";
import Grid from "../components/Grid.js";

const mockData = {
  "302oy8PC1iKtrBAo7mmO": {
    id: "302oy8PC1iKtrBAo7mmO",
    image:
      "https://firebasestorage.googleapis.com/v0/b/knit-counter.appspot.com/o/images%2F0sXCHk3yPwab51VqhlcR0jVDlZS2%2F302oy8PC1iKtrBAo7mmO.jpg?alt=media&token=dbe973f1-e26d-4aee-a238-5ac725bf076f",
    name: "Lina"
  },
  W1uM5s4SYXPyuVOLKw7F: {
    id: "W1uM5s4SYXPyuVOLKw7F",
    image:
      "https://firebasestorage.googleapis.com/v0/b/knit-counter.appspot.com/o/images%2F0sXCHk3yPwab51VqhlcR0jVDlZS2%2FW1uM5s4SYXPyuVOLKw7F.jpg?alt=media&token=53b30f15-deb0-4b06-b501-023e475596bd",
    name: "asodknalsdkn"
  }
};

describe("Grid", () => {
  const { queryByText, getAllByTestId } = render(<Grid data={mockData} />);
  it("First item has label Lina", () => {
    const label = queryByText("Lina");
    expect(label.innerHTML).toBe("Lina");
  });

  it("Renders a grid with two items", () => {
    const gridItems = getAllByTestId("GridItem");
    expect(gridItems.length).toBe(2);
  });
});
