import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

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
      <div className="App">
        <div>
          {loading ? (
            <Loading />
          ) : (
            <>
              {courses.length === 0 ? (
                <div className="reflesDiv">
                  <h2>Kursların Hepsini Sildin</h2>
                  <button
                    className="cardDeleteBtn"
                    onClick={() => {
                      fetchCourses();
                    }}
                  >
                    Yenile
                  </button>
                </div>
              ) : (
                <Courses courses={courses} removeCourse={deleteCourse} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
