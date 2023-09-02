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
import TestimonialSlider from "./components/TestimonialSlider";
import Map from "./components/Map";
import BottomBanner from "./components/BottomBanner";

import "./styles/home.scss";
import "./styles/globals.scss";
// import "./styles/TreatmentSlider.module.scss";

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

import calIcon from "public/calIcon.svg";
import mapIcon from "public/mapIcon.svg";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider";

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

const testimonials = [
  {
    text: "“The Kinetic Centre isn't just your everyday chiropractic experience - their approach to everyone's unique situation is fantastic...”",
    date: "october 2022",
  },
  {
    text: "“After a year of being injured and losing hope in living without hip pain, I feel real improvements for the first time, and have even increased in strength...”",
    date: "MARCH 2022",
  },
  {
    text: "“Dr. Brennan has help me improve my fitness and my body in many different ways, from analyzing my running form, helpful advice,  rehab movements and much more.”",
    date: "February 2023",
  },
  {
    text: "“The Kinetic Centre isn't just your everyday chiropractic experience - their approach to everyone's unique situation is fantastic...”",
    date: "october 2022",
  },
  {
    text: "“After a year of being injured and losing hope in living without hip pain, I feel real improvements for the first time, and have even increased in strength...”",
    date: "MARCH 2022",
  },
  {
    text: "“Dr. Brennan has help me improve my fitness and my body in many different ways, from analyzing my running form, helpful advice,  rehab movements and much more.”",
    date: "February 2023",
  },
  // Add more testimonials here
];

export default function Home() {
  return (
    <div>
      <Header />
      <main className="homepage">
        <div className="homepage-hero">
          <div className="wrapper">
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
                <div className="left-border">
                  <h2 className="h2 uppercase">
                    HELPING YOU STAY ACTIVE AND PAIN FREE
                  </h2>
                  <p className={`description + ${splineSans.className}`}>
                    The Kinetic Centre USA is a multidisciplinary facility that
                    provides advanced assessment, treatment and rehab. Kinetic
                    Centre Practitioners help you feel and move better using
                    objective biomechanical data.
                  </p>
                </div>

                <p className={`superscript + ${splineSans.className}`}>
                  Have questions?{" "}
                  <span className="green">Call us at 469-697-9545</span>
                </p>
                <a
                  href="https://kineticcentredallas.janeapp.com/"
                  target="_blank"
                  className="button dark"
                >
                  Book an Appointment
                </a>
              </div>
              <div className="right-side">
                <Image
                  className="dr-photo"
                  src={dr}
                  width={800}
                  height={"auto"}
                  alt="alt"
                />
              </div>
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
          </div>
          <Slider images={images} />
        </section>

        <section className="section praise-ribbon">
          <div className="wrapper">
            <div className="praise-items">
              <div className="item item1">
                <p className="bold">200+</p>
                <p>5 star reviews</p>
              </div>
              <div className="item item2">
                <p className="bold">Rapid</p>
                <p>Recovery</p>
              </div>
              <div className="item item3">
                <p className="bold">#1 DFW</p>
                <p>Sports Clinic</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section testimonials">
          <div className="wrapper">
            <h2 className="h2 uppercase">
              HIGHEST RATED SPORTS CLINIC IN THE USA
            </h2>
          </div>
          <TestimonialSlider testimonials={testimonials} interval={5000} />
        </section>

        <section className="section map">
          <div className="locations">
            <div className="dallas location">
              <div className="location-text">
                <h2 className="uppercase">dALLAS lOCATION</h2>
                <p className={`address + ${splineSans.className}`}>
                  17740 Preston Rd <br />
                  Suite 150 <br />
                  Dallas, TX 75252 <br />
                  (469) 697-9545 <br />
                </p>
              </div>
              <div className="cta-block">
                <a
                  href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book"
                  target="_blank"
                  className="button dark"
                >
                  <Image className="icon" src={calIcon} alt="cal" /> Schedule
                  Appointment
                </a>
                <a
                  href="https://maps.google.com/?saddr=My%20Location&daddr=Kinetic+Centre+Dallas+17740+Preston+Rd+Suite+150+Dallas+TX+75252"
                  target="_blank"
                  className="button dark"
                >
                  <Image className="icon" src={mapIcon} alt="map" />
                  Get Directions
                </a>
              </div>
            </div>
            <div className="frisco location">
              <div className="location-text">
                <h2 className="uppercase">FRISCO LOCATION</h2>
                <p className={`address + ${splineSans.className}`}>
                  6155 Sports Village Rd <br />
                  Suite 500 <br />
                  Frisco, TX 75033 <br />
                  (214) 618-0324 <br />
                </p>
              </div>

              <div className="cta-block">
                <a
                  href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book"
                  target="_blank"
                  className="button dark"
                >
                  <Image className="icon" src={calIcon} alt="cal" />
                  Schedule Appointment
                </a>
                <a
                  href="https://maps.google.com/?saddr=My%20Location&daddr=Kinetic+Centre+Frisco+6155+Sports+Village+Rd+Suite+500+Frisco+TX+75033"
                  target="_blank"
                  className="button dark"
                >
                  <Image className="icon" src={mapIcon} alt="map" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
          <Map />
        </section>
        <BottomBanner />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
