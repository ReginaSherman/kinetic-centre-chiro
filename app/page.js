"use client";
import React, {
  useEffect,
  useLayoutEffect,
  useContext,
  createContext,
  forwardRef,
  useState,
  useRef,
} from "react";
import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TreatmentSlider from "./components/TreatmentSlider";

import "./styles/home.scss";
import "./styles/TreatmentSlider.module.scss";

import logo from "/public/LOGO.svg";
import dr from "/public/images/DRPHOTO.png";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-spline",
});

import slideImage1 from "public/images/PHOTO.jpg";
import slideImage2 from "public/images/PHOTO_1.jpg";
import slideImage3 from "public/images/PHOTO_2.jpg";
import slideImage4 from "public/images/PHOTO_3.jpg";
import slideImage5 from "public/images/PHOTO_4.jpg";
import slideImage6 from "public/images/PHOTO_5.jpg";
import slideImage7 from "public/images/PHOTO_6.jpg";
import slideImage8 from "public/images/PHOTO_7.jpg";
import slideImage9 from "public/images/PHOTO_8.jpg";
import slideImage10 from "public/images/PHOTO_9.jpg";
import slideImage11 from "public/images/PHOTO_10.jpg";

const images = [
  {
    src: slideImage8,
    title: "CONSULTATION",
    description:
      "Patients who receive myofascial release will experience an increase in range of motion, a decrease in pain, and an increase in fascial mobility.",
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
      "Image 2 DescriptionUsing our 3D technology we will identify tissue, joint restrictions, and instabilities that are affecting your swing.",
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
    title: "LASER THERAPY",
    description:
      "Laser therapy uses focused light energy to promote tissue healing, reduce inflammation, and alleviate pain.",
  },
  {
    src: slideImage9,
    title: "Image 2 Title",
    description: "Image 2 Description",
  },
  {
    src: slideImage10,
    title: "Image 2 Title",
    description: "Image 2 Description",
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="homepage">
        <div className="homepage-hero">
          <div className="logo-container">
            <Image
              className="hero-logo"
              src={logo}
              width={705}
              height={205}
              alt="alt"
            />
          </div>
          <div className="hero-text">
            <div className="left-side">
              <h2 className="h2 uppercase">
                HELPING YOU STAY ACTIVE AND PAIN FREE
              </h2>
              <p className={`description + ${splineSans.className}`}>
                The Kinetic Centre USA is a multidisciplinary facility that
                provides advanced assessment, treatment and rehab. Kinetic
                Centre Practitioners help you feel and move better using
                objective biomechanical data.
              </p>
              <p className={`superscript + ${splineSans.className}`}>
                Have questions?{" "}
                <span className="green">Call us at 469-697-9545</span>
              </p>
              <button className="button dark">Book an Appointment</button>
            </div>
            <div className="right-side">
              <Image
                className="dr-photo"
                src={dr}
                width={800}
                height={653}
                alt="alt"
              />
            </div>
          </div>
        </div>

        <section className="section">
          <div className="wrapper">
            <div className="text-container">
              <h2 className="h2 uppercase">Treatments & Services</h2>
              <p className={`description + ${splineSans.className}`}>
                The clinic is powered by Kinetisense, the 3D functional movement
                analysis technology. Our goal is to provide you the same level
                of treatment, rehab, technology, assessment and advanced
                techniques that professional athletes use at an affordable
                price.
              </p>
            </div>
            <TreatmentSlider images={images} autoplay={false} interval={5000} />
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
