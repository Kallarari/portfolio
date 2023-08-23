"use client";
import React from "react";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.about_me_container}>
      <div className={style.titleCcontainer}>
        <h1 className={style.title}>{t("about-me.title")}</h1>
        <div className={style.description_container}>
          <img alt="me picture" src="/me.png" className={style.me_image} />
          <h2 className={style.subtitle}>{t("about-me.description")}</h2>
        </div>
        
        <h1 className={style.title}>{t("about-me.formations")}</h1>
        <div className={style.description_container}>
          <pre className={style.subtitle_one_collum}>{t("about-me.formations-content")} </pre>
        </div>
        
        <h1 className={style.title}>{t("about-me.experiences")}</h1>
        <div className={style.description_container}>
          <pre className={style.subtitle_one_collum}>{t("about-me.experiences-content")} </pre>
        </div>
        <Button text={t("about-me.button")} onClick={() => {}} />
      </div>
    </div>
  );
};

export default AboutMe;
