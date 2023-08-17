"use client";
import React from "react";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.container}>
      <div className={style.titleCcontainer}>
        <h1 className={style.title}>{t("about-me.title")}</h1>
        <h2 className={style.subtitle}>{t("about-me.subtitle")}</h2>
        <Button text={t("about-me.button")} onClick={()=>{}} />
      </div>
    </div>
  );
};

export default AboutMe;
