"use client";
import React, { useState } from "react";
import "./styles.css";
import ShowCaseCard from "./ShowCaseCard";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { ProjectsMock } from "./projects.mock";

const ShowCase: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(String);
  return (
    <div className="showcase-container">
      <div className="buttons-container">
        <Button
          styleType={selected === "github" ? "selected" : "borded"}
          onClick={() =>
            selected === "github" ? setSelected("") : setSelected("github")
          }
          text={t("projects-page.options.first")}
        />
        <Button
          styleType={selected === "complex" ? "selected" : "borded"}
          onClick={() =>
            selected === "complex" ? setSelected("") : setSelected("complex")
          }
          text={t("projects-page.options.second")}
        />
        <Button
          styleType={selected === "figma" ? "selected" : "borded"}
          onClick={() =>
            selected === "figma" ? setSelected("") : setSelected("figma")
          }
          text={t("projects-page.options.third")}
        />
      </div>
      <div className="card-wraper">
        {ProjectsMock(selected).map((item, key) => (
          <ShowCaseCard
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

export default ShowCase;
