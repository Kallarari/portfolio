"use client";
import React, { useState } from "react";
import style from "./styles.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import { RadialBarChart, PolarAngleAxis, RadialBar } from "recharts";
import { useTranslation } from "react-i18next";
import StackRatioLibraries from "./StackRatioLibraries";

const StackShowSession: React.FC = () => {
  const { t } = useTranslation();
  const [technologySelected, setTechnologiSelected] = useState("React");
  const dataChart = [
    {
      x: 10,
      value: 90,
      fill: "#278894",
      icon: "ri:reactjs-fill",
      name: "React",
      iconSize: 40,
    },
    {
      x: 2,
      value: 80,
      fill: "#0c142a",
      icon: "file-icons:nextjs",
      name: "NextJS",
      iconSize: 36,
    },
    {
      x: 2,
      value: 60,
      fill: "#117453",
      icon: "cib:expo",
      name: "Expo/ReactNative",
      iconSize: 36,
    },
  ];
  const profissionalExperiences = [
    {
      companyName: "Grimpatech Ltda",
      technologies: ["React", "Expo/ReactNative"],
      initialDate: "04/2023",
      city: "FOZ DO IGUAÇU/PR/Brazil",
    },
    {
      companyName: "Agrotis",
      technologies: ["NextJS", "React"],
      initialDate: "11/2022",
      city: "CURITIBA/PR/Brazil",
    },
    {
      companyName: "Sou Digital",
      technologies: ["NextJS", "React","Expo/ReactNative"],
      initialDate: "01/2023",
      city: "FLORIANOPOLIS/SC/Brazil",
    },
    {
      companyName: "Weef",
      technologies: ["NextJS", "React"],
      initialDate: "08/2022",
      city: "SÃO PAULO/SP/Brazil",
    },
    {
      companyName: "JVM Webmarketing",
      technologies: ["React"],
      initialDate: "04/2022",
      city: "FLORIANOPOLIS/SC/Brazil",
    },
    {
      companyName: "Wedev Group",
      technologies: ["NextJS", "React"],
      initialDate: "04/2022",
      city: "BALNEARIO CAMBORIU/SC/Brazil",
    },
    {
      companyName: "Luminos",
      technologies: ["NextJS", "React"],
      initialDate: "11/2021",
      city: "CURITIBA/PR/Brazil",
    },
    {
      companyName: "FRELLANCER",
      technologies: ["Expo/ReactNative", "React"],
      initialDate: "06/2021",
      city: "FLORIANOPOLIS/SC/Brazil",
    },
    {
      companyName: "INDIEWITCH",
      technologies: ["React"],
      initialDate: "02/2021",
      city: "CURITIBA/PR/Brazil",
    },
  ];
  return (
    <div className={style.stackShowcase}>
      <div className={style.stackShowcaseTechnologies}>
        <div className={style.chartContainer}>
          <RadialBarChart
            width={400}
            height={343}
            data={dataChart}
            innerRadius={105}
            outerRadius={60}
            barSize={20}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              isAnimationActive={false}
              dataKey="value"
              onMouseOver={(e) => setTechnologiSelected(e.name)}
              onMouseLeave={() => setTechnologiSelected("")}
              onClick={(e) => setTechnologiSelected(e.name)}
              cornerRadius={30 / 2}
              fill="#0BEFF2"
            />
          </RadialBarChart>
          <div className={style.labelsContainer}>
            {dataChart.map((item, key) => (
              <div
                className={style.chartLabel}
                key={key}
                onMouseOver={() => setTechnologiSelected(item.name)}
                onClick={(e) => setTechnologiSelected(item.name)}
              >
                <Icon
                  icon={item.icon}
                  color={item.fill}
                  width={item.iconSize}
                />
                <span className={style.chartLabelText}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={style.profissionalExperiencesContainer}>
          <th className={style.headProfissionalExperiences}>
            {t("about-me.stack-show-session.headProfissionalExperiences")}
          </th>
          <div className={style.profissionalExperiencesBody}>
            {technologySelected === "" ? (
              <h2 className={style.profissionalExperiencesSelectAnTech}>
                {t("about-me.stack-show-session.select-and-technology")}
              </h2>
            ) : (
              profissionalExperiences
                .filter((item) =>
                  item.technologies.includes(technologySelected)
                )
                .map((item, key) => (
                  <div className={style.profissionalExperiencesTable} key={key}>
                    <div
                      className={
                        style.profissionalExperiencesCompanyNameContainer
                      }
                    >
                      <h3 className={style.profissionalExperiencesCompanyName}>
                        {item.companyName}
                      </h3>
                    </div>
                    <div
                      className={
                        style.profissionalExperiencesExperienceInformationContainer
                      }
                    >
                      <span
                        className={
                          style.profissionalExperiencesExperienceInformation
                        }
                      >
                        {t('about-me.initial-date')}<br></br>{item.initialDate}
                      </span>
                      <span
                        className={
                          style.profissionalExperiencesExperienceInformation
                        }
                      >
                        {item.city}
                      </span>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
      <StackRatioLibraries />
    </div>
  );
};

export default StackShowSession;
