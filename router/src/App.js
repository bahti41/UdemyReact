import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Misson from "./components/Misson";
import WrongPage from "./components/WrongPage";
import HistoryUs from "./components/HistoryUs";
import Company from "./components/Company";
import Team from "./components/Team";
import Members from "./components/Members";
import MemberDetail from "./components/MemberDetail";
import React from "react";
const LazyAboutUs = React.lazy(() => import("./components/AboutUs"));

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/aboutUs"
            element={
              <React.Suspense>
                <LazyAboutUs />
              </React.Suspense>
            }
          />
          <Route path="/mission" element={<Misson />} />
          <Route path="/history" element={<HistoryUs />}>
            <Route path="company" element={<Company />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="/members" element={<Members />} />
          <Route path="/members/:memberId" element={<MemberDetail />} />
          <Route path="*" element={<WrongPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
