"use client";
import React, { useState } from "react";
import "./styles.css";
import { useTranslation } from "react-i18next";
import Button from "../Button";
import { BestBugsMock } from "./bestBugs.mock";
import BestBugsCard from "./bestBugsCard";

const BestBugsContainer: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(String);
  return (
    <div className="showcase-container">
      <div className="buttons-container">
        <Button
          style={selected === "payment" ? "selected" : "borded"}
          width="300px"
          onClick={() =>
            selected === "payment" ? setSelected("") : setSelected("payment")
          }
          text={t("best-bugs-page.options.first")}
        />
        <Button
          style={selected === "complex" ? "selected" : "borded"}
          width="300px"
          onClick={() =>
            selected === "complex" ? setSelected("") : setSelected("complex")
          }
          text={t("best-bugs-page.options.second")}
        />
        <Button
          style={selected === "coolest" ? "selected" : "borded"}
          width="300px"
          onClick={() =>
            selected === "coolest" ? setSelected("") : setSelected("coolest")
          }
          text={t("best-bugs-page.options.third")}
        />
      </div>
      <div className="card-wraper">
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
