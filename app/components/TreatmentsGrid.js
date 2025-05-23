import { useState } from "react";
import Image from "next/image";

import "../styles/TreatmentsGrid.scss";

import slideImage1 from "public/images/PHOTO.jpg";
import slideImage2 from "public/images/PHOTO_1.jpg";
import slideImage3 from "public/images/PHOTO_2.jpg";
import slideImage4 from "public/images/PHOTO_3.jpg";
import slideImage5 from "public/images/PHOTO_4.jpg";
import slideImage6 from "public/images/PHOTO_5.jpg";
import slideImage7 from "public/images/PHOTO13.jpg";
import slideImage8 from "public/images/PHOTO_7.jpg";
import slideImage9 from "public/images/PHOTO_8.jpg";
import slideImage10 from "public/images/PHOTO_9.jpg";
import slideImage11 from "public/images/PHOTO_10.jpg";
import slideImage12 from "public/images/photo11.png";
import slideImage13 from "public/images/photo12.jpg";
import BookingModal from "./BookingModal";
import { trackBookNowClick } from "../utils/analytics";

const images = [
  {
    src: slideImage8,
    title: "myofascial therapy",
    description:
      "Patients who receive myofascial release will experience an increase in range of motion, a decrease in pain, and an increase in fascial mobility.",
  },
  {
    src: slideImage13,
    title: "RUNNING GAIT ANALYSIS",
    description:
      "Using our customized Assault Runner and high-speed motion capture camera, we will analyze your running gait to help you improve your performance and reduce your risk of injury.",
  },
  {
    src: slideImage12,
    title: "smart cupping",
    description: "Cupping treatment using motion, red light therapy and heat.",
  },
  {
    src: slideImage11,
    title: "k taping",
    description:
      "K-Tape is a thin, flexible tape that is meant to relieve pain, reduce swelling and inflammation, and provide support to joints and muscle",
  },
  {
    src: slideImage1,
    title: "chiropractic adjustment",
    description:
      "Chiropractic adjustments restore alignment to bothersome joints in the spine or extremities.",
  },
  {
    src: slideImage2,
    title: "3D MOVEMENT SCREENING",
    description:
      "We utilize 3D movement screening to baseline and measure progress in your body.",
  },
  {
    src: slideImage3,
    title: "functional rehab",
    description:
      "Functional rehab is intended to strengthen your movement patterns and improve functionality",
  },
  {
    src: slideImage4,
    title: "GOLF SWING ANALYSIS",
    description:
      "Using our 3D technology we will identify tissue, joint restrictions, and instabilities that are affecting your swing.",
  },
  {
    src: slideImage5,
    title: "3D bARBELL ANALYSIS",
    description:
      "The 3D Barbell allows us to break down back squats, deadlifts, and many other lifts that you perform in the gym",
  },
  {
    src: slideImage6,
    title: "SPORTS MASSAGE",
    description:
      "Sports massage enhances athletic performance & aids in the recovery of muscles by targeting areas of tension & promoting blood circulation.",
  },
  {
    src: slideImage7,
    title: "dry needling",
    description:
      "Dry Needling uses a fine-filament needle that is inserted into the skin and muscle, targeted at myofascial trigger points with the goal of decreasing pain and increasing function.",
  },
];

export default function TreatmentsGrid() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBookNowClick = () => {
    trackBookNowClick();
    setModalOpen(true);
  };

  return (
    <div className="treatments-grid">
      {images.map((image, index) => (
        // eslint-disable-next-line react/jsx-key
        <div key={index} className="image-wrapper">
          <Image className="slide-img" src={image.src} alt="alt" />
          <div className="overlay">
            <div className="overlay-content">
              <div className="overlay-text">
                <h2>{image.title}</h2>
                <p className="fade-description">{image.description}</p>
              </div>
              <button
                className="button dark"
                onClick={handleBookNowClick}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </div>
  );
}
