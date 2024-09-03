import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Journal from "./components/Journal";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in",
      once: false,
      mirror: false,
    });
  });

  return (
    <div className="overflow-x-hidden bg-brandDark text-white">
      <Navbar />
      <Hero />
      <Explore />
      <Journal />
      <Footer />
    </div>
  );
};

export default App;
