import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const AboutMe = () => (
  <section id="about" className="container mx-auto px-4 py-8 bg-gray-100">
    <h2 className="mb-4 text-2xl font-bold">About</h2>
    <div className="flex flex-col items-center gap-4 md:flex-row">
      <StaticImage
        src="../images/profile.svg"
        alt="Profile photo"
        className="h-32 w-32 rounded-full"
      />
      <p className="text-gray-700">
        Hello! I'm Zoe Rackley, a UX designer exploring a noir aesthetic with
        glitch vibes and VTM flair. Geometry, motion and accessibility guide my
        work.
      </p>
    </div>
  </section>
);

export default AboutMe;
