"use client";
import React from "react";
import { Icon } from "@iconify/react";
import "./styles.css";

const ThemeSwitch: React.FC = () => {
  return (
    <div className="ThemeSwitchContainer">
      <Icon className="IconSun" width="40px" icon="solar:sun-bold" />      
      <label className="switch">
        <input type="checkbox" id="theme-switch" name="theme-switch" />
        <span className="slider round"></span>
      </label>
      <Icon className="IconMon" width="34px" icon="ph:moon-fill" />
    </div>
  );
};

export default ThemeSwitch;
