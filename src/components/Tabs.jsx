import { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find(t => t.id === active);

  return (
    <div>
      <div className="relative">
        <div className="flex gap-2 bg-bg-second p-2 rounded-2xl overflow-x-auto max-w-full md:w-fit md:mx-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`flex-shrink-0 px-6 py-2 rounded-xl font-bold text-btn transition-all duration-300 cursor-pointer ${
                active === tab.id
                  ? "bg-main text-bg shadow-glow"
                  : "text-(--color-text-muted) hover:text-(--color-text)"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-bg-second to-transparent rounded-r-2xl md:hidden" />
      </div>
      <div className="mt-10">
        <h2 className="text-h2 font-title mb-8">{current.label}</h2>
        {current.content}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default Tabs;
