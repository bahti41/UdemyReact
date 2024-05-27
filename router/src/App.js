import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Misson from "./components/Misson";
import WrongPage from "./components/WrongPage";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/mission" element={<Misson />} />
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
