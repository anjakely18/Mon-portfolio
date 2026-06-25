import PropTypes from "prop-types";
import AnimatedSection from "./AnimatedSection";
import ParticlesWrapper from "@/pages/Home/components/Particles";

/**
 * Section hero réutilisable pour les pages intérieures.
 * Affiche un titre et un sous-titre centrés sur un fond dégradé
 * avec animation de particules en arrière-plan.
 *
 * @param {Object} props
 * @param {string} props.title - Titre principal de la page
 * @param {string} props.subtitle - Sous-titre ou description courte
 * @returns {JSX.Element}
 */
const PageHero = ({ title, subtitle }) => {
  return (
    <section className="relative flex flex-col items-center justify-center py-25 px-6 text-center bg-gradient-to-br from-bg to-bg-second">
      <ParticlesWrapper className="absolute inset-0 z-0" />
      <AnimatedSection delay={0} className="relative z-10">
        <h1 className="text-h1 font-title">{title}</h1>
      </AnimatedSection>
      <AnimatedSection delay={0.2} className="relative z-10">
        <p className="text-body mt-4 text-(--color-text)/70">{subtitle}</p>
      </AnimatedSection>
    </section>
  );
};

PageHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default PageHero;
