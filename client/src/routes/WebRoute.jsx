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

import Teams from "../pages/Teams";
import RequestForm from "../pages/RequestForm";
import TeamMembers from "../components/Team-Members/TeamMembers";
import TeamDetails from "../pages/TeamDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="teams" element={<Teams />} />
      <Route path="teams/:teamName" element={<TeamMembers />} />
      <Route path="team/:slug" element={<TeamDetails />} />
      <Route path="request/material" element={<RequestForm />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

function WebRoute() {
  return <RouterProvider router={router} />;
}

export default WebRoute;
