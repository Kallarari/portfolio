import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en.json";
import ptTranslation from "../locales/pt.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

let language = "en";
if (typeof window !== "undefined") language = window.navigator.language;

i18n
  .use(initReactI18next) // initialize react-i18next
  .init({
    resources,
    debug: true,
    lng: language === "pt-BR" ? "pt" : "en", // default language
    fallbackLng: "en", // fallback language
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
