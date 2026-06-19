import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const Home = () => {
  return (
    <div className="flex flex-col gap-25">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
