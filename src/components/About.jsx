import React from "react";
import Skills from "./Skills";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="about" id="about">
      <SectionTitle title="Tout sur moi" />
      <div className="about-content">
        <p>
          Je m'appelle Anja, étudiante en deuxième année de BUT Métiers du
          Multimédia et de l'Internet (MMI), avec une spécialisation en
          développement web. Mon parcours inclut également une expérience en
          communication et en création numérique, que j'intègre dans mes projets
          pour allier technique et créativité.<br></br> Passionnée par le
          développement front et back, j'aime concevoir des interfaces
          interactives et esthétiques en utilisant React, JavaScript, HTML, et
          CSS. J'ai aussi des bases solides en PHP et en gestion de CMS. En
          parallèle, je m'intéresse à l'UI/UX Design, au motion design avec
          After Effects, et à la stratégie de communication digitale. <br></br>
          J’ai travaillé sur divers projets, notamment la refonte de sites web,
          des infographies dynamiques et des plateformes interactives. Je suis
          toujours en quête de nouvelles opportunités et collaborations pour
          continuer à apprendre et créer des expériences numériques innovantes.
          Merci de visiter mon portfolio !
        </p>
        <Skills />
      </div>
    </section>
  );
};

export default About;
