const InfoCard = ({ title, description }) => {
  return (
    <div className="info-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default InfoCard;