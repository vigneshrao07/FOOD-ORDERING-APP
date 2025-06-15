import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnnameReact, setBtnNameReact]=useState("Login");
  
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} 
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={()=>{
            btnnameReact==="login"
              ? setBtnNameReact("logout")
              : setBtnNameReact("login");
          }}>{btnnameReact}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;