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
    <div className="container">
      <div className="buttons-container">
        <Button
          style={selected === "payment" ? "selected" : "borded"}
          onClick={() =>
            selected === "payment" ? setSelected("") : setSelected("payment")
          }
          text={t("projects-page.options.first")}
        />
        <Button
          style={selected === "complex" ? "selected" : "borded"}
          onClick={() =>
            selected === "complex" ? setSelected("") : setSelected("complex")
          }
          text={t("projects-page.options.second")}
        />
        <Button
          style={selected === "coolest" ? "selected" : "borded"}
          onClick={() =>
            selected === "coolest" ? setSelected("") : setSelected("coolest")
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
