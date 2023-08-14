import React, { useState } from "react";
import styles from "../styles/TestimonialSlider.module.scss";

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const sliderStyle = {
    transform: `translateX(-${currentIndex * 30}%)`, // Adjust as needed
  };

  return (
    <div className={styles["testimonial-slider"]}>
      <div className={styles.pagination}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className={styles["testimonial-container"]} style={sliderStyle}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles["testimonial-slide"]}>
            <div className={styles["testimonial-content"]}>
              <p className={styles["testimonial-text"]}>{testimonial.text}</p>
              <p className={styles["testimonial-date"]}>{testimonial.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
