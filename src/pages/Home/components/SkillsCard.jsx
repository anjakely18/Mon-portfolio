import PropTypes from "prop-types";

const SkillsCard = ({ icon, title, text }) => {
  return (
  <article className="skills-card bg-bg-second rounded-lg p-4 flex flex-col gap-4 h-full">
      <span className="skill-icon">{icon}</span>
      <h3 className="text-h3 font-title">{title}</h3>
      <p className="text-caption">{text}</p>
    </article>
  );
};

SkillsCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillsCard;
