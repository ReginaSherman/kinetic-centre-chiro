"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomBanner from "../components/BottomBanner";
import Image from "next/image";
import "../styles/pelvic-floor.scss";
import { trackBookAppointmentClick } from "../utils/analytics";

import beau from "public/headshots/Beau-headshot-2.jpeg";

const PELVIC_FLOOR_BOOKING_URL = "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book/#/staff_member/1";

const WEB3FORMS_ACCESS_KEY = "14718ab9-cbe4-4a3a-bb2f-4ae90cc5ebc0";

export default function PelvicFloor() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookAssessmentClick = () => {
    trackBookAppointmentClick();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New Pelvic Floor Therapy Lead",
          from_name: "Kinetic Centre Website",
          botcheck: "",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          type: "success",
          message: "Thank you! We'll be in touch soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFormStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setFormStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div>
      <Header />
      <main className="pelvic-floor">
        <div className="pelvic-floor-hero">
          <div className="wrapper">
            <div className="hero-text">
              <h1 className="h2 uppercase">
                Restore Strength, Stability & Confidence Through Functional Pelvic Floor Therapy
              </h1>
              <p className="description font-spline">
                Dr. Beau at Kinetic Centre specializes in pelvic floor therapy that looks beyond symptoms to address the root causes of pain, dysfunction, or imbalance. Our approach blends evidence-based assessment with whole-body movement, helping you reclaim comfort, performance, and confidence in your daily life.
              </p>
              <a
                href={PELVIC_FLOOR_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button dark"
                onClick={handleBookAssessmentClick}
              >
                BOOK A VIRTUAL OR IN-PERSON CONSULTATION
              </a>
            </div>
          </div>
        </div>

        <section className="section lead-form-section">
          <div className="wrapper">
            <div className="lead-form-content">
              <div className="form-text">
                <h2 className="h2 uppercase">Have Questions?</h2>
                <p className="description font-spline">
                  Not ready to book yet? Leave your information and we&apos;ll reach out to answer any questions about pelvic floor therapy.
                </p>
              </div>
              <form className="lead-form" onSubmit={handleFormSubmit}>
                {/* Honeypot field for spam protection - hidden from users */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="font-spline">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="font-spline"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="font-spline">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                      className="font-spline"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="font-spline">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="(555) 555-5555"
                      className="font-spline"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="font-spline">Message (optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your situation..."
                    className="font-spline"
                    rows={2}
                  />
                </div>
                <button 
                  type="submit" 
                  className="button dark submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get In Touch"}
                </button>
                {formStatus.message && (
                  <p className={`form-message ${formStatus.type} font-spline`}>
                    {formStatus.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        <section className="section approach-section">
          <div className="wrapper">
            <div className="approach-content">
              <div className="left-border">
                <h2 className="h2 uppercase">A Smarter Approach to Pelvic Health</h2>
                <p className="description font-spline">
                  We view the pelvic floor as part of a dynamic, interconnected system. That&apos;s why every session begins with a comprehensive functional movement assessment—allowing us to identify movement patterns, muscular imbalances, and compensations that influence pelvic floor function.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section offerings-section">
          <div className="wrapper">
            <h2 className="h2 uppercase section-title">What We Offer</h2>
            <div className="offerings-grid">
              <div className="offering-card">
                <div className="card-accent"></div>
                <h3 className="h3 uppercase">Functional Movement Assessment</h3>
                <p className="description font-spline">
                  Using targeted screens and movement analysis, we uncover how your body is moving as a whole and determine which patterns may be contributing to pelvic floor tension, weakness, or pain.
                </p>
              </div>
              <div className="offering-card">
                <div className="card-accent"></div>
                <h3 className="h3 uppercase">Personalized Rehab & Corrective Exercises</h3>
                <p className="description font-spline">
                  We build a custom rehabilitation plan designed to restore proper coordination, stability, and strength—not just in the pelvic floor, but throughout the core, hips, and spine.
                </p>
              </div>
              <div className="offering-card">
                <div className="card-accent"></div>
                <h3 className="h3 uppercase">Soft Tissue Therapy</h3>
                <p className="in-person-tag font-spline">In Person Only</p>
                <p className="description font-spline">
                  Hands-on techniques release restrictions, improve mobility, and reduce pain. This may include myofascial release, trigger point therapy, and gentle manual techniques tailored to your comfort level.
                </p>
              </div>
              <div className="offering-card">
                <div className="card-accent"></div>
                <h3 className="h3 uppercase">Breathwork for Pelvic Floor Connection</h3>
                <p className="description font-spline">
                  Breathing is foundational to pelvic function. We guide you through techniques that retrain the diaphragm-pelvic floor relationship, improve relaxation or activation, and support overall core integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section who-we-help-section">
          <div className="wrapper">
            <div className="who-we-help-content">
              <h2 className="h2 uppercase">Who We Help</h2>
              <p className="intro-text font-spline">Our therapy supports individuals experiencing:</p>
              <ul className="conditions-list font-spline">
                <li>Pelvic pain or tightness</li>
                <li>Back or hip discomfort</li>
                <li>Erectile Dysfunction and other associated syndromes</li>
                <li>Urinary leakage or urgency</li>
                <li>Core weakness or instability</li>
                <li>Pain with movement or exercise</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section specialist-section">
          <div className="wrapper">
            <div className="specialist-content">
              <div className="specialist-image">
                <Image src={beau} alt="Dr. Beau Sauls" />
              </div>
              <div className="specialist-text">
                <p className="super-header uppercase">Your Specialist</p>
                <h3 className="h3 uppercase">Dr. Beau Sauls</h3>
                <p className="description font-spline">
                  Dr. Sauls is the leading Kinetisense expert in the US and specializes in the Kinetisense Advanced Movement Screening and treatments/rehab to help improve areas of dysfunction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section videos-section">
          <div className="wrapper">
            <h2 className="h2 uppercase section-title">Learn More From Dr. Beau</h2>
            
            <div className="featured-video">
              <h3 className="h3 uppercase">Full Interview</h3>
              <p className="video-description font-spline">Is Functional Movement the CURE for Pelvic Floor Dysfunction?!? Interview with an industry expert</p>
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/jgho3ZXK7PY"
                  title="Is Functional Movement the CURE for Pelvic Floor Dysfunction?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="shorts-section">
              <h3 className="h3 uppercase">Quick Insights</h3>
              <div className="shorts-grid">
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/zs4Mbyxl0Nk"
                      title="Nerve Compression and Anxiety with PFD"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Nerve Compression & Anxiety with PFD</p>
                </div>
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/gx9lrJYnj3M"
                      title="Is Functional Movement a SCAM?"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Is Functional Movement a SCAM?</p>
                </div>
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/SsmDan7j-XQ"
                      title="Weak Core and Glutes with PFD"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Weak Core & Glutes with PFD</p>
                </div>
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/fmRMtnpW7HY"
                      title="Importance of Functional Movement and PFD Recovery"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Functional Movement & PFD Recovery</p>
                </div>
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/Zie61vbtaN4"
                      title="Fight or Flight Overdrive and CPPS/PFD"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Fight or Flight & CPPS/PFD</p>
                </div>
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/ZivYXO0LoPU"
                      title="Holistic Approach to PFD/CPPS Recovery"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Holistic Approach to Recovery</p>
                </div>
                <div className="short-video">
                  <div className="short-container">
                    <iframe
                      src="https://www.youtube.com/embed/rXJ570NUJgc"
                      title="Anxiety and Pelvic Floor Dysfunction"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <p className="short-title font-spline">Anxiety & Pelvic Floor Dysfunction</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-section">
          <div className="wrapper">
            <div className="cta-content">
              <h2 className="h2 uppercase">Ready to Get Started?</h2>
              <p className="description font-spline">
                Feel supported. Feel strong. Feel like yourself again. Whether you&apos;re recovering from injury or seeking better performance and comfort, our integrated approach helps you reconnect with your body in a powerful, sustainable way.
              </p>
              <a
                href={PELVIC_FLOOR_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button dark"
                onClick={handleBookAssessmentClick}
              >
                Book Your Consultation Today
              </a>
            </div>
          </div>
        </section>

        <BottomBanner />
      </main>
      <Footer />
    </div>
  );
}
