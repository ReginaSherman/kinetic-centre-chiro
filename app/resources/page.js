"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/resources.scss";

import TestimonialSlider from "../components/TestimonialSlider";
import Image from "next/image";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-spline",
});

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

import header from "/public/resources-header.png";
import VideoSlider from "../components/VideoSlider";

export default function Resources() {
  return (
    <div>
      <Header />
      <main className="resources">
        <div className="resources-hero">
          <div className="wrapper">
            <div className="hero-text">
              <div className="left-side">
                <div className="left-border">
                  <h2 className="h2 uppercase">A LITTLE ABOUT US</h2>
                  <p className={`description + ${splineSans.className}`}>
                    The goal of Kinetic Centre USA is to partner with you in
                    improving your functional movement. Our practitioners will
                    provide treatment for you and prescribe functional rehab
                    exercises to retrain your body in functional movement and to
                    strengthen your bodys problem areas.
                  </p>
                </div>

                <a
                  href="https://kineticcentredallas.janeapp.com/"
                  target="_blank"
                  className="button light"
                >
                  Hear from our Patients
                </a>
                <a
                  href="https://kineticcentredallas.janeapp.com/"
                  target="_blank"
                  className="button dark"
                >
                  Book an Appointment
                </a>
              </div>
              <div className="right-side">
                <div className="image-container">
                  <Image
                    className="dr-photo"
                    src={header}
                    width={800}
                    height={"auto"}
                    alt="alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section resource-links">
          <div className="wrapper">
            <div className="links-container">
              <ResourceLink link="/" buttonText="Home" />
              <ResourceLink link="/about-us" buttonText="About Us" />
              <ResourceLink link="/doctors" buttonText="Doctors" />
              <ResourceLink link="/treatments" buttonText="Treatments" />
              <ResourceLink link="/" buttonText="Podcasts" />
              <ResourceLink
                link="/about-us#our-team"
                buttonText="Meet the Team"
              />
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

        <section className="section video-slider">
          <div className="wrapper">
            <VideoSlider />
          </div>
        </section>

        <section className="section bottom-banner">
          <div className="wrapper">
            <div className="cta-container">
              <h3 className="uppercase">ENJOY YOUR VISIT?</h3>
              <p className="description">
              LEAVE US A REVIEW
              </p>
              <a
                href="https://kineticcentredallas.janeapp.com/"
                target="_blank"
                className="button dark"
              >
                Leave a review now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const ResourceLink = ({ link, buttonText }) => {
  return (
    <a href={link} className="button dark">
      {buttonText}
    </a>
  );
};
