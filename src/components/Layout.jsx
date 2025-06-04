import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <header className="bg-bauhausRed text-white">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link to="/" className="font-bold hover:underline">
            Zoe Rackley
          </Link>
          <nav className="space-x-4">
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
      <main className="flex-grow">{children}</main>
      <footer className="bg-bauhausBlack py-4 text-center text-white">
        © {new Date().getFullYear()} Zoe Rackley
      </footer>
    </div>
  );
};

export default Layout;
