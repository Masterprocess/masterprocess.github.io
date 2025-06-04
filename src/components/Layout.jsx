import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <footer className="bg-bauhausBlack py-4 text-center text-white">
        © {new Date().getFullYear()} Zoe Rackley
      </footer>
    </div>
  );
};

export default Layout;
