import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import Fallback from "pages/Fallback";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import Direction from "components/Direction";
import About from "components/About";
import Footer from "components/Footer";
import routes from "routes";
import PayItem from "components/payItem";

export default function App() {
  return (
    <>
      <Navbar />
      {/* <Banner />
      <Direction />
      <About /> */}
      
      {/* <PayItem /> */}
      <Suspense fallback={<Fallback />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.page} />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
