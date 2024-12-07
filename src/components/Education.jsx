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
          Highlighting key Education that validate my expertise and
          commitment to professional development. Each certification reflects
          skills gained and dedication to staying updated in my field.
        </motion.p>
      </div>
  
    </div>
  );
};

export default SectionWrapper(Education, "Education");
