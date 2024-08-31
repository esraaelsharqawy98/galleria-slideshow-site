import React, { useContext, useState, useEffect } from "react";
import "./SliderHeroWrapper.css";
import { useParams } from "react-router-dom";
import ViewIcon from "/assets/shared/icon-view-image.svg";
import { GalleryContext } from "../../App";
import LightBox from "../LightBox/LightBox";

const SliderHeroWrapper = () => {
  const { id } = useParams();
  const { data } = useContext(GalleryContext);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isLightBoxOpen, setIsLightBoxOpen] = useState(false);

  useEffect(() => {
    const foundItem = data.find((item) => item.id === parseInt(id));
    setSelectedItem(foundItem);
  }, [id, data]);

  const openLightBox = () => setIsLightBoxOpen(true);
  const closeLightBox = () => setIsLightBoxOpen(false);

  if (!selectedItem) return null;

  return (
    <>
      {isLightBoxOpen && (
        <LightBox
          image={selectedItem.images.gallery}
          onClose={closeLightBox}
        />
      )}
      <section className="hero container">
        <section className="left-wrapper">
          <picture>
            <source
              media="(max-width: 576px)"
              srcSet={selectedItem.images.hero.small}
            />
            <img
              src={selectedItem.images.hero.large}
              alt={selectedItem.name}
              className="hero-img"
            />
          </picture>
          <div className="artist">
            <h1 className="image-name">{selectedItem.name}</h1>
            <p className="artist-name">{selectedItem.artist.name}</p>
          </div>
          <button className="view-btn" onClick={openLightBox}>
            <img src={ViewIcon} alt="view icon" />
            <span>view image</span>
          </button>
          <img
            src={selectedItem.artist.image}
            alt="artist image"
            className="artist-img"
          />
        </section>
        <section className="right-wrapper">
          <h1 className="number">{selectedItem.year}</h1>
          <p className="description">{selectedItem.description}</p>
          <a href={selectedItem.source}>Go To Source</a>
        </section>
      </section>
    </>
  );
};

export default SliderHeroWrapper;
