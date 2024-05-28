import React from "react";
import { Link } from "react-router-dom";
import Banneryeni from "../image/banneryeni.jpg";
import "../style/Home.css";

function Home() {
  return (
    <>
      <div
        className="mainPage"
        style={{ backgroundImage: `url(${Banneryeni})` }}
      >
        <div className="order">
          <Link to="/menu">
            <button>SİPARİŞ VER</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
