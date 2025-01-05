// import { Typography } from "@material-tailwind/react";
// // import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const navItems = [
//     { id: 1, name: "Home", to: "home" },
//     { id: 2, name: "About", to: "about" },
//     { id: 3, name: "Skills", to: "skills" },
//     { id: 4, name: "Service", to: "service" },
//     { id: 5, name: "Projects", to: "projects" },
//     { id: 6, name: "Contact", path: "/contact" },
//     // Add more navigation items as needed...
//   ];
//   return (
//     <>
//       <nav className="fixed z-10 w-full ">
//         <div className="flex items-center justify-between w-11/12 mx-auto py-2 text-white">
//           {/* navbar start */}
//           <div className="">
//             <Typography>Muhammad Rashed</Typography>
//           </div>
//           {/* navbar center */}

//           <ul className="flex">
//             <li className="space-x-6">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.to}
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   activeClass="text-blue-500 font-bold"
//                   className="text-gray-500"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import { Typography } from "@material-tailwind/react";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { id: 1, name: "Home", to: "home" },
//     { id: 2, name: "About", to: "about" },
//     { id: 3, name: "Skills", to: "skills" },
//     { id: 4, name: "Service", to: "service" },
//     { id: 5, name: "Projects", to: "projects" },
//     { id: 6, name: "Contact", path: "/contact" }, // External route
//   ];

//   return (
//     <>
//       <nav className="fixed z-10 w-full bg-white shadow-md">
//         <div className="flex items-center justify-between w-11/12 mx-auto py-4 text-black">
//           {/* Logo */}
//           <Typography className="font-bold text-xl">Muhammad Rashed</Typography>

//           {/* Mobile Menu Icon */}
//           <div className="lg:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>

//           {/* Navbar Items */}
//           <ul
//             className={`lg:flex lg:space-x-6 ${
//               isOpen ? "block" : "hidden"
//             } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md lg:flex-row flex flex-col p-4 lg:p-0`}
//           >
//             {navItems.map((item) =>
//               item.path ? (
//                 // Use React Router Link for external routes
//                 <li key={item.id} className="py-2 lg:py-0">
//                   <RouterLink
//                     to={item.path}
//                     className="text-gray-600 hover:text-blue-500 font-medium"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </RouterLink>
//                 </li>
//               ) : (
//                 // Use react-scroll for smooth scrolling within the page
//                 <li key={item.id} className="py-2 lg:py-0">
//                   <Link
//                     to={item.to}
//                     smooth={true}
//                     duration={500}
//                     spy={true}
//                     activeClass="text-blue-500 font-bold"
//                     className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Link } from "react-scroll";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import { Typography } from "@material-tailwind/react";
// import { FiMenu, FiX } from "react-icons/fi";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation(); // React Router hook for current path

//   const navItems = [
//     { id: 1, name: "Home", to: "home" },
//     { id: 2, name: "About", to: "about" },
//     { id: 3, name: "Skills", to: "skills" },
//     { id: 4, name: "Service", to: "service" },
//     { id: 5, name: "Projects", to: "projects" },
//     { id: 6, name: "Contact", path: "/contact" }, // External route
//   ];

//   return (
//     <>
//       <nav className="fixed z-10 w-full bg-white shadow-md">
//         <div className="flex items-center justify-between w-11/12 mx-auto py-4 text-black">
//           {/* Logo */}
//           <Typography className="font-bold text-xl">Muhammad Rashed</Typography>

//           {/* Mobile Menu Icon */}
//           <div className="lg:hidden">
//             <button onClick={() => setIsOpen(!isOpen)}>
//               {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//             </button>
//           </div>

//           {/* Navbar Items */}
//           <ul
//             className={`lg:flex lg:space-x-6 ${
//               isOpen ? "block" : "hidden"
//             } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md lg:flex-row flex flex-col p-4 lg:p-0`}
//           >
//             {navItems.map((item) =>
//               item.path ? (
//                 // Use React Router Link for external routes
//                 <li key={item.id} className="py-2 lg:py-0">
//                   <RouterLink
//                     to={item.path}
//                     className={`font-medium hover:text-blue-500 ${
//                       location.pathname === item.path ? "text-red-500" : "text-gray-600"
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </RouterLink>
//                 </li>
//               ) : (
//                 // Use react-scroll for smooth scrolling within the page
//                 <li key={item.id} className="py-2 lg:py-0">
//                   <Link
//                     to={item.to}
//                     smooth={true}
//                     duration={500}
//                     spy={true}
//                     activeClass="text-red-500 font-bold" // Adds red text color for active link
//                     className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// import { Typography } from "@material-tailwind/react";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { Link as RouterLink, useLocation } from "react-router-dom";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false); // Menu toggle state
//   const location = useLocation(); // React Router hook to check the current route

//   const navItems = [
//     { id: 1, name: "Home", to: "home" },
//     { id: 2, name: "About", to: "about" },
//     { id: 3, name: "Skills", to: "skills" },
//     { id: 4, name: "Service", to: "service" },
//     { id: 5, name: "Projects", to: "projects" },
//     { id: 6, name: "Contact", to: "contact" }, // External route using React Router
//   ];

//   return (
//     <nav className="fixed z-10 w-full bg-white shadow-md">
//       <div className="flex items-center justify-between w-11/12 mx-auto py-4 text-black">
//         {/* Logo */}
//         <Typography className="font-bold text-xl">Muhammad Rashed</Typography>

//         {/* Hamburger Icon for Mobile */}
//         <div className="lg:hidden">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>

//         {/* Navigation Links */}
//         <ul
//           className={`lg:flex lg:space-x-6 ${
//             isOpen ? "block" : "hidden"
//           } absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:shadow-none shadow-md lg:flex-row flex flex-col p-4 lg:p-0`}
//         >
//           {navItems.map((item) =>
//             item.path ? (
//               // React Router Link for External Routes
//               <li key={item.id} className="py-2 lg:py-0">
//                 <RouterLink
//                   to={item.path}
//                   className={`font-medium hover:text-blue-500 ${
//                     location.pathname === item.path
//                       ? "text-red-500"
//                       : "text-gray-600"
//                   }`}
//                   onClick={() => setIsOpen(false)} // Close menu on click
//                 >
//                   {item.name}
//                 </RouterLink>
//               </li>
//             ) : (
//               // React Scroll Link for Internal Navigation
//               <li key={item.id} className="py-2 lg:py-0">
//                 <Link
//                   to={item.to}
//                   smooth={true}
//                   duration={500}
//                   spy={true}
//                   activeClass="text-red-500 font-bold" // Highlight active section
//                   className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer"
//                   onClick={() => setIsOpen(false)} // Close menu on click
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             )
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detect current route

  const navItems = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Skills", to: "skills" },
    { id: 4, name: "Service", to: "service" },
    { id: 5, name: "Projects", to: "projects" },
    { id: 6, name: "Contact", to: "contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <nav className="fixed z-10 w-full bg-[#ffffff26] border-b-2 shadow-md">
      <div className="flex items-center justify-between w-11/12 mx-auto py-4 text-white">
        {/* Logo */}
        <Typography className="font-bold text-xl">Muhammad Rashed</Typography>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`fixed top-16 right-0 w-64 h-full bg-[#ffffff26] border-2 lg:border-none rounded-l-lg lg:rounded-none shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } lg:static lg:w-auto lg:h-auto lg:bg-transparent lg:shadow-none lg:translate-x-0`}
        >
          <ul className="flex flex-col text-center mt-20 lg:mt-0 lg:flex-row lg:space-x-6">
            {navItems.map((item) => (
              <li key={item.id} className="py-2 lg:py-0">
                {isHomePage && item.to ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    activeClass="!text-red-500 !font-bold"
                    className="text-gray-100 hover:text-blue-500 font-medium cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={item.path || "/"}
                    className={`text-gray-100 hover:text-blue-500 font-medium ${
                      location.pathname === item.path ? "text-red-500" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </RouterLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
