import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import PhonesDetails from "../PhoneDetails/PhonesDetails";

  const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
        {
            path: "/",
            loader: () => fetch(`../API.json`),
            element: <Home></Home>
        },
        {
            path: "/favorites",
            element: <Favorites></Favorites>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/phones/:id",
            loader: () => fetch('../API.json'),
            element: <PhonesDetails></PhonesDetails>
        },
      ]
    },
  ]);

export default Routes;