import { Button, Typography } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import image from "/rashed.png";

const Hero = () => {
  // Initialize Aos
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[url('/bg-hero.jpg')] bg-cover bg-center relative overflow-hidden">
      <div className=" text-white  flex flex-col lg:flex-row items-center justify-between gap-32 w-11/12 mx-auto lg:mt-40  lg:mb-16 ">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="font-poppins order-2 lg:order-1 -mt-16 lg:mt-0 text-center lg:text-left"
        >
          {/* Added colorful text animation */}
          <Typography variant="h2" className="text-yellow-400">
            I'm
          </Typography>
          <Typography className="text-gradient bg-gradient-to-r text-3xl lg:text-5xl font-bold from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-roboto min-h-[40px]">
            <Typewriter
              options={{
                strings: ["Muhammad Rashed"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Typography
            variant="h3"
            className="text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-inter"
          >
            <Typewriter
              options={{
                strings: ["MERN Developer", "Front-End Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Typography variant="h6" className="text-gray-300">
            I am Muhammad Rashed, from Bangladesh. I am a MERN-focused Front-End
            Web Developer.
          </Typography>
          <div className="mt-5">
            <Link to={"/Muhammad Rashed.pdf"} target="_blank">
              <Button color="white">Resume</Button>
            </Link>
          </div>
          {/* Social link */}

          <div className="flex gap-4 mt-6 justify-center lg:justify-start mb-20 lg:mb-0">
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
            <Link
              to="https://www.facebook.com/mrasheed21"
              target="_blank"
              className="text-2xl text-white hover:text-blue-600 transition-transform duration-300 hover:scale-150"
            >
              <FaFacebook />
            </Link>
            <Link
              to="https://www.instagram.com/mrashed21"
              target="_blank"
              className="text-2xl text-white hover:text-pink-500 transition-transform duration-300 hover:scale-150"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://twitter.com/mrashed_21"
              target="_blank"
              className="text-2xl text-white hover:text-sky-500 transition-transform duration-300 hover:scale-150"
            >
              <FaXTwitter />
            </Link>
            <Link
              to="https://wa.me/+8801781131905"
              target="_blank"
              className="text-2xl text-white hover:text-green-500 transition-transform duration-300 hover:scale-150"
            >
              <FaWhatsapp />
            </Link>
            <Link
              to="https://t.me/mrashed21"
              target="_blank"
              className="text-2xl text-white hover:text-blue-400 transition-transform duration-300 hover:scale-150"
            >
              <FaTelegram />
            </Link>
            <Link
              to="mailto:rashedjaman768@gmail.com"
              target="_blank"
              className="text-2xl text-white hover:text-red-500 transition-transform duration-300 hover:scale-150"
            >
              <MdEmail />
            </Link>
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className=" justify-end order-1 lg:order-2 mt-36 lg:mt-0"
        >
          <div className="relative w-80 h-80 lg:w-[410px] lg:h-[410px] flex items-center justify-center rounded-full p-[5px]">
            {/* Outer Animated Gradient Border with Blur Effect */}
            <div
              className="absolute inset-0 rounded-full border-[10px] border-transparent bg-gradient-to-r
                  from-cyan-500 via-blue-500 to-purple-500  animate-spin-slow blur-[3px]"
            ></div>

            {/* Inner Solid Border to Separate Image */}
            <div className="absolute inset-2 rounded-full bg-black"></div>

            {/* Profile Image */}
            <div className="relative w-[300px] h-[300px] lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden flex items-center justify-center">
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover  rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
