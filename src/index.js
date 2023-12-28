import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, useHistory } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import axios from "axios";
import App from "App";
import theme from "theme";
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import common_en from "./translations/en/common.json";
import common_de from "./translations/de/common.json";
import common_fr from "./translations/fr/common.json";
import common_es from "./translations/es/common.json";
import common_it from "./translations/it/common.json";
import common_ua from "./translations/ua/common.json";

const root = createRoot(document.getElementById("root"));
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: 'en',                              // language to use
    resources: {
        en: {
          common: common_en               // 'common' is our custom namespace
        },
        de: {
          common: common_de
        },
        fr: {
          common: common_fr
        },
        es: {
          common: common_es
        },
        it: {
          common: common_it
        },
        ua: {
          common: common_ua
        }
    },
});

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
