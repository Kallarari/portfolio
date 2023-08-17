import React from "react";
import "./styles.css";

interface buttonProps {
  text: string;
  onClick: () => void;
  style?: "normal" | "borded" | "selected";
  width?:string;
}
const Button: React.FC<buttonProps> = ({ text, onClick, style, width }) => {
  return (
    <button
      className={style? style : "button"}
      onClick={onClick}
      style={{width:width}}
    >
      {text}
    </button>
  );
};

export default Button;
