import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import traslitionEN from "../src/locale/en/translation.json";
import traslitionDE from "../src/locale/de/translation.json";
import traslitionFR from "../src/locale/fr/translation.json";

const resources = {
  en: { translation: traslitionEN },
  de: { translation: traslitionDE },
  fr: { translation: traslitionFR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
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
