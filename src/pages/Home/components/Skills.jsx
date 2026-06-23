import skillsData from "@/content/skills.json";
const skills = skillsData.skills;
import FeatureCard from "@/components/FeatureCard";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import iconMap from "@/utils/iconMap";


const Skills = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="flex justify-between">
        <SectionTitle className="main text-h2 font-title" title="Mes compétences" />
        <Link to="/skills" className="btn-ghost">Voir tout <FaArrowRight className="inline-block ml-2" /></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {skills.map((skill, index) => {
          const Icon = iconMap[skill.icon];
          return (
            <AnimatedSection key={skill.id} delay={index * 0.1}>
              <FeatureCard icon={<Icon className="text-2xl text-main" />} title={skill.title} description={skill.text} />
            </AnimatedSection>
          );
        })}
      </div>
    </section>

  );
};

export default Skills;
