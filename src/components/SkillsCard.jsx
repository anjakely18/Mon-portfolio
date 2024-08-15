import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article className="skill">
      <span>{icon}</span>
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};

export default SkillsCard;
