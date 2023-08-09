import React from "react";
import "./styles.css";

interface buttonProps {
  text: string;
  onClick: () => void;
  style?: "normal" | "borded" | "selected";
}
const Button: React.FC<buttonProps> = ({ text, onClick, style }) => {
  return (
    <button
      className={style? style : "button"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
