import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("The header component should render logo", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const logo = screen.getByAltText("Logo");
  expect(logo).toBeInTheDocument();
});

test("The header component should render login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btn = screen.getByRole("button");
  expect(btn).toBeInTheDocument();
});

test("The header component should render login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const btn = screen.getByRole("button");
  const btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument();
});

test("The header component should render with cart items zero", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒 - 0");

  expect(cartItems).toBeInTheDocument();
 
});

test("The login button should change to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const btn = screen.getByRole("button", {name: "Login"});

  fireEvent.click(btn);

  const logoutBtn = screen.getByRole("button", {name: "Logout"});

  expect(logoutBtn).toBeInTheDocument();
});