import React from "react";
import Img from "../assets/Oasis.webp";
import Img2 from "../assets/Bagan.webp";

const Card = [
  {
    id: 1,
    date: "April 15 , 2024",
    title: "Desert Oasis",
    about:
      "Experience the magic of the Sahara Desert. Discover hidden oases, explore ancient dunes, and immerse yourself in the tranquility of nature.",
    img: Img,
    delay: 0.2,
  },
  {
    id: 2,
    date: "June 5 , 2024",
    title: " Bagan at Dawn",
    about:
      "Explore ancient pagodas, discover hidden treasures, and experience the magic of sunrise over this UNESCO World Heritage Site.",
    img: Img2,
    delay: 0.4,
  },
];

const Journal = () => {
  return (
    <>
      <span id="journal"></span>
      <section className="container mt-20 md:mt-30 md:mb-20">
        <div
          data-aos="fade-down"
          className="text-center md:max-w-[650px] mx-auto space-y-4 pt-3 md:pt-6"
        >
          <h2 className="text-3xl font-merriweather">Our Journal</h2>
          <p>
            We're a passionate team of travelers dedicated to sharing our
            experiences and inspiring you to explore the globe.
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-10 md:mt-20"
        >
          {Card.map((data, index) => (
            <div
              key={data.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="overflow-hidden flex justify-center"
            >
              <div className=" flex flex-col items-center text-center">
                <img
                  src={data.img}
                  alt="natura"
                  className="w-[350px] h-[350px] object-cover"
                />

                <div className="space-y-1 py-6 text-center px-10 lg:px-12">
                  <p className="uppercase text-white mb-4">{data.date}</p>
                  <p className="text-lg md:text-xl font-semibold font-merriweather">
                    {data.title}
                  </p>
                  <p className="mt-4">{data.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          data-aos="fade-right"
          className="block mx-auto text-brandBlue uppercase font-bold mt-6 transition-200 hover:text-white active:text-white mb-8 md:mb-11"
        >
          see more
        </button>
      </section>
    </>
  );
};

export default Journal;
