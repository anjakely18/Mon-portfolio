import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import ProjectsList from "./components/ProjectsList";
import { pageHeroes } from "@/assets/data";

const Projects = () => {
  return (
    <>
      <PageHero {...pageHeroes.projects} />
      <AnimatedSection>
        <section className="container py-20 md:py-32">
          <ProjectsList />
        </section>
      </AnimatedSection>
    </>
  );
};

export default Projects;
