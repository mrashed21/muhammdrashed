import { Button, Card, CardBody } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import data from "./project.json";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expanded, setExpanded] = useState({});

  const handleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-[url('https://i.ibb.co.com/1ZrcVXJ/projects.jpg')] bg-cover bg-center">
      <motion.h2
        className="text-3xl font-bold text-center my-12 text-white"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="shadow-lg rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <Card className="h-full shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-[#151c29] shadow-blue-gray-900 border-2">
              <CardBody>
                <Swiper
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  modules={[Pagination, Autoplay]}
                  className="w-full h-48"
                >
                  {project.images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={project.title}
                        className="w-full h-48 object-cover rounded-md"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-4">
                  <h5 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h5>
                  <p className="text-gray-400 mb-4 text-justify">
                    {expanded[project.id] || project.description.length <= 80
                      ? project.description
                      : `${project.description.slice(0, 80)}... `}
                    {project.description.length > 80 && (
                      <span
                        className="text-blue-400 cursor-pointer hover:underline"
                        onClick={() => handleReadMore(project.id)}
                      >
                        {expanded[project.id] ? "Read Less" : "Read More"}
                      </span>
                    )}
                  </p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-grow"
                    >
                      <Button color="blue" size="sm" className="w-full">
                        Live Demo
                      </Button>
                    </a>
                    <Link to={`/project/${project.id}`} className="flex-grow">
                      <Button color="green" size="sm" className="w-full">
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
