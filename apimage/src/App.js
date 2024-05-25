import "./App.css";
import SearchHeader from "./SearchHeader";
import searchImages from "./Api";
import { useState } from "react";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (name) => {
    const result = await searchImages(name);
    setImages(result);
  };

  return (
    <div className="App">
      <SearchHeader Search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
