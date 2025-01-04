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
    <section
      id="about"
      className="py-16 bg-[url('dxh2.jpg')] text-gray-800 bg-cover"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" data-aos="fade-up">
            About Me
          </h2>
          <p
            className="text-lg text-gray-600"
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
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 mb-4">
              I specialize in creating responsive and dynamic web applications
              that deliver exceptional user experiences. My journey began with a
              deep curiosity about web technologies, leading me to complete
              multiple real-world projects.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-4">
              <li>Dragoon News - A real-time news platform.</li>
              <li>Hanafi Fiqh - A Q&A platform with role-based permissions.</li>
              <li>
                Service Review System - Focused on reviews and user-specific
                data.
              </li>
              <li>
                E-Commerce Platform - Built with React, Material Tailwind, and
                MongoDB.
              </li>
            </ul>
            <p className="text-gray-600">
              I'm always eager to learn new technologies and build products that
              exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
