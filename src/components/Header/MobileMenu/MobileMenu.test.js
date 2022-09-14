import { render, screen } from "@testing-library/react";

import MobileMenu from "./MobileMenu";

beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

test("renders the main navigation", () => {
  const setOpen = jest.fn();
  render(<MobileMenu open={true} setOpen={setOpen} />);
  const items = screen.getAllByRole("listitem");
  expect(items).toHaveLength(4);
});

test("renders the free trial button", () => {
  const setOpen = jest.fn();
  render(<MobileMenu open={true} setOpen={setOpen} />);
  const button = screen.getByRole("button", { name: /start free trial/i });
  expect(button).toBeInTheDocument();
});

test("closes the menu", () => {
  const setOpen = jest.fn();
  render(<MobileMenu open={true} setOpen={setOpen} />);
  const closeButton = screen.getByRole("button", { name: /close menu/i });
  expect(closeButton).toBeInTheDocument();
  closeButton.click();
  expect(setOpen).toHaveBeenCalledWith(false);
});
