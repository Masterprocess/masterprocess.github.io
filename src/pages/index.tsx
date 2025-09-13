import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import LoadingScreen from '../components/LoadingScreen';
import Seo from '../components/seo';

const IndexPage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const portfolioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToWork = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLoadingComplete = () => setIsLoading(false);

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };
  const pageTransition = { duration: 0.6, ease: 'easeInOut' };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <motion.div key="about" initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <About />
          </motion.div>
        );
      case 'contact':
        return (
          <motion.div key="contact" initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <Contact />
          </motion.div>
        );
      default:
        return (
          <motion.div key="home" initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
            <Hero onScrollToWork={scrollToWork} />
            <Portfolio ref={portfolioRef} />
          </motion.div>
        );
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="fixed inset-0 film-grain pointer-events-none z-40" />
      <div
        className="fixed pointer-events-none z-50 w-6 h-6 border border-red-500 rounded-full mix-blend-difference transition-all duration-300 ease-out hidden lg:block"
        style={{ left: mousePosition.x - 12, top: mousePosition.y - 12 }}
      />
      <div
        className="fixed pointer-events-none z-50 w-1 h-1 bg-red-500 rounded-full transition-all duration-100 ease-out hidden lg:block"
        style={{ left: mousePosition.x - 2, top: mousePosition.y - 2 }}
      />

      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <AnimatePresence mode="wait" initial={false}>
        {renderPage()}
      </AnimatePresence>

      <div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-red-500 to-red-600"
          style={{ scaleX: scrollProgress, transformOrigin: '0%' }}
        />
      </div>
    </div>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
