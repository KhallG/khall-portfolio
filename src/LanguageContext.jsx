import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./data/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith("fr")) {
      setLang("fr");
    } else {
      setLang("en");
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "fr" : "en"));
  };

  const t = (key) => {
    const keys = key.split(".");
    return keys.reduce((acc, k) => acc?.[k], translations[lang]) || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
