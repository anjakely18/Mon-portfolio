import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="title-section">
      <h1 className="title">{title}</h1>
      <div className="separator"></div>
    </div>
  );
};

export default SectionTitle;
