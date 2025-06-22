import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnnameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-30">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          < li className="px-4">
            <Link to="/"> Home</Link>
          </li>
          <li className="px-4" >
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          < li  className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>

          < li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnnameReact === "login"
                ? setBtnNameReact("logout")
                : setBtnNameReact("login");
            }}
          >
            {btnnameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
