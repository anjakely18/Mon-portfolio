import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../assets/data";

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="backdrop-blur-md fixed top-0 left-0 w-100 flex bg-bg-second/90 text-[--color-text] items-center justify-between px-8 py-4 z-50 w-full">
      <NavLink to={"/"}>
        <h2 className="font-title text-logo">
          Anja <span className="text-main">Rasamoelina</span>
        </h2>
      </NavLink>

      <div className="md:hidden cursor-pointer text-2xl">
        <GiHamburgerMenu onClick={toggle} />
      </div>

      <nav className={`flex flex-col md:flex-row transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"} md:opacity-100 md:translate-y-0 md:pointer-events-auto absolute w-full md:w-auto md:relative top-full left-0 bg-bg-second md:bg-transparent gap-6`}>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <NavLink onClick={() => setIsOpen(false)} to={href} key={id} className={({ isActive }) => isActive ? "text-main underline underline-offset-8 decoration-4 text-nav" : "hover:text-main text-nav"}>
              {text}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
