import React from "react";

const HeroBauhaus = () => {
  return (
    <section
      id="welcome"
      className="relative flex h-96 items-center justify-center bg-bauhausYellow overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-48 w-48 bg-bauhausBlue"></div>
        <div className="absolute bottom-0 right-0 h-32 w-32 bg-bauhausRed"></div>
        <div className="absolute top-0 right-0 h-24 w-24 rounded-full border-4 border-bauhausBlack"></div>
      </div>
      <h1 className="relative text-4xl font-bold text-bauhausBlack">
        Welcome to my portfolio
      </h1>
    </section>
  );
};

export default HeroBauhaus;
