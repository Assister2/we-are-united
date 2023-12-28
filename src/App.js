import React, { Suspense,useState, useEffect } from "react";
import ReactGA from 'react-ga';
import { useParams } from "react-router-dom";
import { Route, Routes, useHistory } from "react-router-dom";
import { createBrowserHistory } from 'history';
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
  useEffect(() => {
    ReactGA.initialize('G-S7VMG0Z5Z9');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  const history = createBrowserHistory();
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });
  const { langCode } = useParams();
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
            <Route key={route.path} history={history} path={`/:${langCode}${route.path}`} element={route.page} index={route.index}/>
          ))}
        </Routes>
      </Suspense>
      <Footer />
      {/* </LocaleContext.Provider> */}
    </>
  );
}