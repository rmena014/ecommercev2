import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

function ImageSlider({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={image}
          className={index === currentImageIndex ? "active" : "inactive"}
          src={image}
          alt="slider"
        />
      ))}
    </div>
  );
}

export default ImageSlider;
