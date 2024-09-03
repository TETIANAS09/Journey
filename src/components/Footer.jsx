import React from "react";
import BgrFooter from "../assets/footer.webp";

const BgrImg = {
  backgroundImage: `url(${BgrFooter})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const Footer = () => {
  const [searchValue, setSearchValue] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleButtonClick = () => {
    setSearchValue("");
  };

  return (
    <>
      <span id="search"></span>
      <footer
        style={BgrImg}
        className="h-[500px] w-full flex flex-col justify-center items-center relative bg-brandDark "
      >
        {/* gradient section */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/30  to-black z-10"></div>
        <div
          data-aos="fade-right"
          className="flex items-center text-brandDark font-semibold mb-6 z-50"
        >
          <input
            className="py-2 px-2 md:px-12 outline-none"
            type="search"
            id="site-search"
            name="q"
            placeholder="Hawaii..."
            value={searchValue}
            onChange={handleSearchChange}
          />
          <button
            className="bg-white/45 py-2 px-2 hover:bg-white  "
            onClick={handleButtonClick}
          >
            Search
          </button>
        </div>
        <p
          data-aos="fade-left"
          className="text-sm md:text-xl lg:text-2xl font-merriweather font-bold"
        >
          Book your unforgettable journey today
        </p>
      </footer>
    </>
  );
};
export default Footer;
