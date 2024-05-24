import "./App.css";
import SearchHeader from "./SearchHeader";

function App() {
  const handleSubmit = (name) => {
    console.log(name);
  };

  return (
    <div className="App">
      <SearchHeader Search={handleSubmit} />
    </div>
  );
}

export default App;
