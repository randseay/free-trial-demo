import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SignupForm from "./SignupForm";

test("renders the header button", () => {
  render(<SignupForm />);
  const input = screen.getByRole("textbox", { id: "email" });
  expect(input).toBeInTheDocument();
  userEvent.type(input, "test@test.com");
  expect(input).toHaveValue("test@test.com");
});

test("renders the submit button", () => {
  render(<SignupForm />);
  const button = screen.getByRole("button", { name: /start free trial/i });
  expect(button).toBeInTheDocument();
});
