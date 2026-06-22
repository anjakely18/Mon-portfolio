import PropTypes from "prop-types";

const FeatureCard = ({ icon, title, description, onClick, isActive }) => {
  const Tag = onClick ? "button" : "div";

  return (
    <Tag
      onClick={onClick}
      className={`bg-bg-second rounded-2xl p-6 flex flex-col gap-3 w-full text-left transition-all duration-300 border ${
        isActive
          ? "border-main shadow-glow"
          : onClick
          ? "border-transparent hover:border-main/30 cursor-pointer"
          : "border-transparent"
      }`}
    >
      {icon}
      <h4 className="font-bold font-title">{title}</h4>
      {description && <p className="text-caption text-white/60">{description}</p>}
    </Tag>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default FeatureCard;
