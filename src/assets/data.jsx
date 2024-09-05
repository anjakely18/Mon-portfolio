import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPhp } from "react-icons/fa";
import cocktail from "./cocktail-verse.png";
import toDo from "./to-do-list.png";
import simon from "./simon-game.png";
import blog from "./blog.png";

export const links = [
  { id: nanoid(), href: "#home", text: "Accueil" },
  { id: nanoid(), href: "#about", text: "À propos" },
  { id: nanoid(), href: "#projects", text: "Projets" },
  { id: nanoid(), href: "#contact", text: "Contact" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="skill-icon" />,
    text: "Maîtrise de la structure et du style des pages web pour créer des interfaces utilisateur attrayantes et fonctionnelles.",
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
    title: "PHP",
    icon: <FaPhp className="skill-icon" />,
    text: "Connaissance de base en PHP pour gérer la logique côté serveur et l'interaction avec les bases de données.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: cocktail,
    url: "https://verdant-syrniki-e21f07.netlify.app/",
    github: "https://github.com/anjakely18/CocktailVerse",
    title: "Cocktail Verse",
    text: "Application web développée avec React qui permet de rechercher différentes variantes de cocktails.L'application utilise React Router pour une navigation fluide entre les résultats de recherche et les détails des recettes, récupérés via l'API TheCocktailDB. Les requêtes API sont effectuées avec Axios pour un traitement asynchrone et efficace des données.",
  },
  {
    id: nanoid(),
    img: toDo,
    url: "https://bucolic-pika-937976.netlify.app/",
    github: "https://github.com/anjakely18/to-do-list",
    title: "To-do list",
    text: "Application de to-do développée avec React. Cette application permet aux utilisateurs d'ajouter et de supprimer des taches, utilisant `useState` pour gérer l'état et `localStorage` pour persister les données.",
  },
  {
    id: nanoid(),
    img: simon,
    url: "https://simon-game-anja.netlify.app/",
    github: "https://github.com/anjakely18/javascript-the-simon-game",
    title: "simon game",
    text: "Jeu Simon, développé en JavaScript. Le jeu teste la mémoire des joueurs en leur demandant de reproduire des séquences de couleurs croissantes, avec des animations et des mécanismes de validation.",
  },
  {
    id: nanoid(),
    img: blog,
    url: "http://visionnaire-life.atwebpages.com/",
    github: "https://github.com/anjakely18/Blog-Personnel",
    title: "Blog dynamique en php",
    text: "Ce projet est un blog développé en PHP avec AJAX pour des interactions fluides sans rechargement. Il utilise une base de données pour gérer les articles, commentaires, catégories, et une barre de recherche. Le tout est construit en pur HTML et CSS pour un design simple et responsive.",
  },
];
