import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";

const Main = () => {
  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-screen-2xl mx-auto">
          <Navbar />
        </div>
      </header>
      <main className="pt-16">
        {" "}
        {/* Add padding-top to account for fixed navbar */}
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
      <ToastContainer />
    </div>
  );
};
export default Main;
