import { useEffect, useState } from "react";
import "./imageSlider.css";

export default function ImageSlider({ images = [], autoPlay = true, interval = 4000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  if (!images.length) return null;

  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);

  const nextSlide = () =>
    setCurrent((current + 1) % images.length);

  return (
    <div className="slider">
      {images.map((img, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Controls */}
      <button className="slider-btn prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="slider-btn next" onClick={nextSlide}>
        ›
      </button>

      {/* Dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
