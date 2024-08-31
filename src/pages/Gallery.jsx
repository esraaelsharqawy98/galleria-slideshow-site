import { useContext } from "react";
import GalleryItem from "../Components/GalleryItem/GalleryItem";
import { Link } from "react-router-dom";
import { GalleryContext } from '../App';
const Gallery = () => {
  const { data , toggleSlideshow  } = useContext(GalleryContext);
  const handleItemClick = () => {
    toggleSlideshow(true);
  };

  return (
    <main id="gallery-container" className="container">
      {data.map((item) => {
        return (
          <Link to={`gallery/${item.id}/${item.name}`} key={item.id} onClick={handleItemClick}>
              <GalleryItem item={item}/>
          </Link>
        )
      })}
    </main>
  );
};

export default Gallery;
