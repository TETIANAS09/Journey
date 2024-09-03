import React from "react";
import Img1 from "../assets/explore1.webp";
import Img2 from "../assets/explore2.webp";
import Img3 from "../assets/explore3.webp";

const ExploreCard = [
  {
    id: 1,
    title: " Mountainscape",
    place: "Taiwan",
    img: Img1,
  },
  {
    id: 2,
    title: "Nature's Sculptures",
    place: "Arizona",
    img: Img2,
  },
  {
    id: 3,
    title: "Tropical Paradise",
    place: "The Bahamas",
    img: Img3,
  },
];

const Explore = () => {
  return (
    <>
      <span id="explore"></span>
      <section className="container md:mt-20 ">
        {/* text section */}
        <div
          data-aos="fade-down"
          className="text-center md:max-w-[650px] mx-auto space-y-4 pt-3 md:pt-6"
        >
          <h2 className="text-3xl font-merriweather">Explore the World</h2>
          <p>
            The world awaits. Explore diverse destinations, immerse yourself in
            local traditions, and create memories that last a lifetime
          </p>
        </div>

        {/* img section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mt-10 md:mt-20">
          {ExploreCard.map((data, index) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative"
            >
              <img
                src={data.img}
                alt="natura"
                className="w-[380px] h-[550px] object-cover"
              />
              <div className="absolute w-full bottom-0 inset-0 bg-brandDark/30">
                <div className=" h-full space-y-1 py-6 flex flex-col justify-end items-center text-center">
                  <h3 className="text-2xl font-semibold">{data.title}</h3>
                  <p className="uppercase">{data.place}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* button */}
        <button
          data-aos="fade-right"
          className="block mx-auto  mt-10 text-brandBlue uppercase font-bold  transition-200  hover:text-white  active:text-white"
        >
          see more
        </button>
      </section>
    </>
  );
};

export default Explore;
