import vue from "./assets/vue.png";
import html from "./assets/html.png";
import css from "./assets/css.svg";
import javascript from "./assets/javascript.png";
import nuxt from "./assets/nuxt.svg";
import nodeJS from "./assets/node.png";
import expressJS from "./assets/express.png";
import mysql from "./assets/mysql.png";
import bootstrap from "./assets/bootstrap.png";
import figma from "./assets/figma.png";
import xd from "./assets/xd.png";
import photoshop from "./assets/photoshop.png";
import illustrator from "./assets/illustrator.png";
import premier from "./assets/premier.png";

let skills = [
  {
    id: 1,
    name: "HTML",
    version: "latest",
    logo: html,
  },
  {
    id: 2,
    name: "CSS",
    version: "latest",
    logo: css,
  },
  {
    id: 3,
    name: "Javascript",
    version: "ES6",
    logo: javascript,
  },
  {
    id: 4,
    name: "Bootstrap",
    version: "4 & 5",
    logo: bootstrap,
  },
  {
    id: 5,
    name: "Vue JS",
    version: "3",
    logo: vue,
  },
  {
    id: 6,
    name: "Nuxt JS",
    version: "2 & 3",
    logo: nuxt,
  },
  {
    id: 7,
    name: "Node JS",
    version: "latest",
    logo: nodeJS,
  },
  {
    id: 8,
    name: "Express JS",
    version: "latest",
    logo: expressJS,
  },
  {
    id: 9,
    name: "MySQL",
    version: "latest",
    logo: mysql,
  },
  {
    id: 10,
    name: "Figma",
    version: "latest",
    logo: figma,
  },
  {
    id: 9,
    name: "Adobe XD",
    version: "latest",
    logo: xd,
  },
  {
    id: 9,
    name: "Adobe Photoshop",
    version: "latest",
    logo: photoshop,
  },
  {
    id: 9,
    name: "Adobe Illustrator",
    version: "latest",
    logo: illustrator,
  },
  {
    id: 10,
    name: "Adobe Premier",
    version: "latest",
    logo: premier,
  },
];

export function getSkill() {
  return skills;
}
