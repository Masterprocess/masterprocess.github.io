import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, showFooter = true }) => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-grow">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
