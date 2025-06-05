import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header className="bg-bauhausRed text-white">
    <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-4">
      <Link to="/" className="font-bold hover:underline">
        Zoe Rackley
      </Link>
      <nav className="flex flex-wrap space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/blog" className="hover:underline">Blog</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/resume" className="hover:underline">Resume</Link>
      </nav>
    </div>
  </header>
);

export default Header;
