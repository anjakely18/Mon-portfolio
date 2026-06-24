import PropTypes from "prop-types";

const TimelineTab = ({ items }) => {
  return (
    <div className="relative pl-8 flex flex-col gap-10">
      <div className="absolute left-2 top-2 bottom-2 w-px bg-main/30" />
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-main shadow-glow" />
          <span className="text-caption text-main font-bold">{item.date}</span>
          <h3 className="text-h3 font-title mt-1">{item.title}</h3>
          {item.organisation && (
            <p className="text-caption text-(--color-text-muted) mt-0.5">{item.organisation}</p>
          )}
          {item.description && (
            <p className="text-body mt-3 text-(--color-text)/70">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

TimelineTab.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      organisation: PropTypes.string,
      description: PropTypes.string,
    })
  ).isRequired,
};

export default TimelineTab;
