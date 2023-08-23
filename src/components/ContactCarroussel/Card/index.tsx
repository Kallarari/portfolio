import React from "react";

import styles from "./styles.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface CardProps {
  iconName: string;
  iconWidth: string;
  content: string;
  link:string;
}
const Card: React.FC<CardProps> = ({ iconName, iconWidth, content,link }) => {
  return (
    <Link href={link} target="_blank">
      <div className={styles.carroussel_card}>
        <Icon width={iconWidth} icon={iconName} />
        <pre>{content}</pre>
      </div>
    </Link>
  );
};

export default Card;
