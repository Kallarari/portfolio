"use client";
import React from "react";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import ContactCard from "@/components/ContactCard";
import { Icon } from "@iconify/react/dist/iconify.js";
import ContactCarroussel from "@/components/ContactCarroussel";

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.contact_container}>
      <ContactCarroussel />
      <div className={style.contact_feedback}>
        <div className={style.title_container}>
          <Icon
            icon="fluent:person-feedback-16-filled"
            className={style.icon}
          />
          <h1 className={style.title}>{t("contact-page.title")}</h1>
          <h2 className={style.subtitle}>{t("contact-page.subtitle")}</h2>
        </div>
        <ContactCard />
      </div>
    </div>
  );
};

export default AboutMe;
