import React, { useState } from "react";
import useCounter from "./useCounter";

function Counter() {
  const [num, increment, decrement, reset] = useCounter();
  return (
    <>
      <div>
        <h2>Sayı = {num}</h2>
        <button onClick={increment}>Arttır</button>
        <button onClick={decrement}>Azlat</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
    </>
  );
}

export default Counter;
