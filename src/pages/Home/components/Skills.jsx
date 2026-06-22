import { skills } from "@/assets/data";
import SkillsCard from "./SkillsCard";
import SectionTitle from "@/components/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Skills = () => {
  return (
    <section className="container py-20 md:py-32">
      <div className="flex justify-between">
        <SectionTitle className="main text-h2 font-title" title="Mes compétences" />
        <Link to="/skills" className="btn-ghost">Voir tout <FaArrowRight className="inline-block ml-2" /></Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-12">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>

  );
};

export default Skills;
