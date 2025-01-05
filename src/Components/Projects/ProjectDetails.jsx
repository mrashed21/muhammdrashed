import { Carousel } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projectData from "./project.json";

const ProjectDetails = () => {
  const { id } = useParams();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const project = projectData.find((p) => p.id === id);

  if (!project) {
    return <h2 className="text-center mt-10">Project not found!</h2>;
  }

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
      <p className="text-lg text-white mb-6">{project.description}</p>

      <Carousel autoplay="true" autoplayDelay="2500" loop="true">
        {project.images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="rounded-xl"
            alt={`${project.title}-${index}`}
          />
        ))}
      </Carousel>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Features:</h3>
        <ul className="list-disc pl-6 space-y-2">
          {Object.entries(project.features).map(([key, value]) => (
            <li key={key} className="text-white">
              <strong>{key.replace(/([A-Z])/g, " $1")}: </strong>
              {Array.isArray(value) ? value.join(", ") : value}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Technology Stack:</h3>
        <ul className="list-disc pl-6 space-y-2">
          {Object.entries(project.technology).map(([key, value]) => (
            <li key={key} className="text-white">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex gap-4">
        {/* Live Link */}
        {project.liveLink && (
          <Link
            to={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block mb-2"
          >
            Live Site
          </Link>
        )}

        {/* Frontend GitHub Repo */}
        {project.gitRepo.frontend && (
          <Link
            to={project.gitRepo.frontend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block mb-2"
          >
            Frontend Repo
          </Link>
        )}

        {/* Backend GitHub Repo */}
        {project.gitRepo.backend && (
          <Link
            to={project.gitRepo.backend}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline block"
          >
            Backend Repo
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
