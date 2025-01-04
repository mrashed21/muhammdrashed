// // Services.jsx
// import { Card, Typography } from "@material-tailwind/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import React, { useEffect } from "react";
// import {
//   FaCode,
//   FaDatabase,
//   FaLaptopCode,
//   FaPalette,
//   FaServer,
//   FaShoppingCart,
// } from "react-icons/fa";

// const services = [
//   {
//     icon: <FaCode size={40} className="text-blue-500" />,
//     title: "Front-End Development",
//     description:
//       "Responsive and interactive websites using React, Material Tailwind, and modern UI/UX techniques.",
//   },
//   {
//     icon: <FaServer size={40} className="text-green-500" />,
//     title: "Back-End Development",
//     description:
//       "Server-side development with Node.js, Express.js, and MongoDB to build dynamic and scalable applications.",
//   },
//   {
//     icon: <FaPalette size={40} className="text-purple-500" />,
//     title: "UI/UX Design",
//     description:
//       "Crafting user-friendly and visually appealing interfaces using Figma and Tailwind CSS.",
//   },
//   {
//     icon: <FaDatabase size={40} className="text-red-500" />,
//     title: "Database Management",
//     description:
//       "Efficient data storage and management solutions with MongoDB, Firebase, and SQL databases.",
//   },
//   {
//     icon: <FaShoppingCart size={40} className="text-yellow-500" />,
//     title: "E-Commerce Solutions",
//     description:
//       "Building online stores with cart functionality, payment integration, and admin dashboards.",
//   },
//   {
//     icon: <FaLaptopCode size={40} className="text-teal-500" />,
//     title: "Website Optimization",
//     description:
//       "Enhancing performance, SEO, and user experience for better conversions and faster loading speeds.",
//   },
// ];

// const Services = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out" });
//   }, []);

//   return (
//     <section id="services" className="py-12 bg-gray-100">
//       <div className="container mx-auto px-6 text-center">
//         <Typography variant="h3" className="mb-8 font-bold">
//           My Services
//         </Typography>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <Card
//               key={index}
//               data-aos="fade-up"
//               className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-white"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <div className="mb-4">{service.icon}</div>
//                 <Typography variant="h5" className="font-semibold mb-3">
//                   {service.title}
//                 </Typography>
//                 <Typography className="text-gray-600">
//                   {service.description}
//                 </Typography>
//               </div>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

// Services.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Card, Typography } from '@material-tailwind/react';
import { FaCode, FaLaptopCode, FaPalette, FaServer, FaShoppingCart, FaBug } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode size={40} className="text-blue-500" />,
    title: 'Front-End Development',
    description:
      'Responsive and interactive websites using React, Material Tailwind, and modern UI/UX techniques.',
  },
  {
    icon: <FaServer size={40} className="text-green-500" />,
    title: 'Back-End Development',
    description:
      'Server-side development with Node.js, Express.js, and MongoDB to build dynamic and scalable applications.',
  },
  {
    icon: <FaPalette size={40} className="text-purple-500" />,
    title: 'UI/UX Design',
    description:
      'Crafting user-friendly and visually appealing interfaces using Figma and Tailwind CSS.',
  },
  {
    icon: <FaBug size={40} className="text-red-500" />,
    title: 'Bug Fixing',
    description:
      'Identifying and resolving issues in existing code to improve performance and functionality.',
  },
  {
    icon: <FaShoppingCart size={40} className="text-yellow-500" />,
    title: 'E-Commerce Solutions',
    description:
      'Building online stores with cart functionality, payment integration, and admin dashboards.',
  },
  {
    icon: <FaLaptopCode size={40} className="text-teal-500" />,
    title: 'Website Optimization',
    description:
      'Enhancing performance, SEO, and user experience for better conversions and faster loading speeds.',
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out' });
  }, []);

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <Typography variant="h3" className="mb-8 font-bold">
          My Services
        </Typography>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              data-aos="fade-up"
              className="p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg bg-white"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <Typography variant="h5" className="font-semibold mb-3">
                  {service.title}
                </Typography>
                <Typography className="text-gray-600">
                  {service.description}
                </Typography>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
