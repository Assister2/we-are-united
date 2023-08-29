import React, { Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import i18n from './i18n';
import Fallback from "pages/Fallback";
import Navbar from "components/Navbar";
import Banner from "components/Banner";
import Direction from "components/Direction";
import About from "components/About";
import Footer from "components/Footer";
import routes from "routes";
import PayItem from "components/payItem";
import axios from "axios";

export default function App() {
  // const [locale, setLocale] = useState(i18n.language);
  return (
    <>
    {/* <LocaleContext.Provider value={{locale, setLocale}}> */}
      <Navbar />
      {/* <Banner />
      <Direction />
      <About /> */}
      {/* <Main /> */}
      {/* <PayItem /> */}
      <Suspense fallback={<Fallback />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.page} index={route.index}/>
          ))}
        </Routes>
      </Suspense>
      <Footer />
      {/* </LocaleContext.Provider> */}
    </>
  );
}
