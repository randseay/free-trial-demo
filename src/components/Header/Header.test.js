import { render, screen } from "@testing-library/react";

import Header from "./Header";

test("renders the main navigation", () => {
  render(<Header />);
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(5);
});

test("renders the header button", () => {
  render(<Header />);
  const button = screen.getByRole("button", { name: /start free trial/i });
  expect(button).toBeInTheDocument();
});
