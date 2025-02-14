import { nanoid } from "nanoid";
import { FaCode, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import {
  SiAdobeillustrator,
  SiBootstrap,
  SiTailwindcss,
  SiSass,
  SiPhp,
  SiMysql,
} from "react-icons/si";
import cuej from "./cuej.png";
import sobriete from "./sae.png";
import blog from "./blog.png";
import sig from "./sig.png";

// Liens de navigation
export const links = [
  { id: nanoid(), href: "#home", text: "Accueil" },
  { id: nanoid(), href: "#about", text: "À propos" },
  { id: nanoid(), href: "#projects", text: "Projets" },
  { id: nanoid(), href: "#contact", text: "Contact" },
];

// Compétences regroupées par catégories
// Compétences regroupées par catégories
export const skills = [
  {
    id: nanoid(),
    title: "Développement Web",
    icon: <FaCode className="skill-icon" />,
    text: "Maîtrise du développement front-end et back-end : HTML, CSS (Bootstrap, SCSS, Tailwind), JavaScript, React, PHP, Twig et MySQL. Expérience dans la création de sites dynamiques et interactifs, incluant des fonctionnalités CMS personnalisées avec WordPress.",
  },
  {
    id: nanoid(),
    title: "UI/UX Design & Création Numérique",
    icon: <FaFigma className="skill-icon" />,
    text: "Conception d'interfaces utilisateur intuitives avec Figma et développement de wireframes et prototypes interactifs. Expérience en création graphique avec la suite Adobe (Illustrator, Photoshop, InDesign).",
  },
  {
    id: nanoid(),
    title: "Stratégie de Communication & Gestion de Projet",
    icon: <MdCampaign className="skill-icon" />,
    text: "Compétences en communication digitale, optimisation SEO et gestion de projet en méthodologie Agile pour assurer la cohérence et la performance des projets numériques.",
  },
  {
    id: nanoid(),
    title: "Interactivité & Animation",
    icon: <FaJs className="skill-icon" />,
    text: "Développement d'interactions dynamiques avec JavaScript et React. Expérience en motion design pour enrichir les contenus visuels et améliorer l’expérience utilisateur.",
  },
];

// Projets réalisés
export const projects = [
  {
    id: nanoid(),
    img: cuej,
    url: "https://www.cuej.info/mini-sites/ruraux2024/index.php?",
    github: "https://github.com/anjakely18/SITE-CUEJ",
    title: "Site web pour le CUEJ - Ruraux 2024",
    text: "Projet développé pour le CUEJ, permettant aux étudiants en journalisme de publier des reportages sur la vie rurale. Développé en PHP et Twig, avec une base de données MySQL pour gérer les articles et médias. J’ai principalement travaillé sur le développement back-end et front-end, assurant une structure dynamique et une navigation fluide.",
  },
  {
    id: nanoid(),
    img: sobriete,
    url: "https://rasamoelina.etu.mmi-unistra.fr/SAE303-site/",
    github: "https://github.com/anjakely18/site-sobri-t-",
    title: "Site de sensibilisation à la sobriété numérique",
    text: "Projet visant à sensibiliser aux enjeux environnementaux du numérique. J’ai conçu le design du site avec Figma et réalisé les illustrations. L’équipe a intégré des infographies dynamiques avec Chart.js, et j’ai optimisé la mise en page dans une démarche d’éco-conception web.",
  },
  {
    id: nanoid(),
    img: blog,
    url: "https://rasamoelina.etu.mmi-unistra.fr/blog/index.php?page=accueil",

    title: "Blog en PHP & Twig - CMS personnalisé",
    text: "Développement d’un blog dynamique utilisant PHP et Twig, avec un système CRUD pour gérer les articles et blocs. J’ai mis en place une interface d’administration intuitive, ce qui en fait une solution flexible et évolutive pour la gestion de contenu.",
  },
  {
    id: nanoid(),
    img: sig,
    url: "https://www.behance.net/gallery/219287985/Sig-Association-Maquette",
    title: "Identité visuelle et Goodies pour la SIG",
    text: "Projet réalisé pour la SIG Association dans le cadre de la SAE. J’ai conçu un prototype Figma complet proposant une refonte du logo, des éléments graphiques ainsi qu’une gamme de goodies (t-shirts, affiches, stickers, etc.). Ce travail visait à moderniser l’identité visuelle du club et à renforcer son impact auprès des supporters et partenaires.",
  },
];
