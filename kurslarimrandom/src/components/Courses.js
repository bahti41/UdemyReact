import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Courses = ({ courses }) => {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };

  const preveCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <>
      <div className="courseMainDiv">
        <div className="courseTitleAndButton">
          <h2>Kurslarım</h2>
          <button className="cardDeleteBtn" onClick={getRandomCourse}>
            Rasgele Kurs Ata
          </button>
        </div>
        <div className="cardDiv">
          <button className="prevNext" onClick={preveCourse}>
            <FaChevronLeft />
          </button>

          <div className="card">
            <div className="card-title-price">
              <h2 className="card-title">{title}</h2>
              <h4 className="card-price">{price}TL</h4>
            </div>
            <p>{content}</p>
          </div>

          <button className="prevNext" onClick={nextCourse}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Courses;
