import { Button, Card, CardBody } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      id: 1,
      title: "Dragoon News",
      description: "Real-time news platform with Firebase authentication.",
      image: "https://via.placeholder.com/300",
      liveLink: "https://dragoon-news.com",
    },
    {
      id: 2,
      title: "Hanafi Fiqh",
      description: "Q&A platform with role-based authentication.",
      image: "https://via.placeholder.com/300",
      liveLink: "https://hanafi-fiqh.com",
    },
    {
      id: 3,
      title: "Service Review System",
      description: "Review and rating system for services.",
      image: "https://via.placeholder.com/300",
      liveLink: "https://review-system.com",
    },
  ];

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-[url('projects.jpg')] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-white" data-aos="fade-up">
          Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <Card className="h-full bg-[#151c29]">
              <CardBody className="p-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h5 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h5>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <div className="flex justify-between">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button color="blue" size="sm">
                        Live Demo
                      </Button>
                    </a>
                    <Link to={`/project/${project.id}`}>
                      <Button color="green" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
