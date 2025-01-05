// Footer.jsx
import { Typography } from "@material-tailwind/react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#151C29] text-white py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center mb-4 space-x-6">
          <Link
            to="https://www.facebook.com/mrasheed21"
            target="_blank"
            className="text-2xl text-white hover:text-blue-600 transition-transform duration-300 hover:scale-150"
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://github.com/mrashed21"
            target="_blank"
            className="text-2xl text-white hover:text-yellow-400 transition-transform duration-300 hover:scale-150"
          >
            <FaGithub />
          </Link>
          <Link
            to="https://www.linkedin.com/in/mrashed21"
            target="_blank"
            className="text-2xl text-white hover:text-blue-500 transition-transform duration-300 hover:scale-150"
          >
            <FaLinkedinIn />
          </Link>
        </div>

        {/* Footer Text */}
        <Typography variant="body2" className="text-white">
          &copy; {currentYear} Muhammad Rashed. All Rights Reserved.
        </Typography>

        {/* Additional Links */}
        <div className="mt-4">
          <Link className="text-white hover:text-blue-500 mr-4">
            Privacy Policy
          </Link>
          <Link className="text-white hover:text-blue-500">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
