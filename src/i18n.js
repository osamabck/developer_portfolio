import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import En from "./translations/en.json";
import Fr from "./translations/fr.json";

const resources = {
  en: { translation: En },
  fr: { translation: Fr },
};

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export const changeLanguage = (lang = "en") => {
  if (lang !== "fr" && lang !== "en") return;
  localStorage.setItem("lang", lang);
  document.getElementsByTagName("html")[0].setAttribute("lang", lang);
  i18n.changeLanguage(lang);
};

const initLanguage = () => {
  const lang = localStorage.getItem("lang");
  if (lang != null) changeLanguage(lang);
  else changeLanguage();
};

initLanguage();
