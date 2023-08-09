"use client";
import React, { useState } from "react";
import "./styles.css";
import ShowCaseCard from "./ShowCaseCard";
import { useTranslation } from "react-i18next";
import Button from "../Button";

const ShowCase: React.FC = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(Number)
  return (
    <div className="container">
      <div className="buttons-container">
      <Button style={selected===1?"selected":"borded"} onClick={()=>setSelected(1)} text={t('projects-page.options.first')} />
      <Button style={selected===2?"selected":"borded"} onClick={()=>setSelected(2)} text={t('projects-page.options.second')} />
      <Button style={selected===3?"selected":"borded"} onClick={()=>setSelected(3)} text={t('projects-page.options.third')} />
      </div>
      <ShowCaseCard title="Buy me a coffe" image="buy-me-a-coffee.png" />
    </div>
  );
};

export default ShowCase;
