import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "../styles/TreatmentSlider.scss";

import Image from "next/image";
import { trackBookNowClick } from "../utils/analytics";

register();

export default function Slider({ images }) {
  const swiperElRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Adjust this value based on your desired behavior
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1350) {
        setSlidesPerView(3);
      } else if (window.innerWidth > 1350) {
        setSlidesPerView(4);
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

    // swiperElRef.current.addEventListener("slidechange", (e) => {
    //   console.log("slide changed");
    // });
  }, []);

  const handleBookNowClick = () => {
    trackBookNowClick();
  };

  return (
    <div className="treatment-slider">
      <swiper-container
        className="slide-container"
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="true"
        pagination="true"
        loop="true"
      >
        {images.map((image, index) => (
          // eslint-disable-next-line react/jsx-key
          <swiper-slide key={index} className="image-wrapper">
            <Image className="slide-img" src={image.src} alt="alt" />
            <div className="overlay">
              <div className="overlay-content">
                <div className="overlay-text">
                  <h2>{image.title}</h2>
                  <p className="fade-description">{image.description}</p>
                </div>
                <a
                  href="https://kineticcentredallas.janeapp.com/"
                  target="_blank"
                  className="button dark"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </a>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
