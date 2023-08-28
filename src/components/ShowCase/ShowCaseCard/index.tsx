"use client";
import React, { useEffect } from "react";
import "./styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface ShowCaseCardProps {
  title: string;
  image: string;
  technologies: string[];
  link: string;
}

const ShowCaseCard: React.FC<ShowCaseCardProps> = ({
  title,
  image,
  technologies,
  link
}) => {
  const stackIcons = [
    {
      name: "typescript",
      width: "25px",
      IconName: "akar-icons:typescript-fill",
    },
    {
      name: "javascript",
      width: "25px",
      IconName: "simple-icons:javascript",
    },
    {
      name: "figma",
      width: "25px",
      IconName: "solar:figma-bold",
    },
    {
      name: "nest",
      width: "25px",
      IconName: "simple-icons:nestjs",
    },
    {
      name: "react",
      width: "25px",
      IconName: "ri:reactjs-line",
    },
    {
      name: "git",
      width: "25px",
      IconName: "mdi:github",
    },
    {
      name: "next",
      width: "25px",
      IconName: "teenyicons:nextjs-solid",
    },
    {
      name: "html",
      width: "25px",
      IconName: "akar-icons:html-fill",
    },
    {
      name: "css",
      width: "25px",
      IconName: "akar-icons:css-fill",
    },
    {
      name: "wordpress",
      width: "25px",
      IconName: "formkit:wordpress",
    },
  ];
  return (
    <Link href={link} target="_blank">
      <div className="container-show-case" style={{ backgroundImage: image }}>
        <div className="title-container-card">
          <span className="showcase-title">{title}</span>
        </div>
        <div className="stack-used-bar">
          {stackIcons.map((item, key) => (
              technologies.includes(item.name)?
              <Icon
                key={key}
                className="icon-showcase"
                width={item.width}
                icon={item.IconName}
              />:""
            ))}
        </div>
      </div>
    </Link>
  );
};

export default ShowCaseCard;
