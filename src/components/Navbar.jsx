import { GiHamburgerMenu } from "react-icons/gi";
import { links } from "../assets/data";

import React from "react";

const Navbar = () => {
  return (
    <header className="header">
      <h2 className="logo">
        Anja <span>Rasamoelina</span>
      </h2>
      <div className="bx bx-menu" id="menu-icon">
        <GiHamburgerMenu />
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
    </header>
  );
};

export default Navbar;
