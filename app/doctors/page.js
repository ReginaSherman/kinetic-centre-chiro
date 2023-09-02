"use client";

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Spline_Sans } from "next/font/google";
import "../styles/doctors.scss";
import BottomBanner from "../components/BottomBanner";

import Image from "next/image";

import beau from "public/doctors/beau.png";
import brennan from "public/doctors/brennan.png";
import matt from "public/doctors/matt.png";
import kristina from "public/doctors/kristina.png";

const splineSans = Spline_Sans({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-spline",
});

export default function Doctors() {
  return (
    <div>
      <Header />
      <main className="doctors">
        <div className="doctors-hero">
          <div className="wrapper">
            <div className="hero-text">
              <h2 className="h2 uppercase">our doctors - elite & DETERMINED</h2>
              <p className={`description + ${splineSans.className}`}>
                We are committed to providing patient-focused care that allows
                you to enjoy life pain-free. Please call 469-697-9545 to speak
                with our team for more information about scheduling.
              </p>
              <a
                href="https://kineticcentredallas.janeapp.com/"
                target="_blank"
                className="button dark"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>

        <section>
          <div className="wrapper">
            <div className="headshot-container">
              <div className="headshot">
                <div className="left-side">
                  <div className="image-container">
                    <Image src={beau} alt="alt" />
                  </div>
                </div>
                <div className="right-side">
                  <div className="text-container">
                    <p className="super-header uppercase">
                      ceo of kinetic centres
                    </p>
                    <p className="title h3 uppercase">dR. bEAU SAULS</p>

                    <p className="description">
                      Dr. Sauls is the leading Kinetisense expert in the US and
                      specializes in the Kinetisense Advanced Movement Screening
                      and treatments/rehab to help improve areas of dysfunction.
                    </p>
                  </div>
                  <a
                    href="https://kineticcentredallas.janeapp.com/"
                    target="_blank"
                    className="button dark"
                  >
                    Book Now
                  </a>
                  <SocialLinks />
                </div>
              </div>

              <div className="headshot">
                <div className="left-side">
                  <div className="image-container">
                    <Image src={brennan} alt="alt" />
                  </div>
                </div>
                <div className="right-side">
                  <div className="text-container">
                    <p className="super-header uppercase">practitioner</p>
                    <p className="title h3 uppercase">dR. brennan Riche</p>

                    <p className="description">
                      With the knowledge from chiropractic school and years of
                      experience from strength training. His passion is helping
                      patients overcome the obstacles necessary to perform well
                      in life, sports, or work.
                    </p>
                  </div>
                  <a
                    href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book#/staff_member/2"
                    target="_blank"
                    className="button dark"
                  >
                    Book Now
                  </a>
                  <SocialLinks />
                </div>
              </div>

              <div className="headshot">
                <div className="left-side">
                  <div className="image-container">
                    <Image src={matt} alt="alt" />
                  </div>
                </div>
                <div className="right-side">
                  <div className="text-container">
                    <p className="super-header uppercase">clinic DIRECTOR</p>
                    <p className="title h3 uppercase">dR. matt ortega</p>

                    <p className="description">
                      With the knowledge from chiropractic school and years of
                      experience from strength training. His passion is helping
                      patients overcome the obstacles necessary to perform well
                      in life, sports, or work.
                    </p>
                  </div>
                  <a
                    href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book#/staff_member/11"
                    target="_blank"
                    className="button dark"
                  >
                    Book Now
                  </a>
                  <SocialLinks />
                </div>
              </div>

              <div className="headshot">
                <div className="left-side">
                  <div className="image-container">
                    <Image src={kristina} alt="alt" />
                  </div>
                </div>
                <div className="right-side">
                  <div className="text-container">
                    <p className="super-header uppercase">
                      director of marketing
                    </p>
                    <p className="title h3 uppercase">
                      dR. kristina myles, dc, ccsp
                    </p>

                    <p className="description">
                      Dr. Kristina Myles, a Certified Chiropractic Sports
                      Practitioner®, excels in resolving injuries through soft
                      tissue techniques and dry needling with an extensive
                      athletic background.
                    </p>
                  </div>
                  <a
                    href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book#/staff_member/15"
                    target="_blank"
                    className="button dark"
                  >
                    Book Now
                  </a>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </section>

        <BottomBanner />
      </main>
    </div>
  );
}

import facebook from "public/doctors/Facebook logo.svg";
import instagram from "public/doctors/Group.svg";
import twitter from "public/doctors/Group-1.svg";
import Link from "next/link";

const SocialLinks = () => {
  return (
    <div className="socials-container">
      <Link href="/">
        <Image src={instagram} alt="instagram" />
      </Link>
      <Link href="/">
        <Image src={twitter} alt="twitter" />
      </Link>
      <Link href="/">
        <Image src={facebook} alt="facebook" />
      </Link>
    </div>
  );
};
