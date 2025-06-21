import React from "react";
import { lazy , Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import ResturantCard from "./components/ResturantCard";
import ResturantMenue from "./components/RestaurantMenue";
// import About from "./components/About";
import Error from "./components/Error";
 

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
 
 

const Grocery = lazy(() => import("./components/Grocery"));

const About = lazy (() => import("./components/About"));

const AppLayout = () => {
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
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element:  <Suspense fallback={<h1>Loading page........</h1>
        }> <About /> </Suspense>
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element:  <Suspense fallback={<h1>Loading page........</h1>
        }><Grocery /></Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantMenue />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
