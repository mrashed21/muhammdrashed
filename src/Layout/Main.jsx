import Footer from "../Shared/Navbar/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Hero from "./Hero/Hero";

const Main = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Main;
