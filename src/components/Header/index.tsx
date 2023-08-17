import React from "react";
import { Icon } from "@iconify/react";
import "./styles.css";
import ThemeSwitch from "../ThemeSwitch";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Link href={"/"}>
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 codeContainer">
          <code className="font-mono font-bold">
            FullStack/StackShow/JoãoVitorMinosso
          </code>
        </p>
      </Link>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="IconContainer"
          href="https://github.com/Kallarari"
          target="_blank"
        >
          <Icon className="icon" width="30px" icon="uiw:github" />
        </a>
        <a
          className="IconContainer"
          href="https://www.linkedin.com/in/jo%C3%A3o-vitor-minosso-835737197/"
          target="_blank"
        >
          <Icon className="icon" width="40px" icon="mdi:linkedin" />
        </a>
        <a
          className="IconContainer"
          href="https://www.instagram.com/joaovitorminosso/"
          target="_blank"
        >
          <Icon className="icon" width="38px" icon="ri:instagram-fill" />
        </a>
        <a
          className="IconContainer"
          href="https://twitter.com/JooMinosso"
          target="_blank"
        >
          <Icon className="icon" width="38px" icon="ri:twitter-fill" />
        </a>
        <ThemeSwitch />
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Header;
