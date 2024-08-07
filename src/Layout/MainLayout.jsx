import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import "../index.css";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
const MainLayout = () => {
  const [showButton, setShowButton] = useState(false);
  const route = useLocation();
  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* <Nav/> */}
      <Navbar />
      <div className="px-5 md:px-10">
        <Outlet />
      </div>

      <div className="px-[2%] pt-28 md:px-[6%] bg-third mt-20">
        <Footer />
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
};

export default MainLayout;
