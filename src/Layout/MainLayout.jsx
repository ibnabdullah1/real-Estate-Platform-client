import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import BackToTopButton from "../components/BackToTopButton";
import "../index.css";
import Footer from "../Pages/Home/Footer/Footer";
import Navbar from "../Pages/Home/Navbar/Navbar";
const MainLayout = () => {
  const [showButton, setShowButton] = useState(false);
  const route = useLocation();
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldScroll = scrollTop > 0;

      setScrolling(shouldScroll);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);
  const navbarClasses = `sticky top-0 z-20 ${
    scrolling ? "lg:bg-opacity-80  lg:backdrop-blur-lg" : "bg-opacity-[100%]"
  } bg-white text-[#1c4456]`;
  return (
    <div className="font-questrial">
      <div className={navbarClasses}>
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto px-5 md:px-10">
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
