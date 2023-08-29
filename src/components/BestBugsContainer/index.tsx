"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { BestBugsMock } from "./bestBugs.mock";
import BestBugsCard from "./bestBugsCard";

const BestBugsContainer: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(String);
  return (
    <div className={styles.showcase_container}>
      <div className={styles.buttons_container}>
        <Button
          styleType={selected === "tuto" ? "selected" : "borded"}
          width="300px"
          onClick={() =>
            selected === "tuto" ? setSelected("") : setSelected("tuto")
          }
          text={t("best-bugs-page.options.first")}
        />
        <Button
          styleType={selected === "stack" ? "selected" : "borded"}
          width="300px"
          onClick={() =>
            selected === "stack" ? setSelected("") : setSelected("stack")
          }
          text={t("best-bugs-page.options.second")}
        />
        <Button
          styleType={selected === "solved" ? "selected" : "borded"}
          width="300px"
          onClick={() =>
            selected === "solved" ? setSelected("") : setSelected("solved")
          }
          text={t("best-bugs-page.options.third")}
        />
      </div>
      <div className={styles.card_wraper}>
        {BestBugsMock(selected).map((item, key) => (
          <BestBugsCard
            link={item.link}
            technologies={item.technologies}
            key={key}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default BestBugsContainer;
