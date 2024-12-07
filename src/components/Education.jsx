import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".container",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: true,
    },
  });

  // Draw the curve
  tl.to("#curve", {
    opacity: 1,
    strokeDasharray: 1000,
    strokeDashoffset: 0,
    duration: 2,
    ease: "none",
  })
    // Animate dots
    .to("#dot1", { opacity: 1, duration: 0.3 })
    .to("#dot2", { opacity: 1, duration: 0.3 })
    .to("#dot3", { opacity: 1, duration: 0.3 })
    // Animate date labels
    .to(".date-label", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.2,
    })
    // Animate content boxes
    .to(".content-box", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
    });

  // Initialize
  gsap.set("#curve", {
    strokeDasharray: 1000,
    strokeDashoffset: 1000,
  });
  gsap.set(".content-box", {
    y: 20,
    opacity: 0,
  });
}, []);

const Education = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Education.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[13px] max-w-3xl leading-[30px]"
        >
          Highlighting key Education that validate my expertise and commitment
          to professional development. Each certification reflects skills gained
          and dedication to staying updated in my field.
        </motion.p>
      </div>

      <div className="container">
        <svg viewBox="0 0 800 600">
          <path
            id="curve"
            d="M 100 100 Q 400 100, 700 500"
            fill="none"
            stroke="white"
            strokeWidth="3"
            opacity="0"
          />
          <circle id="dot1" cx="100" cy="100" r="8" fill="white" opacity="0" />
          <circle id="dot2" cx="400" cy="300" r="8" fill="white" opacity="0" />
          <circle id="dot3" cx="700" cy="500" r="8" fill="white" opacity="0" />

          <text x="80" y="80" className="date-label">
            2023/09
          </text>
          <text x="380" y="280" className="date-label">
            2024/09
          </text>
          <text x="680" y="480" className="date-label">
            2025/07
          </text>
        </svg>

        <div id="content1" className="content-box">
          <h3>2023/09</h3>
          <p>Add your description for this period here</p>
        </div>

        <div id="content2" className="content-box">
          <h3>2024/09</h3>
          <p>Add your description for this period here</p>
        </div>

        <div id="content3" className="content-box">
          <h3>2025/07</h3>
          <p>Add your description for this period here</p>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "Education");
