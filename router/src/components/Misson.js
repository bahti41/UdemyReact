import React from "react";
import { useNavigate } from "react-router-dom";

function Misson() {
  const navigate = useNavigate();
  return (
    <>
      <div>Mission</div>
      <button onClick={() => navigate(-1)}>Geriye dön</button>
    </>
  );
}

export default Misson;
