import mongo from "@/assets/skills/mongoIcn-removebg-preview.png";
import node from "@/assets/skills/nodejsIcn-removebg-preview.png";
import express from "@/assets/skills/ExpressJsIcn-removebg-preview.png";
import react from "@/assets/skills/reactIcn-removebg-preview.png";
import html from "@/assets/skills/htmlIcn.png";
import css from "@/assets/skills/css3-icn-removebg-preview.png";
import tailwind from "@/assets/skills/tailwindCSSIcn-removebg-preview.png";
import bootstrap from "@/assets/skills/bootstrapIcn-removebg-preview.png";
import firebase from "@/assets/skills/firebaseIcn-removebg-preview.png";
import git from "@/assets/skills/github-removebg-preview.png";
import visual from "@/assets/skills/vstudio-removebg-preview.png";
import tc from "@/assets/skills/tcIcn-removebg-preview.png";
import js from "@/assets/skills/JavaScript-logo.png";

type skill = {
  name: String;
  icn: any;
};

export const skills: skill[] = [
  {
    name: "Javascript",
    icn: js,
  },
  {
    name: "MongoDB",
    icn: mongo,
  },
  {
    name: "NodeJs",
    icn: node,
  },
  {
    name: "ExpressJs",
    icn: express,
  },
  {
    name: "ReactJs",
    icn: react,
  },
  {
    name: "HTML5",
    icn: html,
  },
  {
    name: "CSS3",
    icn: css,
  },
  {
    name: "Typescript",
    icn: tc,
  },
  {
    name: "TailwindCSS",
    icn: tailwind,
  },
  {
    name: "BootStrap",
    icn: bootstrap,
  },
  {
    name: "Firebase",
    icn: firebase,
  },
  {
    name: "GitHub",
    icn: git,
  },
  {
    name: "Visual Studio Code",
    icn: visual,
  },
];
