import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/TreatmentSlider.module.scss";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  weight: ["400"],
  preload: false,
  variable: "--font-spline",
});

const TreatmentSlider = ({ images, autoplay = false, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    let timer;

    if (autoplay) {
      timer = setInterval(() => {
        goToNextSlide();
      }, interval);
    }

    return () => {
      clearInterval(timer);
    };
  }, [currentIndex, autoplay, interval]);

  const goToNextSlide = () => {
    const nextIndex = (currentIndex + 4) % images.length;
    setCurrentIndex(nextIndex);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 4 + images.length) % images.length;
    setCurrentIndex(prevIndex);
  };

  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
  };

  const handleDragEnd = (e) => {
    if (isDragging) {
      const diff = startX - (e.clientX || e.changedTouches[0].clientX);

      if (diff > 50) {
        goToNextSlide();
      } else if (diff < -50) {
        goToPrevSlide();
      }

      setIsDragging(false);
    }
  };

  const handleDragCancel = () => {
    setIsDragging(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index * 4);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      e.preventDefault();
    }
  };

  const sliderStyle = {
    transform: `translateX(-${
      (currentIndex % Math.ceil(images.length / 4)) *
      (100 / Math.ceil(images.length / 4))
    }%)`,
  };

  return (
    <div
      className={styles["treatment-slider"]}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
      onMouseLeave={handleDragCancel}
      onTouchCancel={handleDragCancel}
      onTouchMove={handleTouchMove}
    >
      <div className={styles.pagination}>
        {images.slice(0, Math.ceil(images.length / 4)).map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex / 4 ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div
        className={styles["slide-container"]}
        style={sliderStyle}
        onMouseDown={handleDragStart}
        onTouchStart={handleDragStart}
        ref={sliderRef}
      >
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <div className={styles["image-wrapper"]}>
              <Image
                src={image.src}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
              <div className={styles["overlay"]}>
                <div className={styles["overlay-content"]}>
                  <h2>{image.title}</h2>
                  <p
                    className={`${styles["fade-description"]} + ${splineSans.className}`}
                  >
                    {image.description}
                    <a
                      href="https://kineticcentredallas.janeapp.com/"
                      target="_blank"
                      className="button dark"
                    >
                      Book Now
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className={styles.navigation}>
        <button onClick={goToPrevSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div> */}
    </div>
  );
};

export default TreatmentSlider;
