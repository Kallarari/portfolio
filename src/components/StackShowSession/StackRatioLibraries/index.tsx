import React from "react";

import styles from "./styles.module.css";
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
} from "recharts";

const StackRatioLibraries: React.FC = () => {
  const technologies = [
    {
      subject: "Redux",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Jest",
      A: 98,
      fullMark: 150,
    },
    {
      subject: "Context API",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Axios",
      A: 130,
      fullMark: 150,
    },
    {
      subject: "Storybook",
      A: 85,
      fullMark: 150,
    },
    {
      subject: "Git Flow",
      A: 130,
      fullMark: 150,
    },
  ];

  const stylesTech = [
    {
      subject: "SCSS",
      A: 130,
      fullMark: 150,
    },
    {
      subject: "Material UI",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Chacka UI",
      A: 90,
      fullMark: 150,
    },
    {
      subject: "ANT Desing",
      A: 60,
      fullMark: 150,
    },
    {
      subject: "Styled-Comp.",
      A: 130,
      fullMark: 150,
    },
    {
      subject: "Tailwind",
      A: 70,
      fullMark: 150,
    },
  ];
  return (
    <div className={styles.stackRatioContainer}>
      <div className={styles.radioChartContainer}>
        <h1 className={styles.titleRatioChart}>Tech Libraries</h1>
        <RadarChart outerRadius={90} width={430} height={250} data={technologies}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="React Librarie Experience"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
      <div className={styles.radioChartContainer}>
        <h1 className={styles.titleRatioChart}>Styles Libraries</h1>
        <RadarChart outerRadius={90} width={430} height={250} data={stylesTech}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="React Styles Experience"
            dataKey="A"
            stroke="#84d8d4"
            fill="#84d8d4"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default StackRatioLibraries;
