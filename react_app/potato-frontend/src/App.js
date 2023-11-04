import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ImageUpload from "./pages/Home";



import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ImageUpload />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
