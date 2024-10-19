import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";

import Error from "../components/Error";

import Faculties from "../pages/Faculties";
import RequestForm from "../pages/RequestForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="faculties" element={<Faculties />} />
      <Route path="request/material" element={<RequestForm />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoute() {
  return <RouterProvider router={router} />;
}

export default WebRoute;
