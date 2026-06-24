import { GiHamburgerMenu } from "react-icons/gi";
import { FiSun, FiMoon } from "react-icons/fi";
import { links } from "../assets/data";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="backdrop-blur-md fixed top-0 left-0 flex bg-bg-second/90 text-(--color-text) items-center justify-between px-8 py-4 z-50 w-full">
      {/* Logo */}
      <NavLink to={"/"}>
        <h2 className="font-title text-base md:text-logo">
          Anja <span className="text-main">Rasamoelina</span>
        </h2>
      </NavLink>

      {/* Desktop nav — pill avec bordure */}
      <nav className="hidden md:flex items-center gap-6 border border-(--color-text)/15 rounded-full px-6 py-2">
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <NavLink to={href} key={id} className={({ isActive }) => isActive ? "bg-main text-bg rounded-full px-3 py-1 text-nav font-semibold" : "hover:text-main text-nav"}>
              {text}
            </NavLink>
          );
        })}
      </nav>

      {/* Droite : séparateur + toggle + hamburger mobile */}
      <div className="flex items-center gap-4">
        {/* Séparateur vertical — desktop seulement */}
        <div className="hidden md:block w-px h-5 bg-(--color-text)/20" />

        {/* Toggle thème */}
        <button
          onClick={toggleTheme}
          aria-label="Changer de thème"
          className="relative w-14 h-7 rounded-full cursor-pointer bg-bg-second border border-(--color-text)/10 transition-colors duration-300 flex-shrink-0"
        >
          <span className={`absolute top-1/2 -translate-y-1/2 text-xs transition-all duration-300 ${
            theme === "dark" ? "left-2 text-yellow-400" : "right-2 text-(--color-text)/50"
          }`}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </span>
          <span className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-all duration-300 ${
            theme === "dark" ? "right-1" : "left-1"
          }`} />
        </button>

        {/* Hamburger mobile */}
        <div className="md:hidden cursor-pointer text-2xl">
          <GiHamburgerMenu onClick={toggle} />
        </div>
      </div>

      {/* Mobile nav — dropdown */}
      <nav className={`md:hidden flex flex-col transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"} absolute w-full top-full left-0 bg-bg-second px-8 py-4 gap-4`}>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <NavLink onClick={() => setIsOpen(false)} to={href} key={id} className={({ isActive }) => isActive ? "bg-main text-bg rounded-full px-3 py-1 text-nav font-semibold" : "hover:text-main text-nav"}>
              {text}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
