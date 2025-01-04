// Footer.jsx
import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Social Media Links */}
        <div className="flex justify-center mb-4 space-x-6">
          <a
            href="https://www.facebook.com/" // Replace with your Facebook profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://github.com/" // Replace with your GitHub profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/" // Replace with your LinkedIn profile
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>

        {/* Footer Text */}
        <Typography variant="body2" className="text-gray-400">
          &copy; {currentYear} Muhammad Rashed. All Rights Reserved.
        </Typography>

        {/* Additional Links */}
        <div className="mt-4">
          <a href="#privacy" className="text-gray-400 hover:text-white mr-4">
            Privacy Policy
          </a>
          <a href="#terms" className="text-gray-400 hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
