"use client";
import React from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import BestBugsContainer from "@/components/BestBugsContainer";

const BestBugs: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.projects_container}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>{t("best-bugs-page.title")}</h1>
        <h2 className={styles.subtitle}>{t("best-bugs-page.subtitle")}</h2>
      </div>
      <BestBugsContainer />
    </div>
  );
};

export default BestBugs;
