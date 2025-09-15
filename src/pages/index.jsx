import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import DarkNoirHero from '../components/DarkNoirHero';
import DarkNoirPortfolio from '../components/DarkNoirPortfolio';
import DarkNoirAbout from '../components/DarkNoirAbout';
import DarkNoirContact from '../components/DarkNoirContact';
import DarkNoirLoadingScreen from '../components/DarkNoirLoadingScreen';
import Seo from '../components/seo';

const IndexPage = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    work: workRef,
    about: aboutRef,
    contact: contactRef,
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const entries = Object.entries(sectionRefs);
    const observer = new IntersectionObserver(
      observedEntries => {
        observedEntries.forEach(entry => {
          if (entry.isIntersecting) {
            const matched = entries.find(([, ref]) => ref.current === entry.target);
            if (matched) {
              setCurrentSection(matched[0]);
            }
          }
        });
      },
      { threshold: 0.3 },
    );

    entries.forEach(([, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      entries.forEach(([, ref]) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      observer.disconnect();
    };
  }, []);

  const handleNavigate = sectionId => {
    const targetRef = sectionRefs[sectionId];
    if (targetRef?.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home' && typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setCurrentSection(sectionId);
  };

  const handleLoadingComplete = () => setIsLoading(false);
  const scrollToWork = () => handleNavigate('work');

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <DarkNoirLoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      <Layout
        navigationProps={{ currentSection, onNavigate: handleNavigate }}
      >
        <DarkNoirHero ref={homeRef} onScrollToWork={scrollToWork} />
        <DarkNoirPortfolio ref={workRef} />
        <DarkNoirAbout ref={aboutRef} />
        <DarkNoirContact ref={contactRef} />
      </Layout>
    </>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
