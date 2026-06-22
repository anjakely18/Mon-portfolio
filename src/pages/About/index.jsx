import PageHero from "@/components/PageHero";
import { pageHeroes } from "@/assets/data";

const About = () => {
  return (
    <>
      <PageHero {...pageHeroes.about} />
    </>
  );
};

export default About;
