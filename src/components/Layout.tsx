import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Wrapper from './Wrapper';

export interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
}

const Layout = ({ children, showFooter = true }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Header />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
