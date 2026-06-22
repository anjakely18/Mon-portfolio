import Hero from "./components/Hero";
import About from "./components/InfoCard";
import Stack from "./components/Stack";
import Skills from "./components/Skills";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Stack />
      <About />
      <Skills />
    </div>
  );
};

export default Home;
