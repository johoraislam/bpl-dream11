import PropTypes from "prop-types";
import bannerPng from "../../assets/assets/banner-main.png";
import { toast } from "react-toastify";

const Banner = ({ handleCoin }) => {
  const notify = () => {
    toast.success("Hurrah! Coin added successfully!");
  };

  const handleClick = () => {
    handleCoin();
    notify();
  };

  return (
    <section className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white rounded-xl mx-4 mt-6 p-6 text-center">
      <div className="flex flex-col py-6 rounded-lg items-center justify-center bg-gradient-to-tl from-[#b58cb0] via-[#1a1a1ae7] to-[#9b9be5]">
        {/* Banner Image */}
        <img src={bannerPng} alt="cricket" className="w-32 mb-4" />

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base mb-4 text-gray-300">
          Beyond Boundaries Beyond Limits
        </p>

        {/* CTA Button */}
        <div className="border border-yellow-400 p-2 rounded-lg">
          <button
            onClick={handleClick}
            className="bg-yellow-400 hover:scale-105 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold shadow-md transform transition duration-300 ease-in-out"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  handleCoin: PropTypes.func.isRequired,
};

export default Banner;
