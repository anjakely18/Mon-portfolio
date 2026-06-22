import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SkillsAccordion from "./components/SkillsAccordion";
import { pageHeroes } from "@/assets/data";

const Skills = () => {
  return (
    <>
      <PageHero {...pageHeroes.skills} />
      <AnimatedSection>
        <section className="container py-20 md:py-32">
          <SkillsAccordion />
        </section>
      </AnimatedSection>
    </>
  );
};

export default Skills;
