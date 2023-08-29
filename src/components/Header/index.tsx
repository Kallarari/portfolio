"use client";
import React from "react";
import { Icon } from "@iconify/react";
import styles from "./styles.module.css";
import ThemeSwitch from "../ThemeSwitch";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import Link from "next/link";

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  return (
    <div className={styles.header_container}>
      <div className={styles.header_interative_bar_container}>
        <Link href={"/"}>
          <p className={styles.code_on_header}>
            <code className={styles.header_code}>
              FullStack/StackShow/JoãoVitorMinosso
            </code>
          </p>
        </Link>
        <div className={styles.icons_container}>
          <a
            className={styles.icon_container}
            href={
              i18n.language === "pt" ? "./Curriculum João.pdf" : "./John.pdf"
            }
            target="_blank"
            download={
              i18n.language === "pt" ? "Curriculum João.pdf" : "John.pdf"
            }
            aria-label="Download my curriculum"
          >
            <Icon
              className={styles.icon}
              width="36px"
              icon="mdi:file-download"
            />
          </a>
          <a
            className={styles.icon_container}
            href="https://github.com/Kallarari"
            target="_blank"
            aria-label="See my github"
          >
            <Icon className={styles.icon} width="30px" icon="uiw:github" />
          </a>
          <a
            className={styles.icon_container}
            href="https://www.linkedin.com/in/jo%C3%A3o-vitor-minosso-835737197/"
            target="_blank"
            aria-label="See my linkedin"
          >
            <Icon className={styles.icon} width="40px" icon="mdi:linkedin" />
          </a>
          <a
            className={styles.icon_container}
            href="https://www.instagram.com/joaovitorminosso/"
            target="_blank"
            aria-label="See my instagram"
          >
            <Icon
              className={styles.icon}
              width="38px"
              icon="ri:instagram-fill"
            />
          </a>
          <a
            className={styles.icon_container}
            href="https://twitter.com/JooMinosso"
            target="_blank"
            aria-label="See my twitter"
          >
            <Icon className={styles.icon} width="38px" icon="ri:twitter-fill" />
          </a>
        </div>
        <div className={styles.configuration_container}>
          <ThemeSwitch />
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default Header;
