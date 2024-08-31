import React from "react";
import "./LightBox.css";
const LightBox = ({ image, onClose }) => {
  return (
    <div className="lightbox">
      <div className="content">
        <button className="close" onClick={onClose}>
          close
        </button>
        <img src={image} alt="Enlarged view" className="lightbox-img" />
      </div>
    </div>
  );
};

export default LightBox;
