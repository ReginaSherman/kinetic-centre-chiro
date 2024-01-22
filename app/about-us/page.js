"use client";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Spline_Sans } from "next/font/google";

import TestimonialSlider from "../components/TestimonialSlider";
import BottomBanner from "../components/BottomBanner";
import "../styles/about.scss";

const splineSans = Spline_Sans({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-spline",
});

import dr from "public/images/PHOTO_1.jpg";
import beau from "public/beau-headshot.webp";
import brennan from "public/brennan-headshot.webp";
import diane from "public/diane-headshot.webp";
import brittany from "public/Brittany-headshot.jpeg";
import matt from "public/matt-headshot.png";
import kristina from "public/kristina-headshot.png";
import tyler from "public/drtyler.webp";

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
export default function About() {
  return (
    <div>
      <Header />
      <main className="about">
        <div className="about-hero">
          <div className="wrapper">
            <div className="hero-text">
              <h2 className="h2 uppercase">WHAT WE STAND FOR</h2>
              <p className={`description + ${splineSans.className}`}>
                The mission of Kinetic Centre is to provide premium, thorough,
                and objective care led by evidence based practices to treat the
                cause of dysfunction.
              </p>
              <a href="/" target="_blank" className="button light">
                Hear from our patients
              </a>
              <a
                href="https://kineticcentredallas.janeapp.com/"
                target="_blank"
                className="button dark"
              >
                Book an Appointment
              </a>
              <div className="socials-container">
                <a href="https://www.instagram.com" target="_blank">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.2588 11.1741H14.7409C12.7429 11.1741 11.1173 12.7996 11.1173 14.7977V27.3156C11.1173 29.3136 12.7429 30.9397 14.7409 30.9397H27.2588C29.2569 30.9397 30.8829 29.3141 30.8829 27.3156V14.7977C30.8829 12.7996 29.2574 11.1741 27.2588 11.1741ZM20.9999 27.5636C17.4123 27.5636 14.4934 24.6447 14.4934 21.0566C14.4934 17.4691 17.4123 14.5501 20.9999 14.5501C24.5879 14.5501 27.5068 17.4691 27.5068 21.0566C27.5068 24.6442 24.5875 27.5636 20.9999 27.5636ZM27.716 15.8954C26.8667 15.8954 26.1761 15.2048 26.1761 14.356C26.1761 13.5071 26.8667 12.8165 27.716 12.8165C28.5648 12.8165 29.2555 13.5071 29.2555 14.356C29.2555 15.2048 28.5648 15.8954 27.716 15.8954Z"
                      fill="#111311"
                    />
                    <path
                      d="M21.0001 17.2996C18.9291 17.2996 17.2427 18.985 17.2427 21.0561C17.2427 23.128 18.9291 24.814 21.0001 24.814C23.0721 24.814 24.7571 23.128 24.7571 21.0561C24.7571 18.9855 23.0716 17.2996 21.0001 17.2996Z"
                      fill="#111311"
                    />
                    <path
                      d="M21 0C9.40248 0 0 9.40248 0 21C0 32.5975 9.40248 42 21 42C32.5975 42 42 32.5975 42 21C42 9.40248 32.5975 0 21 0ZM33.6321 27.3156C33.6321 30.8302 30.7735 33.6887 27.259 33.6887H14.741C11.2269 33.6887 8.3679 30.8302 8.3679 27.3156V14.7977C8.3679 11.2835 11.2269 8.42452 14.741 8.42452H27.259C30.7735 8.42452 33.6321 11.2835 33.6321 14.7977V27.3156Z"
                      fill="#111311"
                    />
                  </svg>
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.001 42C32.599 42 42.001 32.598 42.001 21C42.001 9.40202 32.599 0 21.001 0C9.403 0 0.000976562 9.40202 0.000976562 21C0.000976562 32.598 9.403 42 21.001 42Z"
                      fill="#111311"
                    />
                    <path
                      d="M33.8644 15.0922C32.9645 15.4912 31.9964 15.7611 30.9812 15.8817C32.0177 15.2606 32.8132 14.278 33.1887 13.1051C32.2188 13.6805 31.144 14.0979 30.0011 14.3229C29.0855 13.3477 27.7809 12.7383 26.3363 12.7383C23.5647 12.7383 21.3167 14.9862 21.3167 17.7579C21.3167 18.1513 21.3613 18.5343 21.4474 18.9019C17.2757 18.6926 13.5768 16.6944 11.1008 13.6565C10.6689 14.3978 10.421 15.2606 10.421 16.1804C10.421 17.9215 11.3079 19.4585 12.654 20.3584C11.8316 20.3326 11.057 20.1069 10.3806 19.7299C10.3802 19.7513 10.3802 19.7726 10.3802 19.7936C10.3802 22.2257 12.1112 24.2543 14.4071 24.7151C13.9863 24.8304 13.5419 24.8914 13.0849 24.8914C12.7607 24.8914 12.4466 24.8603 12.1404 24.8019C12.779 26.7957 14.6324 28.247 16.8294 28.2878C15.1112 29.6343 12.9471 30.4366 10.5947 30.4366C10.1904 30.4366 9.78989 30.413 9.39795 30.3662C11.6182 31.7909 14.2573 32.6216 17.0919 32.6216C26.3247 32.6216 31.3739 24.973 31.3739 18.3392C31.3739 18.1217 31.369 17.905 31.3593 17.6901C32.3408 16.9826 33.1917 16.0988 33.8644 15.0922Z"
                      fill="#F1F2F2"
                    />
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank">
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 42 42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_21_368)">
                      <path
                        d="M21 42C32.598 42 42 32.598 42 21C42 9.40202 32.598 0 21 0C9.40202 0 0 9.40202 0 21C0 32.598 9.40202 42 21 42Z"
                        fill="#111311"
                      />
                      <path
                        d="M27.8283 6.4458H23.1763C20.4156 6.4458 17.345 7.6069 17.345 11.6086C17.3584 13.0029 17.345 14.3383 17.345 15.8412H14.1512V20.9233H17.4438V35.5539H23.494V20.8268H27.4873L27.8487 15.8269H23.3897C23.3897 15.8269 23.3997 13.6028 23.3897 12.9569C23.3897 11.3755 25.0352 11.466 25.1342 11.466C25.9172 11.466 27.4397 11.4683 27.8306 11.466V6.4458H27.8283Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_21_368">
                        <rect width="42" height="42" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
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

        <section id="our-team" className="section our-team">
          <div className="wrapper">
            <div className="dallas-team">
              <p className="h2 uppercase">Meet our Dallas Team</p>
              <div className="row">
                <TeamMember
                  image={beau}
                  alt="Doctor Beau"
                  teamMemberRole="CEO of Kinetic Centres & Practitioner"
                  teamMemberName="Dr. Beau Sauls"
                  teamMemberAbout="Dr. Sauls is the leading Kinetisense expert in the US and specializes in the Kinetisense Advanced Movement Screening and treatments/rehab to help improve areas of dysfunction."
                />
                <TeamMember
                  image={brennan}
                  alt="Doctor Brennan"
                  teamMemberRole="practitioner"
                  teamMemberName="dR. brennan riche"
                  teamMemberAbout="With the knowledge from chiropractic school and years of experience from strength training. His passion is helping patients overcome the obstacles necessary to perform well in life, sports, or work."
                />
                  <TeamMember
                    image={tyler}
                    alt="Tyler Garcia"
                    teamMemberRole="practitioner"
                    teamMemberName="tyler garcia"
                    teamMemberAbout="As a previous athlete and speed and conditioning coach, I have developed a passion for teaching and growing physically and mentally as a human/athlete. Through Chiropractic, I utilize my previous experience to direct and manage the neuromuscular system to improve recovery time and prevent re-injury."
                  />
                <TeamMember
                  image={diane}
                  alt="Diane Shepherd"
                  teamMemberRole="functional nutrition & lifestyle practitioner"
                  teamMemberName="diane shepherd"
                  teamMemberAbout="As a former gymnast, cheerleader and marathon runner, Diane has a lifelong interest in health, wellness and fitness. She loves helping people build and maintain a strong foundation."
                />
                <TeamMember
                  image={brittany}
                  alt="Brittany Gibson"
                  teamMemberRole="sports massage therapist"
                  teamMemberName="brittany gibson"
                  teamMemberAbout="Brittany Gibson, available at both Kinetic Centre Locations, specializes in athletic recovery. With her expertise in athlete-tailored massage techniques, she empowers individuals to reach their peak physical well-being. "
                />
              </div>
            </div>
            <div className="frisco-team">
              <p className="h2 uppercase">Meet our Frisco Team</p>
              <div className="row">
                <TeamMember
                  image={matt}
                  alt="Doctor Matt"
                  teamMemberRole="Clinic Director & Practitioner"
                  teamMemberName="dR. matt ortega"
                  teamMemberAbout="With the knowledge from chiropractic school and years of experience from strength training. His passion is helping patients overcome the obstacles necessary to perform well in life, sports, or work."
                />
                <TeamMember
                  image={kristina}
                  alt="Doctor Kristina"
                  teamMemberRole="Practitioner & Director of Marketing"
                  teamMemberName="dR. kristina myles"
                  teamMemberAbout="Dr. Kristina Myles, a Certified Chiropractic Sports Practitioner®, excels in resolving injuries through soft tissue techniques and dry needling with an extensive athletic background. 
              "
                />
                <TeamMember
                  image={brittany}
                  alt="Brittany Gibson"
                  teamMemberRole="sports massage therapist"
                  teamMemberName="brittany gibson"
                  teamMemberAbout="Brittany Gibson, available at both Kinetic Centre Locations, specializes in athletic recovery. With her expertise in athlete-tailored massage techniques, she empowers individuals to reach their peak physical well-being. "
                />
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
        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image";

const TeamMember = ({
  image,
  teamMemberRole,
  teamMemberName,
  teamMemberAbout,
  alt,
}) => {
  return (
    <div className="container">
      <div className="image-container">
        <Image src={image} alt={alt} />
      </div>
      <div className="text-container">
        <p className="super-header uppercase">{teamMemberRole}</p>
        <p className="title h3 uppercase">{teamMemberName}</p>
        <p className="description">{teamMemberAbout}</p>
      </div>
    </div>
  );
};
