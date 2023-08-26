"use client";
import React from "react";

import styles from "./styles.module.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const { i18n, t } = useTranslation();
  return pathname !== "/" ? (
    <div className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.footer_content_collum}>
          <span>MENU</span>
          <Link href="/">{t('footer.home')}</Link>
          <Link href="/contact">{t('footer.contact')}</Link>
          <Link href="/aboutMe">{t('footer.about')}</Link>
          <Link href="/projects">{t('footer.projects')}</Link>
          <Link href="/bestBugs">{t('footer.best-bugs')}</Link>
        </div>
        <div className={styles.footer_content_collum}>
          <span>{t('footer.util')}</span>
          <Link href="https://nextjs.org/">NEXTJS DOC</Link>
          <Link href="/copyright/terms">{t('footer.terms')}</Link>
          <Link href="/copyright/privacy">{t('footer.conditions')}</Link>
          <Link href="/contact">{t('footer.feedback')}</Link>
          <Link href="https://github.com/Kallarari/portfolio">{t('footer.this-github')}</Link>
        </div>
        <div className={styles.footer_content_collum}>
          <div className={styles.footer_icons_container}>
            {" "}
            <a
              className={styles.icon_container}
              href={
                i18n.language === "pt" ? "./Curriculum João.pdf" : "./John.pdf"
              }
              target="_blank"
              download={
                i18n.language === "pt" ? "Curriculum João.pdf" : "John.pdf"
              }
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
            >
              <Icon className={styles.icon} width="30px" icon="uiw:github" />
            </a>
            <a
              className={styles.icon_container}
              href="https://www.linkedin.com/in/jo%C3%A3o-vitor-minosso-835737197/"
              target="_blank"
            >
              <Icon className={styles.icon} width="40px" icon="mdi:linkedin" />
            </a>
          </div>
          <pre>{t('footer.thaks-text')}</pre>
        </div>
      </div>
      <h2 className={styles.copy_text}>
        @ Copyright 2023 | João Vitor Minosso
      </h2>
    </div>
  ) : (
    ""
  );
};

export default Footer;
