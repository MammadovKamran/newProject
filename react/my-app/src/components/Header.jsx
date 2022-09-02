import React from "react";
import logo from "../images/gc-icon.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="left-side-nav">
         <Link to="/"> <img className="logo" src={logo} /> </Link>
        </div>

        <div className="center-side-nav">
 
          <Link to="/aboutUs">Haqqımızda</Link>
       <Link to="/products">Məhsullar</Link>

          <p>Reseptlər</p>
          <p>Bizimlə Əlaqə</p>
          <p className="aze-lang">AZ</p>
        </div>

        <div className="right-side-nav">
          <div>Yeni Zelandiya keyfiyyəti</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
