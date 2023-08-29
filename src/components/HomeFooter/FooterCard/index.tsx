"use client";
import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

interface footerCardProps {
  title: string;
  subtitle: string;
  link: string;
}
const FooterCard: React.FC<footerCardProps> = ({
  title,
  subtitle,
  link,
}: footerCardProps) => {
  return (
    <Link href={link}>
      <div className={styles.home_footer_container}>
        <h2 className={styles.footer_card_title}>
          {title} <span className={styles.footer_card_arrow}>-&gt;</span>
        </h2>
        <p className={styles.footer_card_subtitle}>{subtitle}</p>
      </div>
    </Link>
  );
};

export default FooterCard;
