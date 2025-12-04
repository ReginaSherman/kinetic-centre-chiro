"use client";
import { useEffect } from "react";
import "../styles/BookingModal.scss";

export default function BookingModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleBookNowClick = () => {
    // You can add analytics tracking here if needed
  };

  return (
    <div 
      className="modal-backdrop" 
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="modal-content">
        <button 
          className="close-button" 
          onClick={onClose}
          aria-label="Close booking modal"
        >
          ×
        </button>
        <h2 id="booking-modal-title">Book an Appointment</h2>
        <div className="location-buttons">
          <a
            href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book/"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
            onClick={handleBookNowClick}
          >
            Dallas
          </a>
          <a
            href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book/"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
            onClick={handleBookNowClick}
          >
            Frisco
          </a>
          <a
            href="https://kineticcentreusa.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
            onClick={handleBookNowClick}
          >
            Denver
          </a>
          <a
            href="https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book/#/staff_member/1"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
            onClick={handleBookNowClick}
          >
            Pelvic Floor Therapy
          </a>
        </div>
      </div>
    </div>
  );
} 