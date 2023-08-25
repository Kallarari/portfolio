"use client";
import React, { ChangeEventHandler, InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface inputProps {
  name: string;
  placeholder: string;
  label: string;
  textarea?: boolean;
  onchangeEvent: (e: any) => void;
  onError:boolean;
}
const InputText: React.FC<inputProps> = ({
  placeholder,
  label,
  textarea,
  onchangeEvent,
  name,
  onError
}) => {
  return (
    <div className={styles.container_input}>
      <span className={styles.label}>{label}</span>
      {textarea ? (
        <textarea
          name={name}
          onChange={onchangeEvent}
          className={onError? styles.textarea_error:styles.textarea}
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          name={name}
          onChange={onchangeEvent}
          className={onError? styles.input_error:styles.input}
          placeholder={placeholder}
        ></input>
      )}
    </div>
  );
};

export default InputText;
