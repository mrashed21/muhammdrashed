import { Typography } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import aboutMe from "/about.svg";
const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-[url('dxh2.jpg')] text-white bg-cover bg-center">
      <div className="w-11/12 mx-auto ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            About Me
          </h2>
          <p
            className="text-lg text-white"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hello! I'm Muhammad Rashed, a passionate Front-End Developer with
            expertise in React and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div data-aos="fade-right">
            <img
              src={aboutMe}
              alt="Muhammad Rashed"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div data-aos="fade-left">
            <Typography variant="parahraps" className="text-justify">
              I specialize in building responsive, user-friendly web interfaces
              that deliver exceptional user experiences. As a Front-End
              Developer, I have expertise in HTML, CSS, JavaScript, and React,
              along with experience in Firebase Authentication and Git and also
              Familiar to Node.js, Express.js, MongoDB and Next.js. I am
              passionate about crafting modern, scalable, and secure web
              solutions with a strong focus on usability and innovation. Beyond
              coding, I love reading books and exploring new places through
              travel, which inspires my creativity and fuels my passion for
              continuous learning. With a keen eye for detail, I thrive on
              transforming ideas into impactful digital experiences. Let's
              connect and collaborate to create something extraordinary! With a
              keen eye for detail, I thrive on transforming ideas into impactful
              digital experiences. Let's connect and collaborate to create
              something extraordinary!
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
