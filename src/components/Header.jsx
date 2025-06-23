import { LOGO_URL } from "./utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    !onlineStatus && setbtnName("Logout");
  }, [onlineStatus]);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-2/6 items-center">
      <div className="logo-container">
        <img className="w-2/6 h-auto cursor-pointer" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex items-center m-4">
          <li className="px-4 cursor-pointer text-base hover:scale-105 text-shadow-lg">
            Online Status{onlineStatus ? "💚" : "❤️"}
          </li>
          <li className="px-4 cursor-pointer text-base hover:scale-105 text-shadow-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer text-base hover:scale-105 text-shadow-lg">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 cursor-pointer text-base hover:scale-105 text-shadow-lg">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 cursor-pointer text-base hover:scale-105 text-shadow-lg">
            Cart
          </li>
          <button
            className="border border-solid border-black bg-green-100 rounded-lg p-2 m-2 hover:bg-green-200 text-base"
            onClick={() => {
              if (btnName === "Login") {
                setbtnName("Logout");
              } else {
                setbtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
