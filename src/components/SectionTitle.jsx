import PropTypes from "prop-types";

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
