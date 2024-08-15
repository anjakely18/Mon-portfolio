import React from "react";
import { links } from "../assets/data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="footer">
      <div className="social-icons">
        <a href="#">
          <FaLinkedinIn className="icon-link" />
        </a>
        <a href="#">
          <FaGithub className="icon-link" />
        </a>
      </div>
      <nav className="navbar">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a key={id} href={href} className="navlink">
              {text}
            </a>
          );
        })}
      </nav>
      <p className="copyright">
        &copy; 2024 Anja Rasamoelina. Tous droits réservés.
      </p>
    </section>
  );
};

export default Footer;
