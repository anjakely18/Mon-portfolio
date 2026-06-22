import { nanoid } from "nanoid";
import { FaCode, FaJs, FaReact, FaFigma, FaCheckDouble, FaLightbulb, FaSearch, FaUsers } from "react-icons/fa";
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
import touschercheurs from "./touschercheurs.png";
import unity from "./unity.png";


// Hero des pages internes
export const pageHeroes = {
  about:    { title: "À propos",    subtitle: "Mon parcours et mes valeurs"       },
  skills:   { title: "Compétences", subtitle: "Les outils avec lesquels je crée"  },
  projects: { title: "Projets",     subtitle: "Ce que j'ai conçu et développé"    },
  contact:  { title: "Contact",     subtitle: "Discutons de vos opportunités"     },
};

// Données de la page About — onglets timeline
export const formations = [
  {
    date: "2022 — 2025",
    title: "BUT Métiers du Multimédia et de l'Internet",
    organisation: "IUT Robert Schuman — Université de Strasbourg",
    description: "Formation pluridisciplinaire couvrant le développement web, le design UI/UX, la communication digitale et la gestion de projet.",
  },
  {
    date: "2022",
    title: "Baccalauréat",
    organisation: "À compléter",
    description: "",
  },
];

export const experiences = [
  {
    date: "2024 — 2025",
    title: "Développeuse web en alternance",
    organisation: "Ikko — Strasbourg",
    description: "Développement et intégration de sites web au sein d'une agence web. Travail sur des projets clients réels en équipe.",
  },
  {
    date: "2024",
    title: "Stage — Refonte de site web",
    organisation: "CNRS Délégation Alsace — Strasbourg",
    description: "Refonte du site Tous Chercheurs Alsace via WordPress et Elementor. Restructuration de la navigation, intégration d'un calendrier dynamique.",
  },
];

export const certifications = [
  {
    img: "https://placehold.co/600x400",
    title: "À compléter",
    text: "Description du certificat à compléter.",
  },
];

export const profilData = {
  histoire: "Passionnée par le web depuis le lycée, j'ai choisi le BUT MMI pour combiner créativité et technique. Trois ans plus tard, j'ai développé une vraie appétence pour le front-end — ce moment où un design Figma prend vie dans le navigateur. Mon alternance chez Ikko m'a confrontée à des projets réels, des contraintes client, et des deadlines : exactement ce dont j'avais besoin pour grandir.",
  langues: [
    { code: "FR", name: "Français", level: "Natif" },
    { code: "GB", name: "Anglais",  level: "Courant (B2)" },
    { code: "MG", name: "Malgache", level: "Natif" },
  ],
  valeurs: [
    { icon: <FaCheckDouble className="text-2xl text-main" />, title: "Rigueur",       description: "Un code propre et maintenable, c'est un respect pour les personnes qui liront le projet après moi." },
    { icon: <FaLightbulb  className="text-2xl text-main" />, title: "Créativité",    description: "Chaque projet est une occasion de proposer quelque chose de visuellement fort et mémorable." },
    { icon: <FaSearch     className="text-2xl text-main" />, title: "Curiosité",     description: "Je me tiens à jour sur les nouvelles technos — pas par obligation, mais par vraie passion." },
    { icon: <FaUsers      className="text-2xl text-main" />, title: "Collaboration", description: "Les meilleurs projets naissent d'une bonne communication entre dev, design et client." },
  ],
  interets: ["UI Design", "Typographie", "Photographie", "Jeux vidéo", "Musique", "Voyages"],
};

// Liens de navigation
export const links = [
  { id: nanoid(), href: "/", text: "Accueil" },
  { id: nanoid(), href: "/about", text: "À propos" },
  { id: nanoid(), href: "/skills", text: "Compétences" },
  { id: nanoid(), href: "/projects", text: "Projets" },
  { id: nanoid(), href: "/contact", text: "Contact" },
];

// Infos clés - section About de la Home
export const aboutInfo = {
  bio: "Etant en dernière année de BUT MMI, je suis actuellement en alternance chez Ikko, une agence web à Strasbourg. Je suis passionnée par le développement web (nottament le front-end) et le design d'interfaces utilisateur. Mon objectif est de créer des expériences numériques engageantes et accessibles, en combinant mes compétences techniques et créatives pour répondre aux besoins des utilisateurs.",
  localisation: "Strasbourg, France",
  cards: [
    { id: nanoid(), title: "Alternante", description: "Apprentissage en entreprise chez Ikko" },
    { id: nanoid(), title: "Etudiante en BUT MMI", description: "Dernière année en Métiers du Multimédia et de l'Internet" },
    { id: nanoid(), title: "Disponibilité", description: "En recherche d'opportunités" },
  ],
};

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
  img: touschercheurs, 
  url: "http://sc4maju4065.universe.wf/",
  title: "Refonte du site Tous Chercheurs Alsace",
  text: "Stage de deux mois au CNRS Délégation Alsace, durant lequel j’ai contribué à la refonte du site Tous Chercheurs via WordPress et Elementor. J’ai restructuré la navigation, optimisé la lisibilité du contenu, intégré un calendrier d’événements dynamiques et mis en place un bouton d’appel à l’action clair pour favoriser la participation. L’hébergeur n’ayant pas encore modifié le nom de domaine final (prévu : touschercheursalsace.fr), le site est actuellement accessible via un lien temporaire.",
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
}




];
