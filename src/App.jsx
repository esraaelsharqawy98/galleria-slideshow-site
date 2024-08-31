import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Gallery from "./pages/Gallery";
import Slideshow from "./pages/Slideshow";
import { createContext, useEffect, useState } from "react";
export const GalleryContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const toggleSlideshow = (state) => {
    setIsSlideshowActive(state);
  };
  return (
    <GalleryContext.Provider value={{ data,isSlideshowActive, toggleSlideshow }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Gallery />} />
            <Route path="gallery/:id/:name" element={<Slideshow />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GalleryContext.Provider>
  );
}

export default App;
