import Hero from "./components/Hero";
import About from "./components/InfoCard";
import Stack from "./components/Stack";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CTA from "./components/CTA";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Stack />
      <About />
      <Skills />
      <Projects />
      <CTA />
    </div>
  );
};

export default Home;
