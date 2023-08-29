"use client";
import React from "react";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import StackShowSession from "@/components/StackShowSession";
import AboutMeSession from "@/components/AboutMeSession";
import AboutMeFormationsSession from "@/components/AboutMeFormationsSession";
import AboutMeOptionsMenu from "@/components/AboutMeOptionsMenu";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.about_me_container}>
      <h1 className={style.title}>{t("about-me.stack")}</h1>
      <StackShowSession />
      <h1 className={style.title}>{t("about-me.title")}</h1>
      <AboutMeSession />
      <h1 className={style.title_formation}>{t("about-me.formations")}</h1>
      <AboutMeFormationsSession />
      <AboutMeOptionsMenu />
    </div>
  );
};

export default AboutMe;
