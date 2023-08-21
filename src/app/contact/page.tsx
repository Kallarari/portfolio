"use client";
import React from "react";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.contact_container}>
      <div className={style.titleCcontainer}>
        <h1 className={style.title}>{t("catact.title")}</h1>
        <h2 className={style.subtitle}>{t("catact.subtitle")}</h2>
        <Button text={t("catact.button")} onClick={()=>{}} />
      </div>
    </div>
  );
};

export default AboutMe;
