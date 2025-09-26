"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/resources.scss";
import BookingModal from "../components/BookingModal";

import TestimonialSlider from "../components/TestimonialSlider";
import Image from "next/image";
import { Spline_Sans } from "next/font/google";
import { trackBookAppointmentClick } from "../utils/analytics";

const splineSans = Spline_Sans({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-spline",
  display: 'swap',
  fallback: ['system-ui', 'arial'],
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
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBookAppointmentClick = () => {
    trackBookAppointmentClick();
    setModalOpen(true);
  };

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
                <button
                  className="button dark"
                  onClick={handleBookAppointmentClick}
                >
                  Book an Appointment
                </button>
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
              <ResourceLink link="/doctors" buttonText="Doctors" />
              <ResourceLink link="/treatment" buttonText="Treatments" />
              <ResourceLink
                link="https://open.spotify.com/show/3eWMTeFomVrHpP7bdcgeEq?si=rrnIfGvQRtCu39y5lU14-A&utm_source=sms&utm_medium=sms&nd=1&_branch_match_id=1139711590585308397&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy7IL8lMq9TLyczL1nePSs0KKA9xyndJAgD9ljQuIAAAAA%3D%3D"
                buttonText="Podcasts"
              />
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
              <p className="description">LEAVE US A REVIEW</p>
              <a
                href="https://www.google.com/search?q=kinetic+centre+frisco&sca_esv=564233762&ei=R3D-ZOX7KaCjqtsPhPia6Ao&ved=0ahUKEwilu4fmtqGBAxWgkWoFHQS8Bq0Q4dUDCBA&uact=5&oq=kinetic+centre+frisco&gs_lp=Egxnd3Mtd2l6LXNlcnAiFWtpbmV0aWMgY2VudHJlIGZyaXNjbzIOEC4YigUYxwEYrwEYkQIyBRAAGIAEMgIQJjIdEC4YigUYxwEYrwEYkQIYlwUY3AQY3gQY4ATYAQFI4SBQ6RRYgB1wA3gAkAEAmAHCAqABgg6qAQcwLjIuNS4xuAEDyAEA-AEBwgIOEC4YrwEYxwEYgAQYsAPCAgsQABiKBRiGAxiwA8ICBxAAGIoFGEPCAg0QLhivARjHARiKBRhDwgILEC4YgAQYxwEYrwHCAggQABiKBRiGA8ICCxAuGK8BGMcBGIAEwgIGEAAYFhgewgIMEC4YFhgeGMcBGNEDwgIcEC4YrwEYxwEYigUYQxiXBRjcBBjeBBjgBNgBAeIDBBgBIEGIBgGQBgK6BgYIARABGBQ&sclient=gws-wiz-serp#lrd=0x864c3d54a445a495:0xdc25305eddb5b2a0,1"
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
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
      />
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
