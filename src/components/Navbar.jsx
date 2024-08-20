import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../assets/data";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <header className="header">
      <h2 className="logo">
        Anja <span>Rasamoelina</span>
      </h2>

      <div className="bx bx-menu" id="menu-icon">
        <GiHamburgerMenu onClick={toggle} />
      </div>

      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        {links.map((link) => {
          const { id, href, text } = link;
          return (
            <a key={id} href={href} className="navlink">
              {text}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
