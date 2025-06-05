import React from 'react';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const FeaturedWork = () => (
  <section id="work" className="container mx-auto px-4 py-8">
    <h2 className="mb-4 text-2xl font-bold">Featured Work</h2>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map(project => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </section>
);

export default FeaturedWork;
