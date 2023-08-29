"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };
  return (
    <div className="language-selector">
      <select value={i18n.language} onChange={(e)=>handleChangeLanguage(e.target.value)} id="language-select" aria-label="Change the language">
        <option aria-label="English language" value="en">EN</option>
        <option aria-label="Portuguese language" value="pt">PT</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
