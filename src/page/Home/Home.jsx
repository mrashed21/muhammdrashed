import About from "../../Components/About/About";
import ContactMe from "../../Components/Contact/ContactMe";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Services from "../../Components/Service/Service";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <>
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="service">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </main>
    </>
  );
};

export default Home;
