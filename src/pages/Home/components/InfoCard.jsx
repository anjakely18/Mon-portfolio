import SectionTitle from "@/components/SectionTitle";
import InfoCard from "@/components/InfoCard";
import { aboutInfo } from "@/assets/data";
import { Link } from "react-router-dom";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <section className="container">
      <SectionTitle className="main text-h2 font-title" title="Tout sur moi" />
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-12">
        <AnimatedSection delay={0} className="flex flex-col gap-4 md:w-1/2">
          <p>
              <FaMapMarkerAlt className="text-main inline-block mr-2" /> Localisation : {aboutInfo.localisation}
          </p>
          <p className="text-body">
            {aboutInfo.bio}
          </p>
          <Link to="/about" className="btn-ghost mt-4">
            Mon histoire <FaArrowRight className="inline-block ml-2" />
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="flex flex-col gap-4 md:w-1/2">
          {aboutInfo.cards.map((card) => (
            <InfoCard key={card.id} title={card.title} description={card.description} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
