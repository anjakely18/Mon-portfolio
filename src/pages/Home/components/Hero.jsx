import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import maPhoto from "../../../assets/me.jpeg";
import cv from "../../../assets/cv.pdf";

const Hero = () => {
  return (
    <section className="flex items-center justify-center gap-12">
      <div className="flex flex-col items-start justify-center mt-12">
        <h1 className="text-h1 font-title text-">
          Bienvenue, je m'appelle <span>Anja</span>
        </h1>
        <h3 className="mb-8 mt-8 text-h3 font-title">
          <span>Développeuse web </span> junior
        </h3>
        <p className="text-body">
          Transformer les idées en réalité interactive
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/anja-rasamoelina-59a8352a8/"
            target="_blank"
          >
            <FaLinkedinIn className="icon-link" />
          </a>
          <a href="https://github.com/anjakely18" target="_blank">
            <FaGithub className="icon-link" />
          </a>
        </div>

        <div className="btn-group">
          <a href={cv} className="btn" download>
            Télécharger mon CV
          </a>
          <a href="#contact" className="btn">
            Me contacter
          </a>
        </div>
      </div>
      <div className="relative top-12 w-[30vw] rounded-full cursor-pointer transition-all duration-[400ms] ease-in-out shadow-[0_0_25px_var(--color-main)]">
        <img src={maPhoto} alt="ma photo" />
      </div>
    </section>
  );
};

export default Hero;
