import React, { useState, useContext } from "react";
import "./NavBar.css";
import Logo from "/assets/shared/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { GalleryContext } from "../../App";

const NavBar = () => {
  const navigate = useNavigate();
  const { data, isSlideshowActive, toggleSlideshow } =
    useContext(GalleryContext);

  const firstSlideshowItem = data[0];
  const firstItemName = firstSlideshowItem?.name;

  const handleButtonClick = () => {
    if (isSlideshowActive) {
      navigate("/");
      toggleSlideshow(false);
    } else {
      navigate(`/gallery/${firstSlideshowItem.id}/${firstItemName}`);
      toggleSlideshow(true);
    }
  };

  return (
    <header className="container">
      <nav>
        <Link to={"/"}>
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <button onClick={handleButtonClick}>
          {isSlideshowActive ? "Stop Slideshow" : "Start Slideshow"}
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
