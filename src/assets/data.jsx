import { nanoid } from "nanoid";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";
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

export const links = [
  { id: nanoid(), href: "#home", text: "Accueil" },
  { id: nanoid(), href: "#about", text: "À propos" },
  { id: nanoid(), href: "#projects", text: "Projets" },
  { id: nanoid(), href: "#contact", text: "Contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="skill-icon" />,
    text: "Maîtrise des bases du développement web avec HTML et CSS. Expérience avec Bootstrap, SCSS et Tailwind pour styliser efficacement les interfaces.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="skill-icon" />,
    text: "Capacité à ajouter de l'interactivité aux sites web et à développer des fonctionnalités dynamiques.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="skill-icon" />,
    text: "Expérience dans le développement d'applications web réactives et modulaires avec ce framework puissant.",
  },
  {
    id: nanoid(),
    title: "PHP & Back-end",
    icon: <SiPhp className="skill-icon" />,
    text: "Expérience en développement back-end avec PHP, incluant la gestion de bases de données avec MySQL et l'utilisation de Twig pour la templatisation.",
  },
  {
    id: nanoid(),
    title: "Stratégie de communication & Gestion de projet",
    icon: <MdCampaign className="skill-icon" />,
    text: "Compétences en communication digitale, gestion de projet en méthodologie Agile, et optimisation SEO pour améliorer la visibilité en ligne.",
  },
  {
    id: nanoid(),
    title: "Création numérique",
    icon: <SiAdobeillustrator className="skill-icon" />,
    text: "Maîtrise de la suite Adobe (Photoshop, Illustrator, InDesign) pour la conception graphique et la production de contenus numériques impactants.",
  },
  {
    id: nanoid(),
    title: "UI/UX Design",
    icon: <FaFigma className="skill-icon" />,
    text: "Utilisation avancée de Figma pour concevoir des interfaces intuitives, wireframes et prototypes interactifs.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: cuej,
    url: "https://www.cuej.info/mini-sites/ruraux2024/index.php?",
    github: "https://github.com/anjakely18/SITE-CUEJ",
    title: "Site web pour le CUEJ - Ruraux 2024",
    text: "Projet réalisé pour le CUEJ, permettant aux étudiants en journalisme de publier des reportages sur la vie rurale en 2024. Développé en PHP et Twig, avec une base de données MySQL pour gérer les articles et médias. J’ai principalement contribué au développement back-end et front-end, assurant une structure dynamique et une navigation fluide.",
  },
  {
    id: nanoid(),
    img: sobriete,
    url: "https://rasamoelina.etu.mmi-unistra.fr/SAE303-site/",
    github: "https://github.com/anjakely18/site-sobri-t-",
    title: "Site de sensibilisation à la sobriété numérique",
    text: "Projet visant à informer sur la sobriété numérique et ses enjeux environnementaux. J’ai conçu l’intégralité du design du site avec Figma et réalisé les illustrations. L’équipe a intégré des infographies dynamiques avec Chart.js, et j’ai veillé à une mise en page optimisée dans une démarche d’éco-conception web.",
  },
];
