"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingModal from "../components/BookingModal";

import Image from "next/image";
import "../styles/treatments.scss";

// Using CSS font import instead of Next.js font optimization
import header from "/public/TreatmentHeader.png";
import TreatmentsGrid from "../components/TreatmentsGrid";
import { trackBookAppointmentClick } from "../utils/analytics";


export default function Treatment() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleBookAppointmentClick = () => {
    trackBookAppointmentClick();
    setModalOpen(true);
  };

  return (
    <div>
      <Header />
      <main className="treatment">
        <div className="treatment-hero">
          <div className="wrapper">
            <div className="hero-text">
              <div className="left-side">
                <div className="left-border">
                  <h2 className="h2 uppercase">TREATMENTS & sERVICES</h2>
                  <p className="description font-spline">
                    Kinetic Centre USA is powered by Kinetisense, the 3D
                    functional movement analysis technology. Our goal is to
                    provide you the same level of treatment, rehab, technology,
                    assessment and advanced techniques that professional
                    athletes use at an affordable price.
                  </p>
                </div>

                <p className="superscript font-spline">
                  Have questions?{" "}
                  <span className="green">Call us at 469-697-9545</span>
                </p>
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
                    className="treatment-photo"
                    src={header}
                    width={629}
                    height={"auto"}
                    alt="alt"
                  />
                </div>
                <div className="deco"></div>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="wrapper">
            <TreatmentsGrid />
          </div>
        </section>

        <section className="section bottom-banner">
          <div className="wrapper">
            <div className="cta-container">
              <h3 className="uppercase">NOT SURE WHAT YOU NEED?</h3>
              <p className="description">
                BOOK A CONSULTATION WITH OUR EXPERTS
              </p>
              <button
                className="button dark"
                onClick={handleBookAppointmentClick}
              >
                Book a Consultation
              </button>
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
