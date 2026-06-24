import { nanoid } from "nanoid";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiSass, SiBootstrap,
  SiPhp, SiSymfony, SiMysql, SiFigma, SiGit, SiWordpress, SiDrupal, SiShopify,
} from "react-icons/si";

export const techStacks = [
  { name: "HTML5",        Icon: SiHtml5,       color: "#E34F26", level: "expert" },
  { name: "CSS3",         Icon: SiCss3,        color: "#1572B6", level: "expert" },
  { name: "JavaScript",   Icon: SiJavascript,  color: "#F7DF1E", level: "avancé" },
  { name: "React",        Icon: SiReact,       color: "#61DAFB", level: "avancé" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", level: "avancé" },
  { name: "Sass",         Icon: SiSass,        color: "#CC6699", level: "avancé" },
  { name: "Bootstrap",    Icon: SiBootstrap,   color: "#7952B3", level: "intermédiaire" },
  { name: "PHP",          Icon: SiPhp,         color: "#777BB4", level: "avancé" },
  { name: "Symfony",      Icon: SiSymfony,     color: "#FFFFFF", level: "intermédiaire" },
  { name: "MySQL",        Icon: SiMysql,       color: "#4479A1", level: "intermédiaire" },
  { name: "Figma",        Icon: SiFigma,       color: "#F24E1E", level: "avancé" },
  { name: "Git",          Icon: SiGit,         color: "#F05032", level: "avancé" },
  { name: "WordPress",    Icon: SiWordpress,   color: "#21759B", level: "avancé" },
  { name: "Drupal",       Icon: SiDrupal,      color: "#0678BE", level: "intermédiaire" },
  { name: "Shopify",      Icon: SiShopify,     color: "#96BF48", level: "intermédiaire" },
];

export const pageHeroes = {
  about:    { title: "À propos",    subtitle: "Mon parcours et mes valeurs"      },
  skills:   { title: "Compétences", subtitle: "Les outils avec lesquels je crée" },
  projects: { title: "Projets",     subtitle: "Ce que j'ai conçu et développé"   },
  contact:  { title: "Contact",     subtitle: "Discutons de vos opportunités"    },
};

export const links = [
  { id: nanoid(), href: "/",         text: "Accueil"     },
  { id: nanoid(), href: "/about",    text: "À propos"    },
  { id: nanoid(), href: "/skills",   text: "Compétences" },
  { id: nanoid(), href: "/projects", text: "Projets"     },
  { id: nanoid(), href: "/contact",  text: "Contact"     },
];
