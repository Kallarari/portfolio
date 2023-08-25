"use client";
import React from "react";
import styles from "./styles.module.css";
import Card from "./Card";

const ContactCarroussel: React.FC = () => {
  return (
    <div className={styles.contact_carroussel_container}>
      <Card iconName="material-symbols:mail" iconWidth="40px" content="E-mail" link="mail:joaovitorminosso@yahoo.com.br" />
      <Card iconName="bi:linkedin" iconWidth="33px" content="Linkedin" link="https://www.linkedin.com/in/jo%C3%A3o-vitor-minosso-835737197/" />
      <Card iconName="jam:github" iconWidth="40px" content="Github" link="https://github.com/Kallarari" />
      <Card iconName="formkit:twitter" iconWidth="40px" content="Twitter" link="https://twitter.com/JooMinosso" />
      <Card iconName="ant-design:facebook-filled" iconWidth="48px" content="Facebook" link="https://www.facebook.com/joaovitor.minosso/" />
      <Card iconName="ri:instagram-fill" iconWidth="43px" content="Instagram" link="https://www.instagram.com/joaovitorminosso" />
      <Card iconName="mdi:youtube" iconWidth="63px" content="Youtube" link="https://www.youtube.com/channel/UCksPu25rM9K1uC8VZJJoUSg" />
      <Card iconName="cib:dev-to" iconWidth="50px" content="Dev To" link="https://dev.to/kallarari" />
      <Card iconName="simple-icons:hackerrank" iconWidth="34px" content="Hacker Rank" link="https://www.hackerrank.com/kallarari" />
      <Card iconName="academicons:stackoverflow-square" iconWidth="35px" content="StackOverflow" link="https://stackoverflow.com/users/18620446/jo%c3%a3o-vitor-minosso" />
      <Card iconName="ic:baseline-telegram" iconWidth="47px" content="Telegram" link="https://msng.link/o?minossoJoao=tg" />
    </div>
  );
};

export default ContactCarroussel;
