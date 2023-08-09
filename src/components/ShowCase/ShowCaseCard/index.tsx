import React from "react";
import "./styles.css";

interface ShowCaseCardProps {
  title: string;
  image: string;
}
const ShowCaseCard: React.FC<ShowCaseCardProps> = ({title, image}) => {
  return (
    <div className="container-show-case" style={{backgroundImage:'url(buy-me-a-coffee.png)'}}>
      <div className="title-container-card">
      <span className="title">{title}</span>
      </div>
    </div>
  );
};

export default ShowCaseCard;
