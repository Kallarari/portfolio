"use client";
import React from "react";
import style from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import StackShowSession from "@/components/StackShowSession";
import { useRouter } from 'next/navigation'

const AboutMe: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();
  return (
    <div className={style.about_me_container}>
      {" "}
      <div className={style.title_container}>
        <h1 className={style.title}>{t("about-me.stack")}</h1>
      </div>
      <StackShowSession />
      <div className={style.title_container}>
        <h1 className={style.title}>{t("about-me.title")}</h1>
      </div>
      <div className={style.description_container}>
        <img alt="me picture" src="/me.png" className={style.me_image} />
        <h2 className={style.subtitle}>{t("about-me.description")}</h2>
      </div>
      <h1 className={style.title}>{t("about-me.formations")}</h1>
      <div className={style.description_container}>
        <pre className={style.subtitle_one_collum}>
          {t("about-me.formations-content")}{" "}
        </pre>
      </div>
      <div className={style.another_options}>
        <Button text={t("about-me.button-see-my-projects")} onClick={() => router.push('/projects')} />
        <Button text={t("about-me.button-problems-i-solved")} onClick={() => router.push("/bestBugs")} />
        <Button text={t("about-me.button-contact-me")} onClick={() => router.push('/contact')} />
      </div>
    </div>
  );
};

export default AboutMe;
