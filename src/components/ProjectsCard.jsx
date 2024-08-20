import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="card">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <div>
        <a href={url} className="icon-link" target="_blank">
          <TbWorldWww />
        </a>
        <a href={github} className="icon-link" target="_blank">
          <FaGithubSquare />
        </a>
      </div>
    </article>
  );
};

export default ProjectsCard;
