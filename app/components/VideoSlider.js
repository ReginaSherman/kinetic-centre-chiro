import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "../styles/VideoSlider.scss";

import Image from "next/image";

const videos = [
  {
    src: "https://www.youtube.com/embed/5E8RGGYY-UI?",
  },
  {
    src: "https://www.youtube.com/embed/qpzWEoKayQo?si=d8bmswwUbniOvjDv",
  },
  {
    src: "https://www.youtube.com/embed/5kiY87XLahk?si=IsKi843lAXEdlwWm",
  },
];

register();

export default function VideoSlider({ images }) {
  const swiperElRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Adjust this value based on your desired behavior
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1350) {
        setSlidesPerView(2);
      } else if (window.innerWidth > 1350) {
        setSlidesPerView(2);
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
      console.log(progress);
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <div className="video-slider">
      <swiper-container
        className="slide-container"
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="true"
        pagination="true"
        loop="true"
      >
        {videos.map((video, index) => (
          // eslint-disable-next-line react/jsx-key
          <swiper-slide key={index} className="image-wrapper">
            <iframe
            className="slide-video"
              width="560"
              height="315"
              src={video.src}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
