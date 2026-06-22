import PropTypes from "prop-types";
import CertificationCard from "@/components/CertificationCard";

const CertificationsTab = ({ items }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <CertificationCard key={index} {...item} />
      ))}
    </div>
  );
};

CertificationsTab.propTypes = {
  items: PropTypes.array.isRequired,
};

export default CertificationsTab;
