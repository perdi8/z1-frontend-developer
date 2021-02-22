import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { HomeComponent } from "./home.component";
describe("Home component spec", () => {
  it("the button should be defined", () => {
    //Arrange
    const props = {
      onClick: jest.fn(),
    };
    //Act
    render(<HomeComponent {...props} />);
    const buttonElement = screen.getByRole("button");
    //Assert
    expect(buttonElement).toBeDefined();
  });

  it("the button should have been called", () => {
    //Arrange
    const props = {
      onClick: jest.fn(),
    };
    //Act
    render(<HomeComponent {...props} />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    //Assert
    expect(props.onClick).toHaveBeenCalled();
  });

  it("the img should be defined", () => {
    //Arrange
    const props = {
      onClick: jest.fn(),
    };
    //Act
    render(<HomeComponent {...props} />);
    const imageElement = screen.getByRole("img");
    //Assert
    expect(imageElement).toBeDefined();
  });
});
