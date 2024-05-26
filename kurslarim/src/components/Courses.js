import React from "react";
import Course from "./Course";

const Courses = ({ courses, removeCourse }) => {
  return (
    <>
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="">
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
    </>
  );
};

export default Courses;
