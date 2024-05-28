import React from "react";
import Burgerlogo from "../image/burgerlogo.png";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="main">
          <img src={Burgerlogo} alt="" />
          <div className="mainLink">
            <Link to="/">AnaSayfa</Link>
            <Link to="/menu">Menü</Link>
            <Link to="/about">Hakkımızda</Link>
            <Link to="/contact">İletişim</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
