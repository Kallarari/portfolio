import React from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const AboutMeFormationsSession: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.description_container}>
      <pre className={styles.subtitle_one_collum}>
        {t("about-me.formations-content")}{" "}
      </pre>
    </div>
  );
};

export default AboutMeFormationsSession;
