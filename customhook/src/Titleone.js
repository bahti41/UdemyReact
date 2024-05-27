import React, { useState, useEffect } from "react";
import useTitle from "./useTitle";

const Titleone = () => {
  const [num, setNum] = useState(0);
  //   useEffect(() => {
  //     document.title = `Sayı ${num}`;
  //   }, [num]);
  useTitle(num);

  const number = () => {
    setNum(num + 1);
  };

  return (
    <div>
      <button onClick={number}>Sayı - {num}</button>
    </div>
  );
};

export default Titleone;
