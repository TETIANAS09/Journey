import React from "react";
import Bgr from "../assets/hero.jpg";
import { FaPlay } from "react-icons/fa6";

const bgr = {
  backgroundImage: `url(${Bgr})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
};

const Hero = () => {
  return (
    <>
      <section
        style={bgr}
        className="min-h-[500px] flex justify-center items-center relative"
      >
        {/* gradient section */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30  to-black z-10"></div>
        {/* text section */}
        <div className="container relative z-20 text-center space-y-8">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="text-5xl md:text-7xl font-bold font-merriweather "
          >
            Open the World
          </h1>
          <p
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="mb-8"
          >
            Look at the beauty with your own eyes
          </p>
          <div
            data-aos="fade-up"
            className="inline-flex justify-center items-center"
          >
            <a
              href="https://www.youtube.com/results?search_query=travel"
              target="blank"
            >
              <FaPlay
                size={40}
                className="transition ease-in-out delay-150 text-white hover:text-lime-900 hover:-translate-y-1 duration-300hover:scale-110 active:text-lime-900"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
