import React from "react";

const projects = [
  { title: "Project One", description: "Coming soon" },
  { title: "Project Two", description: "Coming soon" },
  { title: "Project Three", description: "Coming soon" },
];

const FeaturedWork = () => (
  <section id="work" className="container mx-auto px-4 py-8">
    <h2 className="mb-4 text-2xl font-bold">Featured Work</h2>
    <div className="grid gap-4 md:grid-cols-3">
      {projects.map((project) => (
        <div key={project.title} className="rounded border p-4 shadow">
          <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
          <p className="text-gray-700">{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedWork;
