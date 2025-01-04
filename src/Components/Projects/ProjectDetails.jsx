// import { Carousel } from "@material-tailwind/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import  { useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ProjectDetails = () => {
//   const { id } = useParams();

//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   const projectData = {
//     1: {
//       title: "Dragoon News",
//       description:
//         "Real-time news platform with Firebase authentication and responsive design.",
//       features: [
//         "Real-time news updates",
//         "Firebase Authentication",
//         "Responsive Design",
//         "Dark/Light Theme Support",
//       ],
//       futurePlans: [
//         "Add user preferences for news categories.",
//         "Implement push notifications for breaking news.",
//       ],
//       repoLink: "https://github.com/username/dragoon-news",
//       images: [
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400",
//       ],
//     },
//     2: {
//       title: "Hanafi Fiqh",
//       description: "Q&A platform with role-based permissions and admin panel.",
//       features: [
//         "Role-based authentication",
//         "Admin panel for user management",
//         "Responsive UI",
//       ],
//       futurePlans: [
//         "Add a voting system for questions and answers.",
//         "Improve SEO optimization.",
//       ],
//       repoLink: "https://github.com/username/hanafi-fiqh",
//       images: [
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400",
//       ],
//     },
//     3: {
//       title: "Service Review System",
//       description:
//         "Review and rating system for services with user authentication.",
//       features: [
//         "User authentication",
//         "Review and rating system",
//         "Admin moderation tools",
//       ],
//       futurePlans: [
//         "Integrate payment systems.",
//         "Add review filtering options.",
//       ],
//       repoLink: "https://github.com/username/review-system",
//       images: [
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400",
//         "https://via.placeholder.com/400",
//       ],
//     },
//   };

//   const project = projectData[id];

//   return (
//     <div className="py-12 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-4xl mx-auto" data-aos="fade-up">
//         <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
//         <p className="text-lg text-gray-700 mb-4">{project.description}</p>

//         <Carousel className="mb-6">
//           {project.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={project.title}
//               className="rounded-lg shadow-lg"
//             />
//           ))}
//         </Carousel>

//         <h3 className="text-xl font-semibold mb-4">Features</h3>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           {project.features.map((feature, index) => (
//             <li key={index}>{feature}</li>
//           ))}
//         </ul>

//         <h3 className="text-xl font-semibold mb-4">Future Plans</h3>
//         <ul className="list-disc list-inside text-gray-700 mb-6">
//           {project.futurePlans.map((plan, index) => (
//             <li key={index}>{plan}</li>
//           ))}
//         </ul>

//         <a
//           href={project.repoLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-blue-500 underline"
//         >
//           View GitHub Repository
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetails;

import { Carousel } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <p className="text-lg text-gray-700 mb-6">{project.description}</p>

      <Carousel>
        {project.images.map((img, index) => (
          <img key={index} src={img} alt={`${project.title}-${index}`} />
        ))}
      </Carousel>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Features:</h3>
        <ul className="list-disc pl-6 space-y-2">
          {Object.entries(project.features).map(([key, value]) => (
            <li key={key} className="text-gray-700">
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
            <li key={key} className="text-gray-700">
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value.join(", ")}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <a
          href={project.gitRepo.frontend}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
