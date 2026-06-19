const InfoCard = ({ title, description }) => {
  return (
    <div className="bg-bg-second rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-h3 font-title text-main">{title}</h3>
      <p className="text-caption">{description}</p>
    </div>
  )
}

export default InfoCard;