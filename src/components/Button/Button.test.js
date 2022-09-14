import { render, screen } from "@testing-library/react";

import Button from "./Button";

test("renders the button", () => {
  render(<Button>Testing</Button>);
  const button = screen.getByRole("button", { name: /testing/i });
  expect(button).toBeInTheDocument();
});
