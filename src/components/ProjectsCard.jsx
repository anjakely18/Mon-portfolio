import PropTypes from "prop-types";
import { FiExternalLink } from "react-icons/fi";

const ProjectsCard = ({ img, title, text, url }) => {
  return (
    <article className="bg-bg-second rounded-lg p-4 flex flex-col gap-6 h-full cursor-pointer hover:shadow-glow transition-all duration-300 group">
      <div className="overflow-hidden rounded-lg">
        <img src={img} alt={title} className="w-full transition-transform duration-300 group-hover:scale-105" />
      </div>
      {url && (
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FiExternalLink />
          <span className="text-caption font-bold">Voir le projet</span>
        </div>
      )}
      <h3 className="text-h3 font-title">{title}</h3>
      <p className="text-caption line-clamp-2">{text}</p>
    </article>
  );
};

ProjectsCard.propTypes = {
  url: PropTypes.string,
  img: PropTypes.string.isRequired,
  github: PropTypes.string,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ProjectsCard;
