import { Link } from "react-router-dom";
import { links } from "../assets/data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col items-center container py-12 mt-20 border-t border-main/20">
      <div className="flex justify-center items-center gap-4 mb-6 text-3xl">
        <a
          href="https://www.linkedin.com/in/anja-rasamoelina-59a8352a8/"
          target="_blank"
          className="border border-main rounded-full p-2 transition-all duration-300 hover:bg-main hover:text-bg"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/anjakely18" target="_blank" className="border border-main rounded-full p-2 transition-all duration-300 hover:bg-main hover:text-bg">
          <FaGithub />
        </a>
      </div>
      <nav className="text-nav flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mb-6">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <Link key={id} to={href} className="navlink hover:text-main">
              {text}
            </Link>
          );
        })}
      </nav>
      <p className="text-caption opacity-70">
        &copy; 2026 Anja Rasamoelina. Tous droits réservés.
      </p>
    </section>
  );
};

export default Footer;
