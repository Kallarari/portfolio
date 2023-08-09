"use client";
import React from "react";
import "./styles.css";
import "../../app/globals.css";
import "../../i18nify";
import Header from "@/components/Header";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import ShowCase from "@/components/ShowCase";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <Header />
      <div className="title-container">
        <h1 className="title">{t("projects-page.title")}</h1>
        <h2 className="subtitle">{t("projects-page.subtitle")}</h2>
        <Button text={t("projects-page.button")} onClick={()=>{}} />
      </div>
      <ShowCase />
    </div>
  );
};

export default Projects;
