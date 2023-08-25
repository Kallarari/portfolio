import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '../locales/en.json';
import ptTranslation from '../locales/pt.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

const language = navigator.language;

i18n
  .use(initReactI18next) // inicializa o react-i18next
  .init({
    resources,
    debug: true,
    lng: language==='pt-BR'?"pt":"en", // idioma padrão
    fallbackLng: 'en', // idioma de fallback, caso o idioma preferido não esteja disponível
    interpolation: {
      escapeValue: false, // permite que você use códigos HTML em suas traduções
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;