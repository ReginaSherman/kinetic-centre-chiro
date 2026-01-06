"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FsLightbox from "fslightbox-react";
// Using CSS font import instead of Next.js font optimization
import "../styles/doctors.scss";
import BottomBanner from "../components/BottomBanner";
import BookingModal from "../components/BookingModal";

import Image from "next/image";

import beau from "public/full-body/Beau-fullbody.png";
import brennan from "public/full-body/Riche-fullbody.png";
import matt from "public/matt.png";
import kristina from "public/full-body/Myles-fullbody.png";
import brittany from "public/full-body/Gibson-fullbody.png";
import play from "public/play-button.png";
import grant from "public/full-body/Smith-fullbody.png"
import mcbride from "public/full-body/McBride-fullbody.png"
import sweet from "public/full-body/Sweet-fullbody.png"
import lopez from "public/full-body/Lopez-fullbody.png"
import evan from "public/full-body/Hall-fullbody.png"
import { trackBookNowClick } from "../utils/analytics";


const doctorsData = [
  // DALLAS TEAM
  {
    name: "Dr. Beau Sauls",
    title: "CEO of Kinetic Centres & Practitioner",
    description:
      "Dr. Sauls is the leading Kinetisense expert in the US and specializes in the Kinetisense Advanced Movement Screening and treatments/rehab to help improve areas of dysfunction.",
    bookLink: "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book#/staff_member/1",
    videoSrc: "https://www.youtube.com/watch?v=pPr8_pLSyuM",
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
    videoSrc: "https://www.youtube.com/watch?v=d0nLzMhNR-s",
    imageSrc: brennan,
    instagram: "https://www.instagram.com/3dbarbelldoc/",
    facebook: "https://www.facebook.com/KineticCentreDallas?mibextid=hu50Ix",
  },
  {
    name: "Dr. Evan Hall",
    title: "Practitioner",
    description:
      "Evan Hall, an accomplished triathlete and runner utilizes his background and passions to cater to patient care. He uses a strong emphasis on soft tissue work and dry needling with e-stim when treating patients.",
    bookLink: "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book",
    imageSrc: evan,
  },
  {
    name: "Dr. Matthew McBride",
    title: "Practitioner",
    description:
      "Dr. McBride uses his understanding of anatomy and biomechanics to help patients restore proper, pain-free function to the body so that they can continue, or return to, the activities they love. He utilizes a combination of myofascial release, chiropractic adjustments, and therapeutic exercises to provide a well rounded approach to recovery.",
    bookLink: "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-dallas/book",
    imageSrc: mcbride,
  },
  {
    name: "Brittany Gibson",
    title: "Sports Massage Therapist",
    description:
      "Brittany Gibson, available at both Kinetic Centre Locations, specializes in athletic recovery. With her expertise in athlete-tailored massage techniques, she empowers individuals to reach their peak physical well-being.",
    bookLink: "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book#/staff_member/19",
    videoSrc: "https://www.youtube.com/watch?v=FtdOqk4XfKA",
    imageSrc: brittany,
    instagram: "https://www.instagram.com/3dmt_brittany/",
    facebook: "https://www.facebook.com/KineticCentreDallas?mibextid=hu50Ix",
  },
  // FRISCO TEAM
  {
    name: "Dr. Matt Ortega",
    title: "Clinic Director & Practitioner",
    description:
      "With the knowledge from chiropractic school and years of experience from strength training. His passion is helping patients overcome the obstacles necessary to perform well in life, sports, or work.",
    bookLink:
      "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book#/staff_member/11",
    videoSrc: "https://www.youtube.com/watch?v=ynGMtXHmNj4",
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
    videoSrc: "https://www.youtube.com/watch?v=Wl42naYXv_o",
    imageSrc: kristina,
    instagram: "https://www.instagram.com/3dsportsdoc/",
    facebook: "https://www.facebook.com/KineticCentreFrisco?mibextid=hu50Ix",
  },
  {
    name: "Dr. Matthew Sweet",
    title: "Practitioner",
    description:
      "Dr. Sweet served 6 years in the United States Coast Guard before attending the University of North Texas where he graduated with his Bachelor of Science in Kinesiology. He obtained his doctorate of chiropractic in order to pursue his passion of helping active individuals recover from injuries.",
    bookLink: "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book",
    imageSrc: sweet,
  },
  {
    name: "Sean Lopez LMT",
    title: "Licensed Massage Therapist",
    description:
      "Licensed Massage Instructor specializing in postural correction, sports recovery, and rehabilitation. Sean is passionate about helping clients understand their bodies—how they move, function, and heal—through education and hands-on care.",
    bookLink: "https://kineticcentredallas.janeapp.com/locations/kinetic-centre-frisco/book",
    imageSrc: lopez,
  },
  // DENVER TEAM
  {
    name: "Dr. Grant Smith",
    title: "Practitioner",
    description:
      "Dr. Grant Smith is a Colorado chiropractor specializing in functional movement, soft tissue work, and sports rehab. With degrees from CU and Parker University, he blends biomechanics and chiropractic care to treat the root cause of pain and improve performance.",
    bookLink: "https://kineticcentreusa.janeapp.com/#/staff_member/1",
    imageSrc: grant,
  },
];

export default function Doctors() {
  const [open, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [toggler, setToggler] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const openLightbox = (videoSrc) => {
    setToggler(!toggler);
    setVideoSrc(videoSrc);
    setOpen(true);
    console.log(videoSrc);
  };

  const handleBookNowClick = () => {
    trackBookNowClick();
  };

  const handleMainBookClick = () => {
    trackBookNowClick();
    setModalOpen(true);
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
              <p className="description font-spline">
                We are committed to providing patient-focused care that allows
                you to enjoy life pain-free. Please call 469-697-9545 to speak
                with our team for more information about scheduling.
              </p>
              <button 
                className="button dark"
                onClick={handleMainBookClick}
              >
                Book an Appointment
              </button>
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
                      onClick={handleBookNowClick}
                    >
                      Book Now
                    </a>
                    {doctor.videoSrc && (
                      <button
                        type="button"
                        className="button light"
                        onClick={() => openLightbox(doctor.videoSrc)}
                      >
                        View Bio{" "}
                        <Image className="play-button" src={play} alt="alt" />
                      </button>
                    )}

                    <div className="socials-container">
                      {doctor.instagram && (
                        <Link href={doctor.instagram} target="_blank">
                          <Image src={instagram} alt="instagram" />
                        </Link>
                      )}
                      {doctor.facebook && (
                        <Link href={doctor.facebook} target='_blank'>
                          <Image src={facebook} alt="facebook" />
                        </Link>
                      )}
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
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
      />
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
