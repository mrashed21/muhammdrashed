import About from "../../Components/About/About";
import ContactMe from "../../Components/Contact/ContactMe";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/Skills/Skills";

const Home = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactMe/>
      </main>
    </>
  );
};

export default Home;
