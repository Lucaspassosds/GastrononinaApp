import i18next from "i18next";
import * as resources from "./resources";
import { initReactI18next } from "react-i18next";

// Load the translations
const translationResources = {
  en: {
    translation: resources.en, // English translations
  },
  pt: {
    translation: resources.pt,
  },
  // Add more languages here as needed
};

i18next
  .use(initReactI18next) // Passes i18next instance to react-i18next
  .init({
    resources: translationResources,
    lng: "pt", // Default language
    fallbackLng: "en", // Fallback language if translation is missing
    compatibilityJSON: "v4", // Ensures compatibility with i18next v4 JSON structure
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    debug: true, // Set to false in production
  });

export default i18next;
