"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FsLightbox from "fslightbox-react";
import { Spline_Sans } from "next/font/google";
import "../styles/doctors.scss";
import BottomBanner from "../components/BottomBanner";

import Image from "next/image";

import beau from "public/beau-min.png";
import brennan from "public/brennan.png";
import matt from "public/matt.png";
import kristina from "public/Dr.Myles.png";
import brittany from "public/BrittanyPhoto.png";
import tyler from "public/tyler.png"
import play from "public/play-button.png";

const splineSans = Spline_Sans({
  weight: ["400", "600"],
  preload: false,
  variable: "--font-spline",
});

const doctorsData = [
  {
    name: "Dr. Beau Sauls",
    title: "CEO of Kinetic Centres & Practitioner",
    description:
      "Dr. Sauls is the leading Kinetisense expert in the US and specializes in the Kinetisense Advanced Movement Screening and treatments/rehab to help improve areas of dysfunction.",
    bookLink: "https://kineticcentredallas.janeapp.com/",
    videoSrc: "https://www.youtube.com/watch?v=pPr8_pLSyuM", // Replace with the actual video source
    imageSrc: beau,
    instagram: "https://www.instagram.com/the3ddoc/",
    facebook: "https://www.facebook.com/KineticCentreDallas?mibextid=hu50Ix",
  },
  {
    name: "Dr. Brennan Riche",
    title: "Practitioner",
    description:
      "With the knowledge from chiropractic school and years of experience from strength training. His passion is helping patients overcome the obstacles necessary to perform well in life, sports, or work.",
    bookLink:
      "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book#/staff_member/2",
    videoSrc: "https://www.youtube.com/watch?v=d0nLzMhNR-s", // Replace with the actual video source
    imageSrc: brennan,
    instagram: "https://www.instagram.com/3dbarbelldoc/",
    facebook: "https://www.facebook.com/KineticCentreDallas?mibextid=hu50Ix",
  },
  {
    name: "Dr. Matt Ortega",
    title: "Clinic Director & Practitioner",
    description:
      "With the knowledge from chiropractic school and years of experience from strength training. His passion is helping patients overcome the obstacles necessary to perform well in life, sports, or work.",
    bookLink:
      "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book#/staff_member/11",
    videoSrc: "https://www.youtube.com/watch?v=ynGMtXHmNj4", // Replace with the actual video source
    imageSrc: matt,
    instagram: "https://www.instagram.com/3dswingdoc/",
    facebook: "https://www.facebook.com/KineticCentreFrisco?mibextid=hu50Ix",
  },
  {
    name: "Dr. Kristina Myles",
    title: "Practitioner & Director of Marketing",
    description:
      "Dr. Kristina Myles, a Certified Chiropractic Sports Practitioner®, excels in resolving injuries through soft tissue techniques and dry needling with an extensive athletic background.",
    bookLink:
      "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book#/staff_member/15",
    videoSrc: "https://www.youtube.com/watch?v=Wl42naYXv_o", // Replace with the actual video source
    imageSrc: kristina,
    instagram: "https://www.instagram.com/3dsportsdoc/",
    facebook: "https://www.facebook.com/KineticCentreFrisco?mibextid=hu50Ix",
  },
  {
    name: "Dr. Tyler Garcia",
    title: "Practitioner",
    description:
      "As a previous athlete and speed and conditioning coach, I have developed a passion for teaching and growing physically and mentally as a human/athlete. Through Chiropractic, I utilize my previous experience to direct and manage the neuromuscular system to improve recovery time and prevent re-injury.",
    bookLink:
      "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book#/staff_member/20",
    videoSrc: "", // Replace with the actual video source
    imageSrc: tyler,
    instagram: "https://www.instagram.com/3dkettlebelldoc?igsh=MXR4eGthamN6NTVsZA==",
    facebook: "https://www.facebook.com/KineticCentreDallas?mibextid=hu50Ix",
  },
  {
    name: "Brittany gibson",
    title: "sports massage therapist",
    description:
      "Brittany Gibson, available at both Kinetic Centre Locations, specializes in athletic recovery. With her expertise in athlete-tailored massage techniques, she empowers individuals to reach their peak physical well-being. ",
    bookLink: "https://kineticcentredallas.janeapp.com/",
    videoSrc: "https://www.youtube.com/watch?v=FtdOqk4XfKA", // Replace with the actual video source
    imageSrc: brittany,
    instagram: "https://www.instagram.com/3dmt_brittany/",
    facebook: "https://www.facebook.com/KineticCentreDallas?mibextid=hu50Ix",
  },
];

export default function Doctors() {
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  // const [videoType, setVideoType] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [toggler, setToggler] = useState(false);

  const openLightbox = (videoSrc) => {
    setToggler(!toggler);
    setVideoSrc(videoSrc);
    setOpen(true);
    console.log(videoSrc);
  };

  return (
    <div>
      <Header />
      <main className="doctors">
        <div className="doctors-hero">
          <div className="wrapper">
            <div className="hero-text">
              <h2 className="h2 uppercase">
                our practitioners - elite & DETERMINED
              </h2>
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
              {doctorsData.map((doctor, index) => (
                <div className="headshot" key={index}>
                  <div className="left-side">
                    <div className="image-container">
                      <Image src={doctor.imageSrc} alt={doctor.name} />
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="text-container">
                      <p className="super-header uppercase">{doctor.title}</p>
                      <p className="title h3 uppercase">{doctor.name}</p>
                      <p className="description">{doctor.description}</p>
                    </div>
                    <a
                      href={doctor.bookLink}
                      target="_blank"
                      className="button dark"
                    >
                      Book Now
                    </a>
                    {doctor.videoSrc ?                     
                    <button
                      type="button"
                      className="button light"
                      onClick={() => openLightbox(doctor.videoSrc)}
                    >
                      View Bio{" "}
                      <Image className="play-button" src={play} alt="alt" />
                    </button> 
                    : '' }

                    <div className="socials-container">
                      <Link href={doctor.instagram} target="_blank">
                        <Image src={instagram} alt="instagram" />
                      </Link>
                      <Link href={doctor.facebook} target='_blank'>
                        <Image src={facebook} alt="facebook" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <BottomBanner />
      </main>
      <Footer />

      <FsLightbox toggler={toggler} sources={[videoSrc]} />
    </div>
  );
}

import facebook from "public/doctors/Facebook logo.svg";
import instagram from "public/doctors/Group.svg";
import twitter from "public/doctors/Group-1.svg";
import Link from "next/link";

// const SocialLinks = () => {
//   return (
//     <div className="socials-container">
//       <Link href="">
//         <Image src={instagram} alt="instagram" />
//       </Link>
//       <Link href="/">
//         <Image src={twitter} alt="twitter" />
//       </Link>
//       <Link href="/">
//         <Image src={facebook} alt="facebook" />
//       </Link>
//     </div>
//   );
// };
