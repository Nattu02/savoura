import MOCK_DATA from "../../mocks/mockResList.json";
import Body from "../Body";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("The body component should render properly", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  expect(searchBtn).toBeInTheDocument();
});

test("Test the search functionality for bowl", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "bowl" } });

  const searchBtn = screen.getByRole("button", { name: "Search" });

  fireEvent.click(searchBtn);

  const searchResult = screen.getAllByTestId("resCard");

  //   console.log(searchResult);

  expect(searchResult.length).toBe(2);
});

test("render top rated properly", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  //   const topRatedBtn = screen.getByTestId("topRatedBtn");

  const topRatedBtn = screen.getByRole("button", { name: "Top Rated" });

  fireEvent.click(topRatedBtn);

  const resCards = screen.getAllByTestId("resCard");

  expect(resCards.length).toBe(5);
});
 