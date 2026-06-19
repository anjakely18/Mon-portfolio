import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import maPhoto from "@/assets/me.png";
import cv from "@/assets/cv.pdf";import ParticlesWrapper from "./Particles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row container items-center justify-between gap-8 md:gap-16">
      <ParticlesWrapper className="absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-start max-w-lg">
        <h1 className="text-h1 font-title leading-tight">
          Bienvenue, je m'appelle <span className="text-main">Anja</span>
        </h1>
        <h3 className="mb-8 mt-8 text-h3 font-title">
          Je suis{" "}
          <TypeAnimation
            sequence={[
              'développeuse web',
              1000,
              'créative',
              1000,
              'intégratrice front-end',
              1000,
            ]}
            repeat={Infinity}
            className="text-main"
          />
        </h3>
        <div className="flex gap-4 mb-8 text-3xl">
          <a
            href="https://www.linkedin.com/in/anja-rasamoelina-59a8352a8/"
            target="_blank"
            className="border border-main rounded-full p-2 transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaLinkedinIn className="icon-link" />
          </a>
          <a href="https://github.com/anjakely18" target="_blank" className="border border-main rounded-full p-2 transition-all duration-300 hover:bg-main hover:text-bg">
            <FaGithub className="icon-link" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href={cv} className="btn-primary" download>
            Télécharger mon CV
          </a>
          <a href="#contact" className="btn-outline">
            Me contacter
          </a>
        </div>
      </div>
      <div className="relative z-10 w-70 h-70 top-12 md:w-90 md:h-90 rounded-full overflow-hidden shrink-0 cursor-pointer shadow-glow-lg hover:shadow-glow-xl transition-all duration-300">
        <img src={maPhoto} alt="ma photo" className="w-full h-full object-cover object-center" />
      </div>
    </section>
  );
};

export default Hero;
