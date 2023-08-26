"use client";
import React from "react";
import styles from "./styles.module.css";
import FooterCard from "./FooterCard";
import { useTranslation } from "react-i18next";

const HomeFooter: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.home_footer_container}>
      <FooterCard
        link="projects"
        title={t('projects.title')}
        subtitle={t("projects.subtitle")}
      />
      <FooterCard
        link="aboutMe"
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />
      <FooterCard
        link="bestBugs"
        title={t("templates.title")}
        subtitle={t("templates.subtitle")}
      />
      <FooterCard
        link="contact"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />
    </div>
  );
};

export default HomeFooter;
