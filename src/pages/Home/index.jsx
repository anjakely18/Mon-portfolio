import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <Stack />
      <About />
    </div>
  );
};

export default Home;
