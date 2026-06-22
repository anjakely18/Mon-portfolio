import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CTA from "./components/CTA";
import AnimatedSection from "@/components/AnimatedSection";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <AnimatedSection><Stack /></AnimatedSection>
      <AnimatedSection><About /></AnimatedSection>
      <AnimatedSection><Skills /></AnimatedSection>
      <AnimatedSection><Projects /></AnimatedSection>
      <AnimatedSection><CTA /></AnimatedSection>
    </div>
  );
};

export default Home;
