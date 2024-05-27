import React from "react";
import Course from "./Course";

const Courses = ({ courses, removeCourse }) => {
  return (
    <>
      <div className="courseMainDiv">
        <div>
          <h2>Kurslarım</h2>
        </div>
        <div className="cardDiv">
          {courses.map((course) => {
            return (
              <Course
                key={course.id}
                {...course}
                removeOneCourse={removeCourse}
              />
            );
            //   key={course.id} course={course}
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
