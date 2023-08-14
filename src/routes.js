import React, { lazy } from "react";

const About = lazy(() => import("pages/About"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));
const Directions = lazy(() => import("pages/Directions"));
const Meeting = lazy(() => import("pages/Meeting"));
const Contacts = lazy(() =>import("pages/Contacts"));
const Help = lazy(() => import("pages/Help"))

const routes = [
  {
    path: "*",
    page: <NotFound />,
  },
  {
    path: "/404",
    page: <NotFound />,
  },
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/about",
    page: <About />,
  },
];

export default routes;