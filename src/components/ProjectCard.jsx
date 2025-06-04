import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ProjectCard = ({ project }) => {
  const renderImage = () => {
    switch (project.image) {
      case "../images/projects/project1.svg":
        return (
          <StaticImage
            src="../images/projects/project1.svg"
            alt={project.title}
            className="w-full"
          />
        );
      case "../images/projects/project2.svg":
        return (
          <StaticImage
            src="../images/projects/project2.svg"
            alt={project.title}
            className="w-full"
          />
        );
      case "../images/projects/project3.svg":
        return (
          <StaticImage
            src="../images/projects/project3.svg"
            alt={project.title}
            className="w-full"
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2 rounded border p-4 shadow bg-white">
      {renderImage()}
      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      <div className="space-x-4">
        <a href={project.demo} className="text-bauhausBlue underline">
          Demo
        </a>
        <a href={project.source} className="text-bauhausRed underline">
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
