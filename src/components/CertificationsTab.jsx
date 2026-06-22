import PropTypes from "prop-types";
import ProjectsCard from "@/components/ProjectsCard";

const CertificationsTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <ProjectsCard key={index} {...item} />
      ))}
    </div>
  );
};

CertificationsTab.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CertificationsTab;
