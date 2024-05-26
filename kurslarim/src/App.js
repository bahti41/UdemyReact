import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";
import Course from "./components/Course";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (deletedId) => {
    const afterDeletedCourses = courses.filter(
      (course) => course.id !== deletedId
    );
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3041/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);
  return (
    <>
      <div>
        {loading ? (
          <Loading />
        ) : (
          <Courses courses={courses} removeCourse={deleteCourse} />
        )}
      </div>
    </>
  );
}

export default App;
