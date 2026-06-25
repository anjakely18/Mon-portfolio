import PropTypes from "prop-types";
const SkillDetail = ({ skill }) => {
  return (
  <div className="flex flex-col gap-4 px-2">
    <p className="text-body text-(--color-text)/70">{skill.text}</p>
    <div className="flex flex-wrap gap-2">
      {skill.techs.map((tech, i) => (
        <span key={i} className="px-3 py-1 rounded-full border border-main/30 text-caption text-main">
          {tech}
        </span>
      ))}
    </div>
  </div>
  );
};

SkillDetail.propTypes = {
  skill: PropTypes.shape({
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SkillDetail;
