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
    <nav className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md">
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
