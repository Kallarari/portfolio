"use client";
import { useTranslation } from "react-i18next";

export const BestBugsMock = (selected?: string) => {
  const { t } = useTranslation();
  const mock = [
    {
      image: "url(black-light-theme.PNG)",
      title: t("best-bugs-page.solved-problems.black-light"),
      filter: ["solved"],
      technologies:["javascript","css"],
      link:"https://dev.to/kallarari/how-i-make-darklight-theme-12m",
    },
    {
      image: "url(internacionalização.PNG)",
      title: t("best-bugs-page.solved-problems.internationalization"),
      filter: ["tuto"],
      technologies:["javascript","language"],
      link:"https://www.youtube.com/watch?v=0n2nLY_bebM"
    },
    {
      image: "url(react-dropzone.PNG)",
      title: t("best-bugs-page.solved-problems.dropzone"),
      filter: ["tuto"],
      technologies:["typescript","react"],
      link:"https://www.youtube.com/watch?v=0plPZBCzMrg"
    },
    {
      image: "url(stack-overflow.png)",
      title: t("best-bugs-page.solved-problems.stack-overflow.2"),
      filter: ["stack"],
      technologies:["javascript","stack","react"],
      link:"https://stackoverflow.com/a/76804393/18620446"
    },
    {
      image: "url(shedule.PNG)",
      title: t("best-bugs-page.solved-problems.shedule"),
      filter: ["solved"],
      technologies:["typescript","react"],
      link:"https://brtiefing-jvm.vercel.app/"
    },
    {
      image: "url(boundary.png)",
      title: t("best-bugs-page.solved-problems.shedule"),
      filter: ["solved"],
      technologies:["typescript","react"],
      link:"https://github.com/Kallarari/ErrorBounding/blob/main/ErrorBoundingComponent.tsx"
    },
  ];
  return selected
    ? mock.filter((item) => item.filter.includes(selected))
    : mock;
};
  
