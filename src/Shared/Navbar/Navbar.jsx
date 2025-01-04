import { Button, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Home", path: "#" },
    { id: 2, name: "About", path: "#about" },
    { id: 3, name: "Skills", path: "/skills" },
    { id: 4, name: "Projects", path: "/projects" },
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
                <NavLink
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : "text-gray-500"
                  }
                >
                  {item.name}
                </NavLink>
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
