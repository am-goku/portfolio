import { Url } from "url";

import netflix from "@/assets/Netflix-Symbol.png"
import relink from "@/assets/relinkicon.png"
import trendly from "@/assets/TrendlyIcn.png"
import sphere from "@/assets/Sphere.png"

type Project = {
  name: string;
  type: string;
  git: String;
  link: string;
  desc: string;
  image: any
};

export const projects: Project[] = [
  {
    name: "Relink",
    type: "Social Media",
    git: "https://github.com/am-goku/relink-client",
    link: "https://relink.thetrendly.shop",
    desc: "Relink is a social media app which is completely build on MERN stack. Techs used: React, Redux, Node, Express, MongoDB, SocketIo, JWT, Firebase, etc.",
    image: relink,
  },
  {
    name: "Trendly",
    type: "E-Commerce",
    git: "https://github.com/am-goku/trendly",
    link: "https://thetrendly.shop",
    desc: "Trendly is an e-commerce website which is a server side rendering app. Tech used: Node, Express, MongoDB, HTML, CSS, Bootstrap, etc.",
    image: trendly,
  },
  {
    name: "Netflix",
    type: "Clone App",
    git: "https://github.com/am-goku/netflix-clone",
    link: "https://netflix-goku.netlify.app/",
    desc: "A Netflix clone app. Techs used: React, HTML, TailwindCSS, etc.",
    image: netflix,
  },
  {
    name: "Sphere",
    type: "Three Js",
    git: "https://github.com/am-goku/sphere",
    link: "https://sphere-goku.netlify.app/",
    desc: "A 3d sphere which i have done using javascript libraries like Three js and Gsap. Techs used: Javascript, Three Js, GSAP, etc.",
    image: sphere,
  },
];
