// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import styles from "../styles/TreatmentSlider.module.scss";
// import { Spline_Sans } from "next/font/google";

// const splineSans = Spline_Sans({
//   weight: ["400"],
//   preload: false,
//   variable: "--font-spline",
// });

// const TreatmentSlider = ({ images, autoplay = false, interval = 3000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [imagesPerPage, setImagesPerPage] = useState(4);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     let timer;

//     if (autoplay) {
//       timer = setInterval(() => {
//         goToNextPage();
//       }, interval);
//     }

//     return () => {
//       clearInterval(timer);
//     };
//   }, [currentIndex, autoplay, interval]);

//   // const updateImagesPerPage = () => {
//   //   const screenWidth = window.innerWidth;
//   //   if (screenWidth >= 768) {
//   //     setImagesPerPage(4); // Show 4 images per page on larger screens
//   //   } else {
//   //     setImagesPerPage(1); // Show 1 image per page on smaller screens
//   //   }
//   // };

//   // useEffect(() => {
//   //   updateImagesPerPage();
//   //   window.addEventListener("resize", updateImagesPerPage);

//   //   return () => {
//   //     window.removeEventListener("resize", updateImagesPerPage);
//   //   };
//   // }, []);

//   const goToNextPage = () => {
//     const nextPage = currentIndex + imagesPerPage;
//     setCurrentIndex(nextPage >= images.length ? 0 : nextPage);
//   };

//   const goToPrevPage = () => {
//     const prevPage = currentIndex - imagesPerPage;
//     setCurrentIndex(prevPage < 0 ? images.length - imagesPerPage : prevPage);
//   };

//   const handleDragStart = (e) => {
//     setIsDragging(true);
//     setStartX(e.clientX || e.touches[0].clientX);
//   };

//   const handleDragEnd = (e) => {
//     if (isDragging) {
//       const diff = startX - (e.clientX || e.changedTouches[0].clientX);

//       if (diff > 50) {
//         goToNextPage();
//       } else if (diff < -50) {
//         goToPrevPage();
//       }

//       setIsDragging(false);
//     }
//   };

//   const handleDragCancel = () => {
//     setIsDragging(false);
//   };

//   const handleTouchMove = (e) => {
//     if (isDragging) {
//       e.preventDefault();
//     }
//   };

//   const sliderStyle = {
//     transform: `translateX(-${(currentIndex * 100) / images.length}%)`,
//   };

//   return (
//     <div
//       className={styles["treatment-slider"]}
//       onMouseUp={handleDragEnd}
//       onTouchEnd={handleDragEnd}
//       onMouseLeave={handleDragCancel}
//       onTouchCancel={handleDragCancel}
//       onTouchMove={handleTouchMove}
//     >
//       <div className={styles.pagination}>
//         {Array.from({ length: Math.ceil(images.length / imagesPerPage) }).map(
//           (_, index) => (
//             <div
//               key={index}
//               className={`${styles.dot} ${
//                 index * imagesPerPage === currentIndex ? styles.active : ""
//               }`}
//               onClick={() => setCurrentIndex(index * imagesPerPage)}
//             />
//           )
//         )}
//       </div>
//       <div
//         className={styles["slide-container"]}
//         style={sliderStyle}
//         onMouseDown={handleDragStart}
//         onTouchStart={handleDragStart}
//         ref={sliderRef}
//       >
//         {images.map((image, index) => (
//           <div key={index} className={styles.slide}>
//             <div className={styles["image-wrapper"]}>
//               <Image
//                 src={image.src}
//                 alt={`Slide ${index + 1}`}
//                 layout="fill"
//                 objectFit="cover"
//               />
//               <div className={styles["overlay"]}>
//                 <div className={styles["overlay-content"]}>
//                   <h2>{image.title}</h2>
//                   <p
//                     className={`${styles["fade-description"]} + ${splineSans.className}`}
//                   >
//                     {image.description}
//                     <a
//                       href="https://kineticcentredallas.janeapp.com/"
//                       target="_blank"
//                       className="button dark"
//                     >
//                       Book Now
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TreatmentSlider;
