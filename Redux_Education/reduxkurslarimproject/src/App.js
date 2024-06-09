import { useEffect } from "react";
import "./App.css";
import CourseList from "./components/CourseList";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./controll/cartSlice";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <>
      <div className="App">
        <Navbar />
        <CourseList />
      </div>
    </>
  );
}

export default App;
