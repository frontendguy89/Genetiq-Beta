import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enTranslation from './locales/en/translation.json';
import hyTranslation from './locales/am/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  hy: {
    translation: hyTranslation,
  },
  // Add other languages here
};

i18n
  .use(initReactI18next) // passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Use this language if translation is missing
    interpolation: {
      escapeValue: false, // React already prevents XSS
    },
    // Optional: for production you might use i18next-http-backend 
    // to load translations lazily from the public folder.
  });

export default i18n;