import Hero from "./components/Hero";
import About from "./components/InfoCard";
import Stack from "./components/Stack";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Stack />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
