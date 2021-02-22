import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { HomeRejectedComponent } from "./home-rejected.component";

describe("Home rejected component spec", () => {
  it("the img should be defined", () => {
    //Arrange
    const props = {
      onClickReTake: jest.fn(),
      onClickRejected: jest.fn(),
      photoID: "img",
    };
    //Act
    render(<HomeRejectedComponent {...props} />);
    const imageElement = screen.getByRole("img");
    //Assert
    expect(imageElement).toBeDefined();
  });

  it("the buttons should have been called", () => {
    //Arrange
    const props = {
      onClickReTake: jest.fn(),
      onClickRejected: jest.fn(),
      photoID: "img",
    };
    //Act
    render(<HomeRejectedComponent {...props} />);

    const firstButtonElement = screen.getAllByRole("button");
    userEvent.click(firstButtonElement[0]);

    const secondButtonElement = screen.getAllByRole("button");
    userEvent.click(secondButtonElement[1]);

    //Assert
    expect(props.onClickReTake).toHaveBeenCalled();
    expect(props.onClickRejected).toHaveBeenCalled();
  });
});
