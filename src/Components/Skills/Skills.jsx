// import { Card, CardBody } from "@material-tailwind/react";
// import { motion } from "framer-motion";

// const Skills = () => {
//   const skills = [
//     {
//       title: "HTML",
//       description: "Markup language for creating web pages.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
//     },
//     {
//       title: "CSS",
//       description: "Style sheets language used for web design.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/CSS3_logo_and_wordmark.svg",
//     },
//     {
//       title: "JavaScript",
//       description: "Programming language for dynamic content.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/JavaScript-logo.svg",
//     },
//     {
//       title: "Figma",
//       description: "Design tool for user interface design.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Figma-logo.svg",
//     },
//     {
//       title: "Git",
//       description: "Version control system for tracking code changes.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
//     },
//     {
//       title: "GitHub",
//       description: "Platform for hosting Git repositories.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
//     },
//     {
//       title: "React",
//       description: "Library for building user interfaces.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//     },
//     {
//       title: "Tailwind CSS",
//       description: "Utility-first CSS framework for rapid UI design.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Tailwind_logo.svg",
//     },
//     {
//       title: "Material Tailwind",
//       description: "Material design components for Tailwind CSS.",
//       icon: "https://material-tailwind.com/images/mtsvgs/hero-icon.svg",
//     },
//     {
//       title: "Firebase",
//       description: "Backend as a service platform for building apps.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Firebase_Logo.svg",
//     },
//     {
//       title: "Node.js",
//       description: "JavaScript runtime environment for backend development.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Node.js_logo_2015.svg",
//     },
//     {
//       title: "Express.js",
//       description: "Web framework for Node.js to build web applications.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/4/47/Expressjs.png",
//     },
//     {
//       title: "MongoDB",
//       description: "NoSQL database for scalable applications.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MongoDB_logo.svg",
//     },
//     {
//       title: "JWT",
//       description: "JSON Web Token for secure authentication.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/JSON_web_token_logo.svg",
//     },
//   ];

//   return (
//     <div className="py-12 overflow-hidden">
//       <motion.div
//         className="flex space-x-4"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 40,
//             ease: "linear",
//           },
//         }}
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="w-64 sm:w-1/3 lg:w-1/4 p-4"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Card className="shadow-lg  transition-all ease-in-out duration-300 hover:shadow-2xl transform hover:scale-105">
//               <CardBody className="flex flex-col items-center text-center p-6">
//                 <div className="mb-4">
//                   <img
//                     src={skill.icon}
//                     alt={skill.title}
//                     className="w-16 h-16 object-contain"
//                   />
//                 </div>
//                 <h5 className="text-xl font-semibold mb-2">{skill.title}</h5>
//                 <p className="text-gray-700">{skill.description}</p>
//               </CardBody>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;
// import { Card, CardBody } from "@material-tailwind/react";
// import { motion } from "framer-motion";

// const Skills = () => {
//   const skills = [
//     {
//       title: "HTML",
//       description: "Markup language for creating web pages.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
//     },
//     {
//       title: "CSS",
//       description: "Style sheets language used for web design.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/a/a5/CSS3_logo_and_wordmark.svg",
//     },
//     {
//       title: "JavaScript",
//       description: "Programming language for dynamic content.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/63/JavaScript-logo.svg",
//     },
//     {
//       title: "Figma",
//       description: "Design tool for user interface design.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Figma-logo.svg",
//     },
//     {
//       title: "Git",
//       description: "Version control system for tracking code changes.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
//     },
//     {
//       title: "GitHub",
//       description: "Platform for hosting Git repositories.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
//     },
//     {
//       title: "React",
//       description: "Library for building user interfaces.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
//     },
//     {
//       title: "Tailwind CSS",
//       description: "Utility-first CSS framework for rapid UI design.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Tailwind_logo.svg",
//     },
//     {
//       title: "Material Tailwind",
//       description: "Material design components for Tailwind CSS.",
//       icon: "https://material-tailwind.com/images/mtsvgs/hero-icon.svg",
//     },
//     {
//       title: "Firebase",
//       description: "Backend as a service platform for building apps.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/5/51/Firebase_Logo.svg",
//     },
//     {
//       title: "Node.js",
//       description: "JavaScript runtime environment for backend development.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/6/64/Node.js_logo_2015.svg",
//     },
//     {
//       title: "Express.js",
//       description: "Web framework for Node.js to build web applications.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/4/47/Expressjs.png",
//     },
//     {
//       title: "MongoDB",
//       description: "NoSQL database for scalable applications.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/4/44/MongoDB_logo.svg",
//     },
//     {
//       title: "JWT",
//       description: "JSON Web Token for secure authentication.",
//       icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/JSON_web_token_logo.svg",
//     },
//   ];

//   return (
//     <div className="py-12 overflow-hidden">
//       <motion.div
//         className="flex space-x-4"
//         animate={{ x: ["0%", "-100%"] }}
//         transition={{
//           x: {
//             repeat: Infinity,
//             repeatType: "loop",
//             duration: 120, // Slower animation duration
//             ease: "linear",
//           },
//         }}
//         style={{
//           width: `${skills.length * 16}rem`, // Ensure width accommodates all skill cards
//         }}
//       >
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="w-64 sm:w-1/3 lg:w-1/4 p-4"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <Card className="shadow-lg transition-all ease-in-out duration-300 hover:shadow-2xl transform hover:scale-105">
//               <CardBody className="flex flex-col h-56 items-center text-center p-6">
//                 <div className="mb-4">
//                   <img
//                     src={skill.icon}
//                     alt={skill.title}
//                     className="w-16 h-16 object-contain"
//                   />
//                 </div>
//                 <h5 className="text-xl font-semibold mb-2">{skill.title}</h5>
//                 <p className="text-gray-700">{skill.description}</p>
//               </CardBody>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;

import { Card, CardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Markup language for creating web pages.",
      icon: "https://i.ibb.co.com/6PPX2H2/html.png",
    },
    {
      title: "CSS",
      description: "Style sheets language used for web design.",
      icon: "https://i.ibb.co.com/Zdbq9MP/css.png",
    },
    {
      title: "JavaScript",
      description: "Programming language for dynamic content.",
      icon: "https://i.ibb.co.com/fHxjfVF/Java-Script.png",
    },
    {
      title: "Figma",
      description: "Design tool for user interface design.",
      icon: "https://i.ibb.co.com/pLSGK4n/Figma.png",
    },
    {
      title: "Git",
      description: "Version control system for tracking code changes.",
      icon: "https://i.ibb.co.com/Zh2r3TP/Git.png",
    },
    {
      title: "GitHub",
      description: "Platform for hosting Git repositories.",
      icon: "https://i.ibb.co.com/j52Bn2g/git-hub-1.png",
    },
    {
      title: "React",
      description: "Library for building user interfaces.",
      icon: "https://i.ibb.co.com/DLhYwkS/React.png",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI design.",
      icon: "https://i.ibb.co.com/jwkYYz6/Tailwind-CSS.png",
    },
    {
      title: "Material Tailwind",
      description: "Material design components for Tailwind CSS.",
      icon: "https://www.material-tailwind.com/image/logo-mt.png",
    },
    {
      title: "Firebase",
      description: "Backend as a service platform for building apps.",
      icon: "https://i.ibb.co.com/1R2C3Cf/firebase.png",
    },
    {
      title: "Node.js",
      description: "JavaScript runtime environment for backend development.",
      icon: "https://i.ibb.co.com/vDV7vM2/node.png",
    },
    {
      title: "Express.js",
      description: "Web framework for Node.js to build web applications.",
      icon: "https://i.ibb.co.com/1vtTsTh/expresss.webp",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for scalable applications.",
      icon: "https://i.ibb.co.com/CJ4xF6p/mongodb.png",
    },
    {
      title: "JWT",
      description: "JSON Web Token for secure authentication.",
      icon: "https://i.ibb.co.com/0tj7fxy/jwt.png",
    },
    {
      title: "HTML",
      description: "Markup language for creating web pages.",
      icon: "https://i.ibb.co.com/6PPX2H2/html.png",
    },
    {
      title: "CSS",
      description: "Style sheets language used for web design.",
      icon: "https://i.ibb.co.com/Zdbq9MP/css.png",
    },
    {
      title: "JavaScript",
      description: "Programming language for dynamic content.",
      icon: "https://i.ibb.co.com/fHxjfVF/Java-Script.png",
    },
    {
      title: "Figma",
      description: "Design tool for user interface design.",
      icon: "https://i.ibb.co.com/pLSGK4n/Figma.png",
    },
    {
      title: "Git",
      description: "Version control system for tracking code changes.",
      icon: "https://i.ibb.co.com/Zh2r3TP/Git.png",
    },
    {
      title: "GitHub",
      description: "Platform for hosting Git repositories.",
      icon: "https://i.ibb.co.com/j52Bn2g/git-hub-1.png",
    },
    {
      title: "React",
      description: "Library for building user interfaces.",
      icon: "https://i.ibb.co.com/DLhYwkS/React.png",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI design.",
      icon: "https://i.ibb.co.com/jwkYYz6/Tailwind-CSS.png",
    },
    {
      title: "Material Tailwind",
      description: "Material design components for Tailwind CSS.",
      icon: "https://www.material-tailwind.com/image/logo-mt.png",
    },
    {
      title: "Firebase",
      description: "Backend as a service platform for building apps.",
      icon: "https://i.ibb.co.com/1R2C3Cf/firebase.png",
    },
    {
      title: "Node.js",
      description: "JavaScript runtime environment for backend development.",
      icon: "https://i.ibb.co.com/vDV7vM2/node.png",
    },
    {
      title: "Express.js",
      description: "Web framework for Node.js to build web applications.",
      icon: "https://i.ibb.co.com/1vtTsTh/expresss.webp",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for scalable applications.",
      icon: "https://i.ibb.co.com/CJ4xF6p/mongodb.png",
    },
    {
      title: "JWT",
      description: "JSON Web Token for secure authentication.",
      icon: "https://i.ibb.co.com/0tj7fxy/jwt.png",
    },
  ];

  return (
    <div className="py-12 overflow-hidden bg-[url('hx2.jpg')] bg-cover bg-center ">
      <Typography variant="h2" className=" text-center mt-7 lg:mt-9 text-white py-12">Skills</Typography>
      <motion.div
        className="flex space-x-4 w-11/12 mx-auto "
        animate={{ x: ["0%", "-60%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          width: `${skills.length * 16}rem`,
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="w-64 sm:w-1/3 lg:w-1/4 p-4 cursor-pointer "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="shadow-md  transition-all ease-in-out duration-300 hover:shadow-xl shadow-blue-gray-300 transform hover:scale-105 bg-[#151c29]">
              <CardBody className="flex flex-col h-56 items-center text-center p-6">
                <div className="mb-4">
                  <img
                    src={skill.icon}
                    alt={skill.title}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h5 className="text-xl font-semibold mb-2 text-white">
                  {skill.title}
                </h5>
                <p className="text-white">{skill.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
