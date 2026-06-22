import PageHero from "@/components/PageHero";
import { pageHeroes } from "@/assets/data";

const Skills = () => {
  return (
    <>
      <PageHero {...pageHeroes.skills} />
    </>
  );
};

export default Skills;
