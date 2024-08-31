import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SliderProgress.css";
import { GalleryContext } from "../../App";
import NextIcon from '/assets/shared/icon-next-button.svg'
import PrevIcon from '/assets/shared/icon-back-button.svg'
const SliderProgress = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useContext(GalleryContext);

  if (!data) {
    return null;
  }

  const currentIndex = data.findIndex((item) => item.id === parseInt(id));
  const progressPercentage = ((currentIndex + 1) / data.length) * 100;

  if (currentIndex === -1) {
    return null;
  }

  const nextItem = data[currentIndex + 1];
  const prevItem = data[currentIndex - 1];

  const handleNext = () => {
    if (nextItem) {
      navigate(`/gallery/${nextItem.id}/${nextItem.name}`);
    }
  };

  const handlePrev = () => {
    if (prevItem) {
      navigate(`/gallery/${prevItem.id}/${prevItem.name}`);
    }
  };

  const currentItem = data[currentIndex];

  return (
    <div className="container">
      <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      <div className="names">
        <h2>{currentItem?.name}</h2>
        <p>{currentItem?.artist?.name}</p>
      </div>
      <div className="buttons">
        <button
          className={`prevbutton ${!prevItem ? "disabled-btn" : ""}`}
          onClick={handlePrev}
          disabled={!prevItem}
        >
        <img src={PrevIcon} alt="prev button" />
        </button>
        <button
          className={`nextbutton ${!nextItem ? "disabled-btn" : ""}`}
          onClick={handleNext}
          disabled={!nextItem}
        >
        <img src={NextIcon} alt="next button" />
        </button>
      </div>
    </div>
  );
};

export default SliderProgress;
