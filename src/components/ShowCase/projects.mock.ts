"use client";
import { useTranslation } from "react-i18next";

export const ProjectsMock = (selected?: string) => {
  const { t } = useTranslation();
  const mock = [
    {
      image: "url(briefing-jvm.PNG)",
      title: t("projects-page.projects.briefing"),
      filter: ["complex"],
      technologies:["typescript","next","nest"],
      link:"https://brtiefing-jvm.vercel.app/",
    },
    {
      image: "url(jvm-site.PNG)",
      title: t("projects-page.projects.jvm-site"),
      filter: [""],
      technologies:["javascript","typescript","next"],
      link:"https://jvm-webmarketing.vercel.app/"
    },
    {
      image: "url(vintage-app.PNG)",
      title: t("projects-page.projects.music-app"),
      filter: [""],
      technologies:["javascript"],
      link:"https://chalenge-nu.vercel.app/"
    },
    {
      image: "url(horse-tech.PNG)",
      title: t("projects-page.projects.horse-tech"),
      filter: ["figma"],
      technologies:["figma"],
      link:"https://www.figma.com/file/VUCLC7DHqozE81KXdMWxoO/horse-store-(Copy)?type=design&node-id=0%3A1&mode=design&t=7AJHrncqXYkrifWm-1"
    },
    {
      image: "url(jvm-site-figma.PNG)",
      title: t("projects-page.projects.jvm-webmarketing"),
      filter: ["figma"],
      technologies:["figma"],
      link:"https://www.figma.com/file/bj9UUuOyK1L2SqiShwTWtb/Site-JVM?type=design&node-id=0%3A1&mode=design&t=6uNPrvDNgfQMUVpd-1"
    },
    {
      image: "url(menu.PNG)",
      title: t("projects-page.projects.menu"),
      filter: ["figma"],
      technologies:["figma"],
      link:"https://www.figma.com/file/6fP5XvjmgLcwt1fwmCF5MZ/MENU?type=design&node-id=0%3A1&mode=design&t=g0DaOp3eyMF0dDig-1"
    },
    {
      image: "url(vico.PNG)",
      title: t("projects-page.projects.vico"),
      filter: ["figma"],
      technologies:["figma"],
      link:"https://www.figma.com/file/mXE57KOTzwp0dcJwhfOXpB/vico-site?type=design&node-id=0%3A1&mode=design&t=DfwVv2dV0S38yulh-1"
    },
    {
      image: "url(hess.PNG)",
      title: t("projects-page.projects.hess"),
      filter: [""],
      technologies:["wordpress"],
      link:"https://filipehessquiropraxia.com.br/"
    },
    {
      image: "url(jvm-design.PNG)",
      title: t("projects-page.projects.jvm-design"),
      filter: [""],
      technologies:["html","css"],
      link:"https://jvm-webdesign.site/"
    },
    {
      image: "url(mid-test.PNG)",
      title: t("projects-page.projects.mid-test"),
      filter: ["complex"],
      technologies:["javascript","next"],
      link:"https://mid-test-eta.vercel.app/"
    },
    {
      image: "url(github-image.png)",
      title: t("projects-page.projects.mid-test-git"),
      filter: ["github","complex"],
      technologies:["javascript","git","next"],
      link:"https://github.com/Kallarari/mid-test"
    },
    {
      image: "url(birva.PNG)",
      title: t("projects-page.projects.birva"),
      filter: [""],
      technologies:["react","typescript","html","css"],
      link:"https://birva-port.vercel.app/"
    },
    {
      image: "url(github-image.png)",
      title: t("projects-page.projects.nest"),
      filter: ["github","complex"],
      technologies:["javascript","nest","git"],
      link:"https://github.com/Kallarari/nest-back-end"
    },
  ];
  return selected
    ? mock.filter((item) => item.filter.includes(selected))
    : mock;
};
  
