import SectionTitle from "@/components/SectionTitle";
import ProjectsCarousel from "./ProjectsCarousel";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="container">
      <div className="flex justify-between">
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
