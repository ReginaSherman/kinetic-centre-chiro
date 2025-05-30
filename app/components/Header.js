"use client";
import "../styles/header.scss";
import { useEffect, useState } from "react"; // Import useEffect to handle page activation
import Image from "next/image";
import Link from "next/link";
import { trackBookNowClick } from "../utils/analytics";
import BookingModal from "./BookingModal";

import smallLogo from "/public/kc-logo-small.svg";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    console.log('clicked')
    setMenuOpen(!isMenuOpen);
  };

  // Determine the active page based on the current URL within a useEffect
  useEffect(() => {
    const pathname = window.location.pathname;
    const isHomePage = pathname === "/";
    const isTreatmentPage = pathname === "/treatment";
    const isDoctorsPage = pathname === "/doctors";
    const isAboutUsPage = pathname === "/about-us";
    const isResourcesPage = pathname === "/resources";

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (isHomePage && link.getAttribute("href") === "/") {
        link.classList.add("active");
      } else if (
        isTreatmentPage &&
        link.getAttribute("href") === "/treatment"
      ) {
        link.classList.add("active");
      } else if (isDoctorsPage && link.getAttribute("href") === "/doctors") {
        link.classList.add("active");
      } else if (isAboutUsPage && link.getAttribute("href") === "/about-us") {
        link.classList.add("active");
      } else if (
        isResourcesPage &&
        link.getAttribute("href") === "/resources"
      ) {
        link.classList.add("active");
      }
    });
    const logoContainer = document.querySelector(".logo-container");
    if (logoContainer) {
      if (isHomePage) {
        logoContainer.classList.add("hide");
      } else {
        logoContainer.classList.remove("hide");
      }
    }
  }, []);

  const handleBookNowClick = () => {
    trackBookNowClick();
    setModalOpen(true);
  };

  return (
    <header id="header" className={`header ${isMenuOpen ? "open" : ""}`}>
      <div className="wrapper">
        <nav className="navbar">
          <div className="logo-container">
            <Link href="/">
              <Image src={smallLogo} alt="kinetic centre logo" />
            </Link>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul className={`flex-row ${isMenuOpen ? "open" : ""}`}>
            <li className="list-item">
              <a href="/" className="nav-link">
                home
              </a>
            </li>
            <li className="list-item">
              <a href="/treatment" className="nav-link">
                treatments
              </a>
            </li>
            <li className="list-item">
              <a href="/doctors" className="nav-link">
                practitioners
              </a>
            </li>
            <li className="list-item">
              <a href="/about-us" className="nav-link">
                about us
              </a>
            </li>
            <li className="list-item">
              <a href="/resources" className="nav-link">
                resources
              </a>
            </li>
            <li className="list-item">
              <div className="buttons-container flex-row">
                <button
                  className="button dark"
                  onClick={handleBookNowClick}
                >
                  Book Now
                </button>
                <a
                  href="https://kineticcentredallas.janeapp.com/login"
                  target="_blank"
                  className="button light"
                >
                  Sign In
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </header>
  );
}
