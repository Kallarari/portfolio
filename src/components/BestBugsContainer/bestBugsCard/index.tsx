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
  ];
  return (
    <Link href={link} target="_blank">
      <div className="container-show-case" style={{ backgroundImage: image }}>
        <div className="title-container-card">
          <span className="showcase-title">{title}</span>
        </div>
        <div className="stack-used-bar">
          {stackIcons
            .filter((icon) => technologies.includes(icon.name))
            .map((item, key) => (
              <Icon
                key={key}
                className="icon-showcase"
                width={item.width}
                icon={item.IconName}
              />
            ))}
        </div>
      </div>
    </Link>
  );
};

export default BestBugsCard;
