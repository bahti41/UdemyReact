import "./App.css";
import { useState, useTransition } from "react";

function App() {
  const [input, setInput] = useState("");
  const [myList, setMyList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    startTransition(() => {
      const myArray = [];
      for (let i = 0; i < 2000; i++) {
        myArray.push(e.target.value);
      }
      setMyList(myArray);
    });
  };
  return (
    <>
      <input type="text" value={input} onChange={handleChange} />

      {isPending
        ? "Yükleniyor..."
        : myList.map((harf, id) => {
            return <div key={id}>{harf}</div>;
          })}
    </>
  );
}

export default App;
