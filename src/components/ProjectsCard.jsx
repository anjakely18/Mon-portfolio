import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProjectsCard = ({ gallery, title, text, slug, techs }) => {
  return (
    <Link to={`/projects/${slug}`} className="border border-(--color-text)/10 rounded-lg px-6 py-10 flex flex-col gap-3 h-full cursor-pointer hover:shadow-glow transition-all duration-300 group">
      <div className="overflow-hidden rounded-lg">
        <img src={gallery[0]} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-[3/2]" />
      </div>
      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <FiExternalLink />
        <span className="text-caption font-bold">Voir le projet</span>
      </div>
      <h3 className="text-h3 font-title">{title}</h3>
      <p className="text-caption line-clamp-2">{text}</p>
      {techs?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto">
          {techs.slice(0, 3).map((tech) => (
            <span key={tech} className="text-caption px-3 py-1 rounded-full border border-main/40 text-main">
              {tech}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
};

ProjectsCard.propTypes = {
  url: PropTypes.string,
  slug: PropTypes.string.isRequired,
  techs: PropTypes.arrayOf(PropTypes.string),
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
  github: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectsCard;
