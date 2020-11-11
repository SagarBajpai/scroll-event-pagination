import React, { useEffect, useState, useRef } from "react";
import "./Home.css";
import _ from "lodash";
import { fetchImages } from "../services/Api";
import { tempImage } from "../components/constant";

const Home = () => {
  const containerRef = useRef();
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getImages();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", _.debounce(handleScroll, 500));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    console.log("handleScroll ");
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((page) => page + 1);
  };

  const getImages = async () => {
    const data = await fetchImages(page);
    setImages([...images, ...data]);
  };

  const showImages = images.map((image, index) => {
    return (
      // TODO: Do not use index in the key (Right now id is not uniqure so have to do this to avoid getting warnings)
      <div key={image.id + index} className="image-container">
        <img src={tempImage} alt="pay" className="image" />
        <div className="image-content">
          <p>Photo Number: {image.id}</p>
          <p>{image.author}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="container" ref={containerRef}>
      {showImages}
    </div>
  );
};

export default Home;
