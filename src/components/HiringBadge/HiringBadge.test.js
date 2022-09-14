import { render, screen } from "@testing-library/react";

import HiringBadge from "./HiringBadge";

test("renders the badge", () => {
  render(<HiringBadge />);
  const badge = screen.getByText(/we're hiring/i);
  expect(badge).toBeInTheDocument();
});
