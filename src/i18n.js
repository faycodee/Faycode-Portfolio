import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import HttpApi from "i18next-http-backend"; // Import the backend

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "de",
    detection: {
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
 
    backend: {
      // Path to translation files in `public/locale`
      loadPath: "/locale/{{lng}}/translation.json",
    },
  });

export default i18n;
