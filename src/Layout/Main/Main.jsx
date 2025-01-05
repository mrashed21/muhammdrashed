// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import Footer from "../../Shared/Footer/Footer";
// import Navbar from "../../Shared/Navbar/Navbar";
// const LoadingSpinner = () => {
//   const dots = [...Array(8)];
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="relative flex items-center justify-center w-16 h-16">
//         {dots.map((_, index) => {
//           const angle = (360 / dots.length) * index;
//           return (
//             <motion.span
//               key={index}
//               initial={{ opacity: 0.3 }}
//               animate={{
//                 opacity: [0.3, 1, 0.3],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 1,
//                 delay: index * 0.1,
//               }}
//               style={{
//                 position: "absolute",
//                 width: "8px",
//                 height: "25px",
//                 backgroundColor: "#3B82F6",
//                 borderRadius: "4px",
//                 transform: `rotate(${angle}deg) translate(0, -28px)`,
//               }}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// const Main = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Show loading spinner for 2 seconds
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {loading && <LoadingSpinner />}
//       <header>
//         <Navbar />
//       </header>
//       <main>
//         <Outlet />
//       </main>
//       <footer>
//         <Footer />
//       </footer>
//       <ToastContainer />
//     </>
//   );
// };

// export default Main;

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import ScrollToTop from "./ScrollToTop";
const Main = () => {
  return (
    <>
    <ScrollToTop/>
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
