import { Button, Typography } from "@material-tailwind/react";
// import { Link } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", to: "home" },
    { id: 2, name: "About", to: "about" },
    { id: 3, name: "Skills", to: "skills" },
    { id: 4, name: "Projects", to: "projects" },
    // {id: 3, name: "Contact", path: "/contact"},
    // Add more navigation items as needed...
  ];
  return (
    <>
      <nav className="fixed z-10 w-full ">
        <div className="flex items-center justify-between w-11/12 mx-auto py-2 text-white">
          {/* navbar start */}
          <div className="">
            <Typography>Muhammad Rashed</Typography>
          </div>
          {/* navbar center */}

          <ul className="flex">
            <li className="space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-blue-500 font-bold"
                  className="text-gray-500"
                >
                  {item.name}
                </Link>
              ))}
            </li>
          </ul>

          {/* navbar end */}
          <div className="">
            <Button>Contact me</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
