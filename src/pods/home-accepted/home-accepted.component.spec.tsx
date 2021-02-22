import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { HomeAcceptedComponent } from "./home-accepted.component";
describe("Home accepted component spec", () => {
  it("the img should be defined", () => {
    //Arrange
    const props = {
      onClick: jest.fn(),
      photoID: "hola",
    };
    //Act
    render(<HomeAcceptedComponent {...props} />);
    const imageElement = screen.getByRole("img");
    //Assert
    expect(imageElement).toBeDefined();
  });

  it("the button should have been called", () => {
    //Arrange
    const props = {
      onClick: jest.fn(),
      photoID: "hola",
    };
    //Act
    render(<HomeAcceptedComponent {...props} />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    expect(props.onClick).toHaveBeenCalled();
  });
});
