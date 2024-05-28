import React from "react";
import { Link, Outlet } from "react-router-dom";

function HistoryUs() {
  return (
    <>
      <div>history</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="team">Team</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default HistoryUs;
