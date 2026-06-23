import PropTypes from "prop-types";
import iconMap from "@/utils/iconMap";

const SkillDetail = ({ skill }) => {
  const Icon = iconMap[skill.icon];
  return (
  <div className="flex flex-col gap-4 px-2">
    <div className="flex items-center gap-4">
      <Icon className="text-2xl text-main" />
      <h3 className="font-bold font-title text-h3">{skill.title}</h3>
    </div>
    <p className="text-body text-white/70">{skill.text}</p>
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
