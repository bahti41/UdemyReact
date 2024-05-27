import "./App.css";
import { useState, useEffect, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);

  const inputRef = useRef();

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    console.log(inputRef.current);
    inputRef.current.focus();
    // inputRef.current.value = "bahti";
  };

  return (
    <div className="App">
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Benim Adım : {name}</div>
      <div>{renderCount.current} defa render oldu.</div>
      <button onClick={focusInput}>focus</button>
    </div>
  );
}

export default App;
