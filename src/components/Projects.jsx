import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "../assets/data";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <SectionTitle title="Mes Projets" />
      <div className="projects-container">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
