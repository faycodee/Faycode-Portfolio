import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import traslitionEN from "../public/locale/en.json";
import traslitionDE from "../public/locale/de.json";
import traslitionFR from "../public/locale/fr.json";

const resources = {
  en: {
    translation: {
      traslitionEN,

      //   titel: "welcome",
    },
  },
  de: {
    translation: {
      //   traslitionDE,
      titel: " zu React und react-i18next",
    },
  },
  fr: {
    translation: {
      //   traslitionFR,
      titel: "Bien zu React und react-i18next",
    },
  },
};
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: "en",
    fallbackLng: "en",
    detection: {
      order: [
        "cookie",
        "htmlTag",
        "querystring",
        "localStorage",
        "sessionStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      // bach katb9a f akhir logha derti
      cache: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
