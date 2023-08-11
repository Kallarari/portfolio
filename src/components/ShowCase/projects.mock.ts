"use client";
import { useTranslation } from "react-i18next";

export const ProjectsMock = (selected?: string) => {
  const { t } = useTranslation();
  const mock = [
    {
      image: "url(briefing-jvm.png)",
      title: t("projects-page.projects.first"),
      filter: ["coolest", "complex"],
      technologies:["typescript"],
      link:"https://brtiefing-jvm.vercel.app/",
    },
    {
      image: "url(jvm-site.png)",
      title: t("projects-page.projects.second"),
      filter: ["coolest"],
      technologies:["javascript"],
      link:"https://jvm-webmarketing.vercel.app/"
    },
    {
      image: "url(vintage-app.png)",
      title: t("projects-page.projects.third"),
      filter: ["coolest"],
      technologies:["javascript"],
      link:"https://chalenge-nu.vercel.app/"
    },
    {
      image: "url(buy-me-a-coffee.png)",
      title: "coolest just",
      filter: ["coolest"],
      technologies:["typescript","javascript"],
      link:""
    },
  ];
  return selected
    ? mock.filter((item) => item.filter.includes(selected))
    : mock;
};
  
