"use client";
import React from "react";
import Image from "next/image";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";

const AboutMeSession: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.description_container}>
      <Image
        alt="me picture"
        src="/me.png"
        width={300}
        height={200}
        className={style.me_image}
      />
      <h2 className={style.subtitle}>{t("about-me.description")}</h2>
    </div>
  );
};

export default AboutMeSession;
