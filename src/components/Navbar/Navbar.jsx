import PropTypes from "prop-types";
import logo from "../../assets/assets/logo.png";

const Navbar = ({coin}) => {
  return (
    <div>
      <div className="sticky top-0 z-50 flex justify-between items-center bg-slate-400 text-white p-4">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex gap-8 text-lg items-center">
          <ul className="flex gap-6 text-gray-700 font-medium">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Schedules</a>
            </li>
          </ul>

          <div className="border border-amber-50 p-2 rounded-md text-amber-300 font-bold">
            {coin} Coin💰
          </div>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
