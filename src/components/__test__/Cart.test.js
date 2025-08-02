import MENU from "../../mocks/mockMenu.json";
import Menu from "../Menu";
import Header from "../Header";
import Cart from "../Cart";
import { act } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MENU);
    },
  });
});

test("should load restaurant menu", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <Menu />
      </Provider>
    );
  });

  const resName = screen.getByText(/Dindigul Thalappakatti/);

  expect(resName).toBeInTheDocument();
});

test("display menu items correctly", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <Menu />
      </Provider>
    );
  });

  const accordionHeading = screen.getByText("Milkshakes (7)");

  expect(accordionHeading).toBeInTheDocument();

  fireEvent.click(accordionHeading);

  const dishes = screen.getAllByTestId("dish");

  expect(dishes.length).toBe(7);
});

// test("items added to card correctly", async () => {
//   await act(async () => {
//     render(
//       <Provider store={appStore}>
//         <BrowserRouter>
//           <Header />
//         </BrowserRouter>
//         <Menu />
//       </Provider>
//     );
//   });

//   const addBtns = screen.getAllByRole("button", { name: "ADD" });

//   fireEvent.click(addBtns[0]);

//   const cardHeader = screen.getByText(/🛒 - 1/);

//   expect(cardHeader).toBeInTheDocument();
// });

// it("should add items to the cart properly", async () => {
//   await act(async () => {
//     render(
//       <Provider store={appStore}>
//         <BrowserRouter>
//           <Header />
//           <Menu />
//           <Cart />
//         </BrowserRouter>
//       </Provider>
//     );
//   });

//   const accHeader = screen.getByText("Soups (8)");

//   fireEvent.click(accHeader);

//   const addBtns = screen.getAllByRole("button", { name: "ADD" });

//   fireEvent.click(addBtns[1]);

//   const dishes = screen.getAllByTestId("dish");

//   expect(dishes.length).toBe(10);
// });

it("should clear cart on clicking the button", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <Menu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const soups = screen.getByText("Soups (8)");

  fireEvent.click(soups);

  const soupItems = screen.getAllByRole("button", {name: "ADD"});

  fireEvent.click(soupItems[0]);

  const dishCnt = screen.getAllByTestId("dish");

  expect(dishCnt.length).toBe(9);

  const clearBtn = screen.getByTestId("clrBtn")

  fireEvent.click(clearBtn);

  const cartIcon = screen.getByText(/🛒 - 0/);

  expect(cartIcon).toBeInTheDocument();
});
