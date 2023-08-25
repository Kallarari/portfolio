"use client";
import React from "react";
import "./styles.css";
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
    <Link
      href={link}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors card-group"
    >
      <h2 className={`mb-3 text-2xl font-semibold footer-card-title`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 max-w-[30ch] text-sm opacity-50 footer-card-subtitle`}>
        {subtitle}
      </p>
    </Link>
  );
};

export default FooterCard;
