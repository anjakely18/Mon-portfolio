import PropTypes from "prop-types";

const CertificationCard = ({ img, title, text, date, issuer }) => {
  return (
    <article className="bg-bg-second rounded-lg overflow-hidden flex flex-col h-full hover:shadow-glow transition-all duration-300">
      <div className="overflow-hidden">
        <img src={img} alt={title} className="w-full object-cover" />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between text-caption text-main">
          <span>{issuer}</span>
          <span>{date}</span>
        </div>
        <h3 className="text-h3 font-title">{title}</h3>
        <p className="text-caption">{text}</p>
      </div>
    </article>
  );
};

CertificationCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string,
  issuer: PropTypes.string,
};

export default CertificationCard;
