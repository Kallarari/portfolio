"use client";
import React, { ButtonHTMLAttributes } from "react";
import "./styles.css";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick: () => void;
  styleType?: "normal" | "borded" | "selected";
  width?:string;
}
const Button: React.FC<buttonProps> = ({ text, onClick, styleType, width }) => {
  return (
    <button
      className={styleType? styleType : "button"}
      onClick={onClick}
      style={{width:width}}
    >
      {text}
    </button>
  );
};

export default Button;
