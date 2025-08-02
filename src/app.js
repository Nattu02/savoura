import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy, Suspense, useState, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const root = ReactDom.createRoot(document.getElementById("root"));
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const [userLocation, setUserLocation] = useState();

  useEffect(() => {
    const data = {
      name: "Nattudurai",
      location: "Coimbatore",
    };
    setUserName(data.name);
    setUserLocation(data.location);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{ userName: userName, location: userLocation }}
      >
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...!!!</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:id",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={router} />);
