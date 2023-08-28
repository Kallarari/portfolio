"use client";
import React, { useEffect } from "react";
import "./styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface BestBugsCardProps {
  title: string;
  image: string;
  technologies: string[];
  link: string;
}

const BestBugsCard: React.FC<BestBugsCardProps> = ({
  title,
  image,
  technologies,
  link,
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
      name: "stack",
      width: "25px",
      IconName: "cib:stackoverflow",
    },
    {
      name: "react",
      width: "30px",
      IconName: "ri:reactjs-fill",
    },
    {
      name: "css",
      width: "25px",
      IconName: "akar-icons:css-fill",
    },
    {
      name: "language",
      width: "25px",
      IconName: "cil:language",
    },
  ];
  return (
    <Link href={link} target="_blank">
      <div className="container-show-case" style={{ backgroundImage: image }}>
        <div className="title-container-card">
          <span className="showcase-title">{title}</span>
        </div>
        <div className="stack-used-bar">
          {stackIcons.map((item, key) =>
            technologies.includes(item.name) ? (
              <Icon
                key={key}
                className="icon-showcase"
                width={item.width}
                icon={item.IconName}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </Link>
  );
};

export default BestBugsCard;
