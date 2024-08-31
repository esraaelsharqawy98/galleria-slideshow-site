import React from "react";
import { useParams } from "react-router-dom";
import SliderHeroWrapper from "../Components/SliderHeroWrapper/SliderHeroWrapper";
import SliderProgress from "../Components/SliderProgress/SliderProgress";
const Slideshow = () => {
  const { id, name } = useParams();
  return (
    <>
      <main id="slider">
        <SliderHeroWrapper />
      </main>
      <footer>
         <SliderProgress/>
      </footer>
    </>
  );
};

export default Slideshow;
