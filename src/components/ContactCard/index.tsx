"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import InputText from "../Input";
import Button from "../Button";
import { useTranslation } from "react-i18next";

const ContactCard: React.FC = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    feedback: "",
  });
  const [error, setError] = useState("");
  const { t } = useTranslation();
  const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const handleSendForm = () => {
    if (!regex.test(formValues.email))return setError("e-mail incorreto");
    if (formValues.firstName==="") return setError("Primeiro Nome incompleto");
    if (formValues.lastName==="") return setError("Último Nome incompleto");
    if (formValues.feedback==="") return setError("Feedback incompleto");
    setError("");
    console.log(formValues);
  };
  function handleChangeInput(e: any) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  return (
    <div className={styles.container_contact_card}>
      <form onSubmit={(e) => console.log(e)}>
        <div className={styles.container_contact_secundary}>
          <InputText
            onchangeEvent={() => handleSendForm()}
            name="firstName"
            placeholder="John"
            label={t("contact-page.first-name")}
            onError={error === "" ? false: formValues.firstName === ""}
          />
          <InputText
            onchangeEvent={(e) => handleChangeInput(e)}
            name="lastName"
            placeholder="Minozzo"
            label={t("contact-page.last-name")}
            onError={error === "" ? false: formValues.lastName === ""}
          />
        </div>
        <InputText
          onchangeEvent={(e) => handleChangeInput(e)}
          name="email"
          placeholder="john@example.com"
          label="E-mail*"
          onError={error === "" ? false: !regex.test(formValues.email)}
        />
        <InputText
          onchangeEvent={(e) => handleChangeInput(e)}
          name="feedback"
          textarea
          placeholder={t("contact-page.feedback-placeholder")}
          label="Feedback"
          onError={error === "" ? false:  formValues.feedback === ""}
        />
      </form>
      <Button
        type="submit"
        onClick={() => {
          handleSendForm();
        }}
        text={t("contact-page.button")}
      />
    </div>
  );
};

export default ContactCard;
