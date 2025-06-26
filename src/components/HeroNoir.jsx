import React from 'react';

const HeroNoir = ({ intro, ctaText, ctaLink }) => {
  return (
    <section
      id="welcome"
      className="relative flex h-[32rem] flex-col items-center justify-center bg-noir-background text-noir-text overflow-hidden text-center space-y-4"
    >
      <h1
        className="relative text-5xl font-bold glitch"
        data-text="Welcome to my portfolio"
      >
        Welcome to my portfolio
      </h1>
      {intro && <p className="relative max-w-lg">{intro}</p>}
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          className="relative inline-block rounded bg-noir-accent px-4 py-2 font-semibold text-noir-background hover:bg-noir-text"
        >
          {ctaText}
        </a>
      )}
    </section>
  );
};

export default HeroNoir;
