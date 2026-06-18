import React from "react";
import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { aboutInfo } from "@/assets/data";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";

const About = () => {
  return (
    <section className="about" id="about">
      <SectionTitle title="Tout sur moi" />
      <div className="about-content">
        <p> 
            <FaMapMarkerAlt /> Localisation : {aboutInfo.localisation}
        </p>
        <p>
          {aboutInfo.bio}
        </p>
        <Link to="/about" className="btn">
          En savoir plus
        </Link>
      </div>
      <div className="about-cards">
        {aboutInfo.cards.map((card) => (
          <InfoCard key={card.id} title={card.title} description={card.description} />
        ))}
      </div>
    </section>
  );
};

export default About;
