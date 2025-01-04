import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
const Main = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </>
  );
};

export default Main;
