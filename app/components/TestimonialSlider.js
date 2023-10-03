import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "../styles/TestimonialSlider.scss";

import Image from "next/image";

register();

export default function TestimonialSlider({ testimonials }) {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Adjust this value based on your desired behavior
      }
    }

    handleResize(); // Call it initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
    });
  }, []);

  return (
    <div className="testimonial-slider">
      <swiper-container
        className="slide-container"
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="true"
        pagination="true"
      >
        {testimonials.map((testimonial, index) => (
          <swiper-slide key={index} className="image-wrapper">
            <div className="testimonial-text">
              <p>{testimonial.text}</p>
              <p className="testimonial-date">{testimonial.date}</p>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
