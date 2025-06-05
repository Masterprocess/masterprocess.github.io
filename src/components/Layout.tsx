import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main className="flex-grow pt-20">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
