import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple, pineappleHover } from "../assets";
// import { certifications } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const Certifications = () => {
  const [active, setActive] = useState("project-1");

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Certifications.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          These projects highlight my experience through practical examples,
          including brief descriptions, repository links, and live demos. They
          demonstrate my ability to tackle complex challenges, adapt to various
          technologies, and manage projects efficiently.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
