import React, { useState, useEffect } from "react";
import image1 from "../images/image1.png";
//import image2 from "../images/image2.jpg";
//import image3 from "../images/image3.jpg";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import "../css/SlideSjow.css";

const SlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesArray = [image1, image5, image4];

  useEffect(() => {
    let setIime = setInterval(() => {
      setCurrentIndex((prevsIndex) =>
        prevsIndex === imagesArray.length - 1 ? 0 : prevsIndex + 1
      );
    }, 3000);
    return () => clearInterval(setIime);
  }, [currentIndex, imagesArray.length]);
  const onClicked = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="image_slider">
      <div className="images_container">
        {imagesArray.map((image, index) => (
          <img
            key={index}
            className={currentIndex === index ? "active" : ""}
            src={image}
            alt={index}
          ></img>
        ))}
      </div>
      <div className="dots_container">
        {Array.from({ length: imagesArray.length }).map((dot, index) => (
          <i
            key={index}
            onClick={() => onClicked(index)}
            className={`ui  circle icon ${
              currentIndex === index ? "active" : ""
            }`}
            name={index}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default SlideShow;
