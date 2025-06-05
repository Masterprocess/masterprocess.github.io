import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => (
  <header className="bg-bauhausRed text-white">
    <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">
      <Link to="/" className="font-bold hover:underline">
        Zoe Rackley
      </Link>
      <nav className="flex flex-wrap space-x-4">
        <a href="#welcome" className="hover:underline">
          Home
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#work" className="hover:underline">
          Work
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Navbar;
