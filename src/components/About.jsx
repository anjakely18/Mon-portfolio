import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="about" id="about">
      <SectionTitle title="Tout sur moi" />
      <div className="about-content">
        <p>
          Étudiante en deuxième année de BUT Métiers du Multimédia et de
          l'Internet (MMI), je me spécialise en développement web tout en
          intégrant mes compétences en communication et création numérique.
          J’aime combiner technique et créativité pour donner vie à des projets
          dynamiques et immersifs.<br></br> Je conçois des interfaces
          interactives et esthétiques en React, JavaScript, HTML et CSS, avec
          une solide base en PHP (Symfony) et gestion de CMS. Mais ce n’est pas
          tout : l'UI/UX design et la stratégie de communication digitale font
          aussi partie de mon univers ! <br></br>
          J’ai travaillé sur divers projets, notamment la refonte de sites web,
          des infographies dynamiques et des plateformes interactives. Je suis
          toujours en quête de nouvelles opportunités et collaborations pour
          continuer à apprendre et créer des expériences numériques innovantes.
          Merci de visiter mon portfolio !
        </p>

      </div>
    </section>
  );
};

export default About;
