"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";

const MeuComponente: React.FC = () => {
  const { t } = useTranslation();
  const textToShow = "Stack Showcase";
  const [visibleText, setVisibleText] = useState("");
  const [firstText, setFirstText] = useState("");
  const [secondText, setSecondText] = useState("");
  const [thirdText, setThirdText] = useState("");

  useEffect(() => {
    let currentLength = 0;
    const timeoutStart = setTimeout(() => {
      setInterval(() => {
        if (currentLength < textToShow.length) {
          setVisibleText(textToShow.substring(0, currentLength + 1));
          currentLength++;
        }
      }, 100);
    }, 6000);
    return () => {
      clearTimeout(timeoutStart);
    };
  }, []);

  useEffect(() => {
    let currentLength1 = 0;
    const intervalShow = setInterval(() => {
      if (currentLength1 < 7) {
        setFirstText(t('name').substring(0, currentLength1 + 1));
        setSecondText("itor ".substring(0, currentLength1 + 1));
        setThirdText("inosso ".substring(0, currentLength1 + 1));
        currentLength1++;
      } else {
        clearInterval(intervalShow);
        setTimeout(() => {
          const intervalHide = setInterval(() => {
            if (currentLength1 >= 0) {
              setFirstText(t('name').substring(0, currentLength1));
              setSecondText("itor ".substring(0, currentLength1));
              setThirdText("inosso ".substring(0, currentLength1));
              currentLength1--;
            } else {
              clearInterval(intervalHide);
            }
          }, 200);
        }, 2000);
      }
    }, 200);

    return () => {
      clearInterval(intervalShow);
    };
  }, []);
  return (
    <div className={styles.container}>
      <h1 className={styles.name_text}>
        <strong>J</strong>
        {firstText}
        <strong>V</strong>
        {secondText}
        <strong>M</strong>
        {thirdText} {visibleText}
      </h1>
    </div>
  );
};

export default MeuComponente;
