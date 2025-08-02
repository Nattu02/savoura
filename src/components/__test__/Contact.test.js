import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("The contact page should be rendered properly", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
});

test("Number of input boxes should be 2", () => {
    render(<Contact />);

    const inputs = screen.getAllByRole("textbox");

    expect(inputs.length).toBe(2);
})
