// ImageCarousel.js
import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div>
            <button onClick={handlePrev}>Previous</button>
            <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
            />
            <button onClick={handleNext}>Next</button>
        </div>
    );
};

export default ImageCarousel;
