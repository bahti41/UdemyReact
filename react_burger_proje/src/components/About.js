import React from "react";
import BannerImage from "../image/banneryeni.jpg";
import "../style/About.css";

function About() {
  return (
    <>
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${BannerImage})` }}
        ></div>
        <div className="aboutBottom">
          <h1>Hakkımzıda</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua .
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
