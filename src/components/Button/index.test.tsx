import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Button from ".";

test("renders button with correct text", () => {
  const buttonText = "Click me!";
  const { getByText } = render(<Button>{buttonText}</Button>);

  const buttonElement = getByText(buttonText);
  expect(buttonElement).toBeInTheDocument();
});

test("renders button with icon when provided", () => {
  const icon = <svg data-testid="icon" />;
  const { getByTestId } = render(<Button icon={icon}>Button with Icon</Button>);

  const iconElement = getByTestId("icon");
  expect(iconElement).toBeInTheDocument();
});
