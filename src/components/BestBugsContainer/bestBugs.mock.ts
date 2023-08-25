"use client";
import { useTranslation } from "react-i18next";

export const BestBugsMock = (selected?: string) => {
  const { t } = useTranslation();
  const mock = [
    {
      image: "url(black-light-theme.png)",
      title: t("best-bugs-page.solved-problems.black-light"),
      filter: ["solved"],
      technologies:["typescript"],
      link:"https://dev.to/kallarari/how-i-make-darklight-theme-12m",
    },
    {
      image: "url(internacionalização.png)",
      title: t("best-bugs-page.solved-problems.internationalization"),
      filter: ["tuto"],
      technologies:["javascript"],
      link:"https://www.youtube.com/watch?v=0n2nLY_bebM"
    },
    {
      image: "url(react-dropzone.png)",
      title: t("best-bugs-page.solved-problems.dropzone"),
      filter: ["tuto"],
      technologies:["javascript"],
      link:"https://www.youtube.com/watch?v=0plPZBCzMrg"
    },
  ];
  return selected
    ? mock.filter((item) => item.filter.includes(selected))
    : mock;
};
  
