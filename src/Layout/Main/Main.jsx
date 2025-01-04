import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import About from "../About/About";
import Hero from "../Hero/Hero";

const Main = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
