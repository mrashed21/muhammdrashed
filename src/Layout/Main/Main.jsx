import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";

const Main = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />

        <Skills />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
