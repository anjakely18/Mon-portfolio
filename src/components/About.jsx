import React from "react";
import Skills from "./Skills";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="about" id="about">
      <SectionTitle title="Tout sur moi" />
      <div className="about-content">
        <p>
          Je m'appelle Anja. Je suis une étudiante en deuxième année de BUT
          Métiers du Multimédia et de l'Internet (MMI) avec une passion pour le
          développement web. Après deux années en licence informatique, j'ai
          acquis une solide expérience en programmation avec des compétences en
          HTML, CSS, JavaScript, React, et PHP. Je me spécialise principalement
          dans le développement front-end, où j'aime créer des interfaces
          interactives et esthétiques qui enrichissent l'expérience utilisateur.
          Mon intérêt pour le design et les aspects dynamiques du web me pousse
          à concevoir des solutions à la fois innovantes et fonctionnelles.
          Merci de visiter mon portfolio ! Je suis ouverte à toute opportunité
          ou collaboration.
        </p>
        <Skills />
      </div>
    </section>
  );
};

export default About;
