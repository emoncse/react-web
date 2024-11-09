import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_API_URL from "../config";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Ensure react-icons is installed

const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/sliders/`) // Replace with your actual API endpoint
      .then((response) => {
        setSlides(response.data);
      })
      .catch((error) => {
        console.error("Error fetching slides:", error);
      });
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div
      className="slider-container relative"
      style={{ height: "500px", width: "100%" }}
    >
      <div className="slider flex overflow-x-auto">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide flex flex-col items-center justify-center p-4 ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              {slide.title}
            </h2>
            <img
              src={slide.image_url} // Corrected property name to match the API response
              alt={slide.title}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="slider-controls absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
        <div className="flex justify-between items-center">
          <button onClick={handlePrevious} className="text-white">
            <FaArrowLeft />
          </button>
          <button onClick={handleNext} className="text-white">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
