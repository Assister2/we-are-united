import React, { lazy } from "react";

const About = lazy(() => import("pages/About"));
const Home = lazy(() => import("pages/Home"));
const NotFound = lazy(() => import("pages/NotFound"));
const Directions = lazy(() => import("pages/Directions"));
const Meeting = lazy(() => import("pages/Meeting"));
const Contacts = lazy(() =>import("pages/Contacts"));
const Help = lazy(() => import("pages/Help"));
const Payment = lazy(() => import("pages/Payment"));
const Detail = lazy(() => import("pages/Detail"));

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
    // title: 'Homepage',
  },
  {
    path: "/about",
    page: <About />,
    // title: 'About Us',
  },
  {
    path: "/about/:id",
    page: <About id/>,
  },
  {
    path: "/detail/:id",
    page: <Detail id/>,
    // title: 'Detail',
  },
  {
    path: "/directions",
    page: <Directions />,
    // title: 'Direction'
  },
  {
    path: "/meeting",
    page: <Meeting />,
    // title: 'Meeting',
  },
  {
    path: "/contacts",
    page: <Contacts />,
    // title: 'Contacts',
  },
  {
    path: "/help",
    page: <Help />,
    // title: 'Help'
  },
  {
    path: "/payment",
    page: <Payment />,
    // title: 'Payment',
  },
  {
    path: "/detail",
    page: <Detail />,
    // title: 'Detail',
  },
];

export default routes;
