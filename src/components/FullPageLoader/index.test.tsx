import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FullPageLoader from ".";

test("renders CircularProgress with correct props", () => {
  const { getByTestId } = render(<FullPageLoader />);

  const circularProgress = getByTestId("full-page-loader");

  expect(circularProgress).toBeInTheDocument();
});
