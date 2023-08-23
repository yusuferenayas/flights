import React from "react";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ResultPage from ".";

test("renders success message when isSuccess is true", () => {
  const { getByText } = render(<ResultPage />);

  const successMessage = getByText("Kabin seçiminiz tamamlandı.");
  expect(successMessage).toBeInTheDocument();
});
