import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LngDetector from 'i18next-browser-languagedetector';
import { it, en } from 'locales';

const resources = {
  en: {
    translation: en,
  },
  it: {
    translation: it,
  },
};

i18n
  .use(initReactI18next)
  .use(LngDetector)
  .init({
    resources,
    fallbackLng: 'en',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'locale',
      caches: ['localStorage'],
    },
  });

export default i18n;
