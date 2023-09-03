"use client";
import "../styles/header.scss";
import { useEffect, useState } from "react"; // Import useEffect to handle page activation

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // // Determine the active page based on the current URL
  // const pathname = window.location.pathname;
  // const isHomePage = pathname === "/";
  // const isTreatmentPage = pathname === "/treatment";
  // const isDoctorsPage = pathname === "/doctors";
  // const isAboutUsPage = pathname === "/about-us";
  // const isResourcesPage = pathname === "/resources";

  // // Apply the active class based on the active page
  // useEffect(() => {
  //   const navLinks = document.querySelectorAll(".nav-link");
  //   navLinks.forEach((link) => {
  //     link.classList.remove("active");
  //     if (isHomePage && link.getAttribute("href") === "/") {
  //       link.classList.add("active");
  //     } else if (
  //       isTreatmentPage &&
  //       link.getAttribute("href") === "/treatment"
  //     ) {
  //       link.classList.add("active");
  //     } else if (isDoctorsPage && link.getAttribute("href") === "/doctors") {
  //       link.classList.add("active");
  //     } else if (isAboutUsPage && link.getAttribute("href") === "/about-us") {
  //       link.classList.add("active");
  //     } else if (
  //       isResourcesPage &&
  //       link.getAttribute("href") === "/resources"
  //     ) {
  //       link.classList.add("active");
  //     }
  //   });
  // }, []);

  return (
    <header id="header" className={`header ${isMenuOpen ? "open" : ""}`}>
      <div className="wrapper">
        <nav className="navbar">
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
                doctors
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
          </ul>
        </nav>
        <div className="buttons-container flex-row">
          <a
            href="https://kineticcentredallas.janeapp.com/"
            target="_blank"
            className="button dark"
          >
            Book Now
          </a>
          <a href="/" target="_blank" className="button light">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
