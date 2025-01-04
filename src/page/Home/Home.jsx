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
        <section>
        <Hero />
        </section>
        <section id="about"><About /></section>
        <Skills />
        <Services />
        <Projects />
        <ContactMe />
      </main>
    </>
  );
};

export default Home;
