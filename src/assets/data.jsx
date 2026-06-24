import { nanoid } from "nanoid";

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
