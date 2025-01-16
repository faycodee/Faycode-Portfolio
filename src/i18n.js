import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import traslitionEN from "./tradiction/en.json";
import traslitionDE from "./tradiction/de.json";
import traslitionFR from "./tradiction/fr.json";

const resources = {
  en: {
    translation: {
      traslitionEN,
    },
  },
  de: {
    translation: {
      traslitionDE,
    },
  },
  fr: {
    translation: {
      traslitionFR,
    },
  },
};
i18n
.use(LanguageDetector)
.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
  react:{
    useSuspense:false
  }
});

export default i18n;
