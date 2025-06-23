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
import sig from "./sig.png";
import couture from "./filAndCie.png";
import unity from "./unity.png";


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
    title: "Développement Front-End",
    icon: <FaReact className="skill-icon" />,
    text: "Création d'interfaces dynamiques et responsives avec HTML5, CSS3 (Sass, Tailwind CSS, Bootstrap) et JavaScript ES6+. Solide expérience avec React.js pour le développement de composants réactifs, gestion d’état et routing. Intégration soignée en suivant les bonnes pratiques d’accessibilité et de performance.",
  },
  {
    id: nanoid(),
    title: "Développement Back-End",
    icon: <SiPhp className="skill-icon" />,
    text: "Développement back-end avec PHP (approfondi via le framework Symfony) et gestion de templates avec Twig. Maîtrise des bases de données relationnelles avec MySQL. Conception de systèmes CRUD, gestion des utilisateurs et logique serveur sécurisée.",
  },
  {
    id: nanoid(),
    title: "UI/UX Design & Prototypage",
    icon: <FaFigma className="skill-icon" />,
    text: "Conception d’expériences utilisateurs intuitives et attractives à l’aide de Figma : wireframes, prototypes interactifs, tests utilisateurs. Création graphique avec Adobe Illustrator, Photoshop et InDesign pour des visuels web et print cohérents.",
  },
  {
    id: nanoid(),
    title: "Gestion de Projet & Communication Digitale",
    icon: <MdCampaign className="skill-icon" />,
    text: "Planification et coordination de projets en équipe avec la méthode Agile. Compétences en communication digitale, élaboration de stratégies de contenu, optimisation SEO et suivi des performances des projets numériques.",
  },
  {
    id: nanoid(),
    title: "Outils de Développement & Collaboration",
    icon: <FaCode className="skill-icon" />,
    text: "Utilisation professionnelle de Git et GitHub pour le versioning et la collaboration. Connaissance des environnements de développement (Visual Studio Code, Plesk), gestion de projets sur Trello ou Notion. Autonomie dans le déploiement de sites sur serveur mutualisé ou via FTP.",
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
    text: "Projet développé pour le CUEJ, permettant aux étudiants en journalisme de publier des reportages sur la vie rurale. Développé en PHP, Javascript, CSS et HTML avec une base de données MySQL pour gérer les articles et médias. J’ai principalement travaillé sur le développement back-end et front-end, assurant une structure dynamique et une navigation fluide.",
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
    img: couture, 
    url: "https://app.filcie.rasamoelina.etu.mmi-unistra.fr",
    github: "https://git.unistra.fr/info4/site-produits",
    title: "Fil & Cie — Plateforme de couture collaborative",
    text: "Fil & Cie est une application web dédiée aux passionnés de couture. Elle permet aux utilisateurs de réserver des objets de couture, consulter des tutoriels, découvrir des cours, et partager leurs créations. Conçue avec Symfony, elle intègre une gestion des rôles (admin, pro, utilisateur), un système de réservation, et un back-office sécurisé. Le design met en valeur l’univers doux et artisanal de la couture.",
  },
  {
    id: nanoid(),
    img: sig,
    url: "https://www.behance.net/gallery/219287985/Sig-Association-Maquette",
    title: "Identité visuelle et Goodies pour la SIG",
    text: "Projet réalisé pour la SIG Association dans le cadre de la SAE. J’ai conçu un prototype Figma complet proposant une refonte du logo, des éléments graphiques ainsi qu’une gamme de goodies (t-shirts, affiches, stickers, etc.). Ce travail visait à moderniser l’identité visuelle du club et à renforcer son impact auprès des supporters et partenaires.",
  },
  {
  id: nanoid(),
  img: unity,
  url: "https://drive.google.com/file/d/1AKEYh0BxoL6N8u_6LBE_Ulv4gR777-CE/view",
  github: "https://github.com/NoahBoos/mmi-sae402",
  title: "Développement d’un jeu RPG sur Unity",
  text: "Projet de développement d’un jeu RPG en 3D sur Unity, réalisé en équipe. J’ai conçu une scène complète située dans une forêt médiévale, modélisé les personnages (joueur et ennemis) avec Blender, et intégré des mécaniques d’interaction : détection et poursuite par les ennemis, gestion des collisions, et transitions entre scènes. J’ai également conçu le menu de démarrage du jeu. Ce projet m’a permis de renforcer mes compétences en développement interactif, en modélisation 3D et en logique de gameplay.",
},


];
