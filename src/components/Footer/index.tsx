"use client";
import React from "react";
import "./styles.css";
import FooterCard from "./FooterCard";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      <FooterCard
        link="/projects"
        title={t('projects.title')}
        subtitle={t("projects.subtitle")}
      />
      <FooterCard
        link="aboutMe"
        title={t("about.title")}
        subtitle={t("about.subtitle")}
      />
      <FooterCard
        link=""
        title={t("templates.title")}
        subtitle={t("templates.subtitle")}
      />
      <FooterCard
        link="/solvedProblems"
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />
    </div>
  );
};

export default Footer;
