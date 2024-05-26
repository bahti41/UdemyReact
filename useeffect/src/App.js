import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [bahtiyar, setBahtiyar] = useState(0);
  const [talut, setTalut] = useState(0);

  useEffect(() => {
    console.log("ilk kez render edildiginde calısır dahada calısmaz.");
  }, []);

  useEffect(() => {
    console.log("her zaman calısır.");
  });

  useEffect(() => {
    console.log(
      "ilk kez render edildiginde calısır. ve bahtiyar degerinde bir degişiklik oldugunda"
    );
  }, [bahtiyar]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiginde calısır. ve talut degerinde bir degişiklik oldugunda"
    );
  }, [talut]);

  useEffect(() => {
    console.log(
      "ilk kez render edildiginde calısır. bahtiyar veya talut degerinde bir degişiklik oldugunda"
    );
  }, [bahtiyar, talut]);

  const bahtiyarTotal = () => {
    setBahtiyar(bahtiyar + 1);
  };

  const talutTotal = () => {
    setTalut(talut + 1);
  };

  return (
    <div className="App">
      <div className="fistDiv">
        <button onClick={bahtiyarTotal}>Bahtiyar ++</button>
        <div>Bahtiyar: {bahtiyar} </div>
      </div>
      <div>
        <button onClick={talutTotal}>Talut ++</button>
        <div>Talut: {talut} </div>
      </div>
    </div>
  );
}

export default App;
