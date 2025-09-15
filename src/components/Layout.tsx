import React, { ReactNode, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import DarkNoirNavigation, { type NavigationProps } from './DarkNoirNavigation';
import Footer from './Footer';

export interface LayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  navigationProps?: NavigationProps;
}

const Layout = ({ children, showFooter = true, navigationProps }: LayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 z-0 film-grain" />

      <div className="pointer-events-none fixed z-50 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500 mix-blend-difference transition-transform duration-300 ease-out lg:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />
      <div className="pointer-events-none fixed z-50 hidden h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500 transition-transform duration-150 ease-out lg:block"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      <DarkNoirNavigation {...(navigationProps ?? {})} />

      <div className="fixed top-0 left-0 z-40 h-1 w-full bg-gray-900">
        <motion.div
          className="h-full bg-gradient-to-r from-red-500 to-red-600"
          style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
        />
      </div>

      <main className="relative z-10 pt-28">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default Layout;
