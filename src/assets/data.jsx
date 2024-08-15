import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaPhp } from "react-icons/fa";

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
