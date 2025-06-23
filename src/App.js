import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Aboutus = lazy(() => import("./components/About"));

const Applayout = () => {
  return (
    <div className="app">
      <Header /> 
      <Outlet />
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Aboutus />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

/**
 * Header
 * -Logo
 * -nav Items
 * Body
 * -Search
 * -RestaurntContainer
 *  -RsestaurntCard
 * Footer
 */

// import React from "react";
// import ReactDOM from "react-dom/client";
// const Heading = () => {
//   return <h2>ik</h2>;
// };
// //const heading = React.createElement("div", { id: 'heading1' }, React.createElement("h1", { id: "child" }, "Child I am"));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);
