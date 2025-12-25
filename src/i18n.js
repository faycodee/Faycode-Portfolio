import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    debug: true,

    // ✅ German as default & fallback
    fallbackLng: "de",

    detection: {
      // Order matters
      order: ["localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: "/locale/{{lng}}/translation.json",
    },
  });

export default i18n;
