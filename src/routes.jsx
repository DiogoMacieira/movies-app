import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "./pages/MoviesGrid.css";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <Movie />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
],    
    {
      basename: "/movies-app",
    })

