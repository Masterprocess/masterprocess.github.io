import React from 'react';

const HeroBauhaus = ({ intro, ctaText, ctaLink }) => {
  return (
    <section
      id="welcome"
      className="relative flex h-[32rem] flex-col items-center justify-center bg-bauhausYellow overflow-hidden text-center space-y-4"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-48 w-48 bg-bauhausBlue"></div>
        <div className="absolute bottom-0 right-0 h-32 w-32 bg-bauhausRed"></div>
        <div className="absolute top-10 right-10 h-24 w-24 rounded-full border-4 border-bauhausBlack"></div>
        <div className="absolute bottom-10 left-1/2 h-16 w-16 -translate-x-1/2 bg-bauhausBlack"></div>
      </div>
      <h1 className="relative text-5xl font-bold text-bauhausBlack">
        Welcome to my portfolio
      </h1>
      {intro && (
        <p className="relative max-w-lg text-lg text-bauhausBlack">{intro}</p>
      )}
      {ctaText && ctaLink && (
        <a
          href={ctaLink}
          className="relative inline-block rounded bg-bauhausRed px-4 py-2 font-semibold text-white hover:bg-bauhausBlack"
        >
          {ctaText}
        </a>
      )}
    </section>
  );
};

export default HeroBauhaus;
