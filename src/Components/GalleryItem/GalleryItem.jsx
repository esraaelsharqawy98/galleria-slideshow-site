import React from "react";
import "./GalleryItem.css";
const GalleryItem = ({ item }) => {
  return (
    <div className="card">
      <img src={item.images.thumbnail} alt={`image ${item.id}`} />
      <div className="overlay">
        <div className="card-text">
          <h2>{item.name}</h2>
          <p>{item.artist.name}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
