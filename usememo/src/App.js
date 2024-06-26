import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunc(number);
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  return (
    <div>
      <>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          {" "}
          Temayı degiştir
        </button>
        <div style={theme}>{doubleNumber}</div>
      </>
    </div>
  );
}

function slowFunc(num) {
  console.log("Fonksiyon cagrıldı");
  for (let i = 0; i < 100000000; i++) {}
  return num * 2;
}

export default App;
