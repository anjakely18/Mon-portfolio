import PropTypes from "prop-types";

/**
 * Titre de section avec un séparateur coloré en dessous.
 *
 * @param {Object} props
 * @param {string} props.title - Texte du titre
 * @returns {JSX.Element}
 */
const SectionTitle = ({ title }) => {
  return (
    <div className="">
      <h2 className="text-h2 font-title">{title}</h2>
      <div className="w-25 h-1 bg-main mt-4"></div>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SectionTitle;
