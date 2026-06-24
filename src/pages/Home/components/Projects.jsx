import SectionTitle from "@/components/SectionTitle";
import ProjectsCarousel from "./ProjectsCarousel";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="container">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <SectionTitle title="Mes Projets" />
        <Link to="/projects" className="btn-ghost">
          Voir tout <FaArrowRight className="inline-block ml-2" />
        </Link>
      </div>
 
      <div className="mt-12">
        <ProjectsCarousel />
      </div>
    </section>
  );
};

export default Projects;
