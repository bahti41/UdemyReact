import React from "react";
import "./Course.css";
import Angular from "./image/d1.jpg";
import Bootstrap from "./image/d2.jpg";
import Ccsharp from "./image/d3.jpg";
import Web from "./image/d4.jpg";

const courseMap = {
  // Angular: Angular,
  // Bootstrap: Bootstrap,
  // Ccsharp: Ccsharp,
  // Web: Web,  <= key ve valueler birbiriyle aynıysa sadece key veya valueyi yazarsakta calışıyor
  Angular,
  Bootstrap,
  Ccsharp,
  Web,
};

const Course = ({ courseName }) => {
  // console.log(Angular);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <>
      <div className="courseDiv">
        <img className="course" src={courseMap[courseName]} alt="film" />
      </div>
    </>
  );
};

export default Course;
