import { motion } from "framer-motion";
import PropTypes from "prop-types";

/**
 * Wrapper d'animation d'entrée basé sur Framer Motion.
 * Déclenche une transition fade-in + slide-up quand l'élément entre dans le viewport.
 * L'animation ne se joue qu'une seule fois (viewport: once).
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Contenu à animer
 * @param {number} [props.delay=0] - Délai avant le début de l'animation (en secondes)
 * @param {string} [props.className=""] - Classes CSS supplémentaires
 * @returns {JSX.Element}
 */
const AnimatedSection = ({ children, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
};

export default AnimatedSection;
