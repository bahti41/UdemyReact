import { useState } from "react";
import "./App.css";
import Course from "./Course";

function getRandomCourse() {
  const courseArray = ["Angular", "Bootstrap", "Ccsharp", "Web"];
  return courseArray[Math.floor(Math.random() * courseArray.length)];
}

function App() {
  const [courses, setCourses] = useState([]);

  const handelClick = () => {
    setCourses([...courses, getRandomCourse()]);
  };

  const courseList = courses.map((course, index) => {
    return <Course key={index} courseName={course} />;
  });

  return (
    <>
      <div className="App">
        <button className="appButton" onClick={handelClick}>
          Kurs Ekle
        </button>
        {/* {courses.map((course, index) => {
          return <Course key={index} courseName={course} />;
        })}           <=   1. kullanım şekli           */}
        <div className="courseList">{courseList}</div>{" "}
        {/** <=   2 kullanım şekli*/}
      </div>
    </>
  );
}

export default App;
