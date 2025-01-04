import About from "../../Components/About/About";
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
      </main>
    </>
  );
};

export default Home;
