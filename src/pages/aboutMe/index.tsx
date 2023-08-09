"use client";
import React from "react";
import "./styles.css";
import "../../app/globals.css";
import "../../i18nify";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Header />
      <div className="title-container">
        <h1 className="title">{t("about-me.title")}</h1>
        <h2 className="subtitle">{t("about-me.subtitle")}</h2>
        <Button text={t("about-me.button")} onClick={()=>{}} />
      </div>
    </div>
  );
};

export default AboutMe;
