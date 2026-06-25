import PropTypes from "prop-types";
import { FiChevronDown } from "react-icons/fi";

/**
 * Carte de fonctionnalité polyvalente pouvant fonctionner comme un bouton ou un div.
 * Si `onClick` est fourni, le composant devient un `<button>` interactif avec
 * un chevron animé indiquant l'état actif/inactif.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.icon - Icône affichée en haut de la carte
 * @param {string} props.title - Titre de la carte
 * @param {string} [props.description] - Description optionnelle
 * @param {function} [props.onClick] - Si fourni, rend la carte cliquable
 * @param {boolean} [props.isActive] - Indique si la carte est sélectionnée
 * @param {string} [props.className=""] - Classes CSS supplémentaires
 * @returns {JSX.Element}
 */
const FeatureCard = ({ icon, title, description, onClick, isActive, className = "" }) => {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      onClick={onClick}
      className={`bg-bg-second rounded-2xl p-6 flex flex-col gap-3 w-full text-left transition-all duration-300 border ${className} ${
        isActive
          ? "border-main shadow-glow"
          : onClick
          ? "border-transparent hover:border-main/30 cursor-pointer"
          : "border-transparent"
      }`}
    >
      {icon}
      <h4 className="font-bold font-title">{title}</h4>
      {description && <p className="text-caption text-(--color-text-muted)">{description}</p>}
      {onClick && (
        <FiChevronDown
          className={`mt-auto self-end text-(--color-text-muted) transition-transform duration-300 ${isActive ? "rotate-180 text-main" : ""}`}
        />
      )}
    </Tag>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  className: PropTypes.string,
};

export default FeatureCard;
