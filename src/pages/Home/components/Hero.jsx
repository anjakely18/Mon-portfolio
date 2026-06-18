import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import maPhoto from "@/assets/me.png";
import cv from "@/assets/cv.pdf";import ParticlesWrapper from "./Particles";

const Hero = () => {
  return (
    <section className="relative flex container items-center justify-between">
      <ParticlesWrapper className="absolute inset-0 z-0" />
      <div className="flex flex-col items-start mt-12 max-w-lg">
        <h1 className="text-h1 font-title leading-tight">
          Bienvenue, je m'appelle <span className="text-main">Anja</span>
        </h1>
        <h2 className="mb-8 mt-8 text-h2 font-title">
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
        </h2>
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

        <div className="flex gap-4">
          <a href={cv} className="btn-primary" download>
            Télécharger mon CV
          </a>
          <a href="#contact" className="btn-outline">
            Me contacter
          </a>
        </div>
      </div>
      <div className="relative top-12 w-110 h-110 rounded-full overflow-hidden cursor-pointer shadow-glow-lg hover:shadow-glow-xl transition-all duration-300">
        <img src={maPhoto} alt="ma photo" className="w-full h-full object-cover object-center" />
      </div>
    </section>
  );
};

export default Hero;
