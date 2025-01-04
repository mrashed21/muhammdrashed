// import { Button, Card, CardBody } from "@material-tailwind/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { motion } from "framer-motion";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "Dragoon News",
//       description: "Real-time news platform with Firebase authentication.",
//       image: "https://via.placeholder.com/300",
//       liveLink: "https://dragoon-news.com",
//     },
//     {
//       id: 2,
//       title: "Hanafi Fiqh",
//       description: "Q&A platform with role-based authentication.",
//       image: "https://via.placeholder.com/300",
//       liveLink: "https://hanafi-fiqh.com",
//     },
//     {
//       id: 3,
//       title: "Service Review System",
//       description: "Review and rating system for services.",
//       image: "https://via.placeholder.com/300",
//       liveLink: "https://review-system.com",
//     },
//   ];

//   return (
//     <div className="py-12 px-4 sm:px-8 lg:px-16 bg-[url('projects.jpg')] bg-cover bg-center">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//       >
//         <h2 className="text-3xl font-bold text-center mb-8 text-white" data-aos="fade-up">
//           Projects
//         </h2>
//       </motion.div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project) => (
//           <motion.div
//             key={project.id}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//             className="shadow-lg rounded-lg overflow-hidden"
//             data-aos="fade-up"
//           >
//             <Card className="h-full bg-[#151c29]">
//               <CardBody className="p-0">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h5 className="text-xl font-semibold mb-2">
//                     {project.title}
//                   </h5>
//                   <p className="text-gray-700 mb-4">{project.description}</p>
//                   <div className="flex justify-between">
//                     <a
//                       href={project.liveLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                     >
//                       <Button color="blue" size="sm">
//                         Live Demo
//                       </Button>
//                     </a>
//                     <Link to={`/project/${project.id}`}>
//                       <Button color="green" size="sm">
//                         View Details
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               </CardBody>
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import { Button, Card, CardBody } from "@material-tailwind/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import data from "./project.json";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <div className="py-12 px-4 sm:px-8 lg:px-16">
//       <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
//         Projects
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.map((project) => (
//           <Card key={project.id} className="h-full">
//             <CardBody>
//               <img
//                 src={project.images[0]}
//                 alt={project.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h5 className="text-xl font-semibold mb-2">{project.title}</h5>
//                 <p className="text-gray-700 mb-4">{project.description}</p>
//                 <div className="flex justify-between">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button color="blue" size="sm">
//                       Live Demo
//                     </Button>
//                   </a>
//                   <Link to={`/project/${project.id}`}>
//                     <Button color="green" size="sm">
//                       View Details
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

// import { Button, Card, CardBody } from "@material-tailwind/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import data from "./project.json";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Pagination, Navigation, Autoplay } from "swiper/modules";

// const Projects = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const [expanded, setExpanded] = useState({});

//   const handleReadMore = (id) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <div className="py-12 px-4 sm:px-8 lg:px-16 bg-[url('projects.jpg')] bg-cover bg-center">
//       <h2 className="text-3xl font-bold text-center mb-8 text-white" data-aos="fade-up">
//         Projects
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {data.map((project) => (
//           <Card key={project.id} className="h-full bg-[#151c29]">
//             <CardBody>
//               <Swiper
//                 pagination={{ clickable: true }}
//                 navigation={true}
//                 autoplay={{ delay: 3000, disableOnInteraction: false }}
//                 modules={[Pagination, Navigation, Autoplay]}
//                 className="w-full h-48"
//               >
//                 {project.images.map((image, index) => (
//                   <SwiperSlide key={index}>
//                     <img
//                       src={image}
//                       alt={project.title}
//                       className="w-full h-48 object-cover"
//                     />
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//               <div className="p-4">
//                 <h5 className="text-xl font-semibold mb-2 text-white">{project.title}</h5>
//                 <p className="text-gray-400 mb-4">
//                   {expanded[project.id] || project.description.length <= 80
//                     ? project.description
//                     : `${project.description.slice(0, 80)}...`}
//                 </p>
//                 {project.description.length > 80 && (
//                   <Button
//                     color="blue"
//                     size="sm"
//                     onClick={() => handleReadMore(project.id)}
//                   >
//                     {expanded[project.id] ? "Read Less" : "Read More"}
//                   </Button>
//                 )}
//                 <div className="flex justify-between mt-4">
//                   <a
//                     href={project.liveLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <Button color="blue" size="sm">
//                       Live Demo
//                     </Button>
//                   </a>
//                   <Link to={`/project/${project.id}`}>
//                     <Button color="green" size="sm">
//                       View Details
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             </CardBody>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

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
    <div className="py-12 px-4 sm:px-8 lg:px-16 bg-[url('projects.jpg')] bg-cover bg-center">
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
            <Card className="h-full bg-[#151c29] border-2 ">
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
