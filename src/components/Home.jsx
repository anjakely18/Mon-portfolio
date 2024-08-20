import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import maPhoto from "../assets/me.jpeg";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Bienvenue, je m'appelle <span>Anja</span>
        </h1>
        <h3>
          <span>Développeuse web </span> junior
        </h3>
        <p>Transformer les idées en réalité interactive</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/anja-rasamoelina-59a8352a8/">
            <FaLinkedinIn className="icon-link" />
          </a>
          <a href="https://github.com/anjakely18">
            <FaGithub className="icon-link" />
          </a>
        </div>

        <div className="btn-group">
          <a href="#" className="btn">
            Télécharger mon CV
          </a>
          <a href="#contact" className="btn">
            Me contacter
          </a>
        </div>
      </div>
      <div className="home-img">
        <img src={maPhoto} alt="ma photo" />
      </div>
    </section>
  );
};

export default Home;
