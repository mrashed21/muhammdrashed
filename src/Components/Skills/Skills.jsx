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

import { Card, CardBody } from "@material-tailwind/react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      description: "Markup language for creating web pages.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    {
      title: "CSS",
      description: "Style sheets language used for web design.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3BJAOSb49jW8XDAHOEKPXAx6QtWn23K2mW_wC07x2NxrU_OQu56hXNwmMM-NuMaZuLEY&usqp=CAU",
    },
    {
      title: "JavaScript",
      description: "Programming language for dynamic content.",
      icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAApVBMVEX////Ttir71yXt8PDZuynxzibTtSbs7ujUuDLu5LnPrQDOsir71ADu8vbv5b7UuDX+++384nrStBz//fbg1aD71hjVu0PWvEr++eXm4sjn5M7YwFr96JfWvlHQsQD83VX96p/72Tn73l3179f720XgzHrhwijy6sr85ov85IP+9M798L397rP74nPdx2rf0ZXk0o3832jj2Kzp6drkyD3iyE/r25v9wXGFAAAJ9klEQVR4nO2dW3eiPBhG0Y5UqYoNonQUPFKtB1Ts1///074ERkgAMYE3atfiuZiLWVXcBsjmzUFFqVKlSpUqVapUqVKlSpUqvyALvyUzXd60FgAwfdSUGZ03qA8B46hPEQcCpuXUniJOCwJGfTRGGBUCptt8Chq12QWAWQ2fAgYNVgAwixF6NAgJsiFuzZb3HDCeBQDTc58Dxu0BwBjPAeO4BgTM8Sk6GucIAaMcAFrmrWAomB8IFixnpVn+NOrF8hm9BTrAwJTvZwBgVAg1wz5TK01THkatQdgM9pnB42D+RDA6hM2A+ExRmEYMM4SwGewzduk7QGGY6B1gbAb7THk5A4AZQdgM9pnyclYYJupokAdhMyA+AwADYjM4zwEDw6IcnwHmCAXzsFvzJzxMXy1LUxgmfgsYNVMUX38UTNxnNn0gmPI+Ux4GyGawzzwMJrpkVJDaDMlCUM5URCcNY3IkBQNjM1gBBOXMHtFBEYyZ+uZnJMsgk+CfIHOcGQuDhjACgBVASM7w6f1K5axdYNrrnpWTHh1jbbIwIyABUBRBmI/OS5TOawwzFjjkul1n+swRFIsiZJoszEtBmK8EjAcG44rcAEBgjHcCEwuACqVmgnJ2HWbNf8TenoUBsxnsMwIsMDDWidwAqNoMlM0oSktkiAYGZm7SAlCrQdkM9hkRObsO88V/xM2EwMTvCTLSFGYhBDOAgFmajAA0oWwGNzoMzDv/EbezBAxMOYPEuD9MnYXRwQRAUURMEwRmV2f6THUAx6LYIDB7ARhWANQhIIx3b5hpQgDgbEas2PT0MCKDZ9dhTuybBte0kZ1xmxEAQJsRGzzjhDG2UzpjNhPWZkBmNF3SgofBKpkTkyln1BDMSFOYBQSMOWdgAsnPTXzXQXACgGEERs+vt4woTPyeDlQ5g8SAgBFumXjg3IEqZwQRgEEyYCBZFIFO8ypMfSIG05AFI1DTlACj6qAwAsUmGTA2KIzLf9GAwVB9JqTNKMrPQ2EcSJsRmg98HWZZGAbSZhRlpQHAzMRg4nuOA1fOIFk8ACZWMw1SAPCh+WGuGoAoTPyWGlw5I8gDWoaCASxniMGow78gMPG8mZoGy6Lwd5oSYGBtBvsMNw08DLDNiIw3wcMADpuF4Z/cXArGNM3LQzNlM3AjTWH4faYITMiAIZbz0/t6vGfLGcA2I+Iz12HqKZiQoW3Olqf38XS3224WVs8I65lxnwlsM4rS5b4388LsCcT8fT3FCCHDJcaahdEgazMk/D7DCWNsSDNghnSHGI7OUjCQtRkSfp/hhMk71okdA4S2GcW4JwypZzYoGGCbUQzufgbZpWFmLIwDDsOtAKh0y1jkLGtEjzNqDZhFQAEAYNqsAMCWM0i4SxrwMLDlDBJun8mB4Tz3NywMuACQ9dp3g9myI01AC7TotHjvzeVhdiyMBm0zAvWZ8jDTBAxsbYaE22fKw3xJthkBn8mB4RtlSakZbKEpgAHoZzhhEtOzYEeaQhidk+a6zpicMAmbUeFhuOcD57hZ1qcyjJ612G7o/wlsJoJBAwkwvD7D3zJGb7HZTtenWZuZI2S0WRi4Kc3xIXhnnXLBEIzdeD+pk4dmk51Y20vAQC3QomF4Sxo3YAxrs5uO3+czM+QIwsAEavYZSTPQcnM2fc57c841s8Un1ft8WTdjjH8wU+pAm6TNSIDh9ZkcmOUMc5jp9Q0sTFLNoMsZJLw+kwOTxRHC7KgDJdQMeKQpDO+UkxyYq2FgkmoGbzOpyUBXF9UVgtlSB0rYDOi8mQiGUQBV12sqygIqDcPajFqTAWMx65sc/+x79kBFKaDSMEvGZpAuA4Zdr+30O53O68fBHTUTPIVgaJ2pszA2dAkwgHETMPiTdjovf/2DN0RODIRGJWESAgC03JwNu/9MCBPyvH74R6/pOKgQDO5B6xP62w9g4u8GZCegFMxPJkzA03k9f/juIOARgsEky6/dxqI6+V6im5FhM4n6DA1zaaDzx2HkaM71h7MUiHmabqzEN2/dwWYS401JmAAIf/Rz1/V4YLBlztYbelTmkqSawddmSLq3YCIkOhkwxJdPO+vKN34PNcNylr6bcSQJQ66Sad7d9h5qhmHolWeFYHAHsvza3jhMYua8KkPNyHptVA5mtt9xdIBEzajNc3RJMKNyMJyLTucMDBrKsJmEz8iDSajZSBKMWxKGb51mnRUAKTaT8JkiMHxLGxMjTVJsRmGnnNwLRpLNsD6j2v0zdjIhGK7VgAa7dE7CSFMYn6kCqOrguHq9CSQIY+xMFkaOzaT3B1aR4wwPf/N5BBbQGZv1rB3MdaIEAG6FNptuxuaACGuy559fUk4mBmMYi+nkMtOMEQA5anZ9/xmkOfbh4/z6ktVG11cDRiDWYrevRyAMDORyczY5++nhBmq6PgZK8eTDGNZmu16224lZgTEM2OY5KZjcIRp8BSH7iIFeOtnPM+yaMxwMMj6ZTJOEocsZcgSAZz89hBzdO/gfVANRy7ToVRq9zW68X2aAJGAk2QznZse4gVTbPfqXXihryclit94v65kl9Pp9bIZ/c0CyV5Nuu4ePoNSRgOltyRiTmd0kF5i4qWXZjMh8YAJU04de//xCw2zGczKskQfCwkizGSxnYhtQkdqtGtzO/z1pznJGNRiYWADgJwFdUmB/4HCwQHB/M2pbI7j9ZpLxi+4PLAhDbQQgS82wnBXdHLAojAq4eU4yhffTE4WJGkaXpWbEZ+4NI81mSuwPLAgTF5qk2Qzu8O4DQwkA0MbGWeGeP1MSJnodGkkTgOL7AxeG8aQJwN1g4Dc2zkrR/YEFYBrU5rlyYX7kwmAQ+hcngDfPScYv+JNHHDCN5XfzLfVCWVUzEqH99PhhGo3vb/0tjaLW5KlZcZ+5DjObNT5xk6RBAhiJNoN9BhLGxCSf39/NjLPrAiPRZrDPDIr9sE4WzOzz80+zmfsyR8q8mUuM/sjRCvQ1idHm+mxJWiT3JSrSkOtL7DPJ7F3L95DmCJ5tMYxpEpA/tXwSpGk1d5Wc7iAHaHXUNUekgSKY5eRbb94icbRh38pYvyktvb6taZmT567BmObk+z/9xh/ik8vxunfkiNJ19aAAwwMzm/w3fMstIQS/Mzk4yrzkb2Tx4w2a6k0gdTB4y/sbFX8p+tD173CR5KfXPY6ypjdyB7+2aXvH1SNOrowYq7470gvxIAfp3tF/4MmVlUX359/sOYEmcZDt9rvyHo1LpLfCZxw9XTOXxHFU76e7eJKTKyuGtep75HPeOrmcgdtaZUyde7b0rG5up4o7Rftn8QtA/sUwrOxOVQ0Gp38PSBSj6zmMxWESbFy/D+SSxWGASJ+Ke0UV2f2Hd4pl02t5Qx137w8xLgkxVk/WKVapUqVKlSpVqlSpUqVKFXn5H7CbQKQv3NcqAAAAAElFTkSuQmCC",
    },
    {
      title: "Figma",
      description: "Design tool for user interface design.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMegAHSUrcEB03rJoc_TGRuIbNnbfSykfwkfTfaeDEnzMxov4lPL6OI0fgI76d8-yQ51w&usqp=CAU",
    },
    {
      title: "Git",
      description: "Version control system for tracking code changes.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    },
    {
      title: "GitHub",
      description: "Platform for hosting Git repositories.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
      title: "React",
      description: "Library for building user interfaces.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI design.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStVklzfGsO-6hPFSuutVa0ingPtO5KZgg2vA-irnqZosRmpp4HHc12Ir-taFq3oO4ujPo&usqp=CAU",
    },
    {
      title: "Material Tailwind",
      description: "Material design components for Tailwind CSS.",
      icon: "https://www.material-tailwind.com/image/logo-mt.png",
    },
    {
      title: "Firebase",
      description: "Backend as a service platform for building apps.",
      icon: "data:image/png;base64,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",
    },
    {
      title: "Node.js",
      description: "JavaScript runtime environment for backend development.",
      icon: "data:image/png;base64,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",
    },
    {
      title: "Express.js",
      description: "Web framework for Node.js to build web applications.",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3uk7c63tuEb1gZ401_RME7q4BF0NGbcBsw&s",
    },
    {
      title: "MongoDB",
      description: "NoSQL database for scalable applications.",
      icon: "data:image/png;base64,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",
    },
    {
      title: "JWT",
      description: "JSON Web Token for secure authentication.",
      icon: "https://upload.wikimedia.org/wikipedia/commons/0/09/JSON_web_token_logo.svg",
    },
  ];

  return (
    <div className="py-12 overflow-hidden bg-[url('hx2.jpg')] bg-cover bg-center ">
      <motion.div
        className="flex space-x-4 "
        animate={{ x: ["0%", "-60%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // Slower animation duration for the scroll
            ease: "linear",
          },
        }}
        style={{
          display: "flex",
          width: `${skills.length * 16}rem`, // Dynamically sets the width to accommodate all skill cards
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
