import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple, pineappleHover } from "../assets";
// import { certifications } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { certifications } from "../constants";

const Certifications = () => {
  // const goVerify = (what, e) => {
  //   let mytimout;
  //   what = "verify"
  //     ? (mytimout = setInterval(() => {
  //         alert("make sure BY CLICKING");
  //         // return confirm("I think you want to make sure ?")?(window.open(`${e.link}`, "_blank"),clearTimeout(mytimout)):clearTimeout(mytimout)
  //       }, 7000))
  //     : clearInterval(mytimout);
  // };
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
          Highlighting key certifications that validate my expertise and
          commitment to professional development. Each certification reflects
          skills gained and dedication to staying updated in my field.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-row `}
      >
        {certifications.map((e, i) => {
          return (
            <div
              className=" card-shadow cursor-grab group relative flex
             flex-col my-6 ml-5 bg-jet shadow-sm scah
             rounded-lg w-96 
             hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative min-h-[230px]  max-h-[230px] m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 transform group-hover:scale-40"
                  src={e.image}
                  alt="investment-seed-round"
                  onClick={() => {
                    return window.open(`${e.link}`, "_blank");
                  }}
                  onMouseMove={() => {
                    goVerify("verify", e);
                  }}
                  onMouseLeave={() => {
                    goVerify("nooo", e);
                  }}
                />
              </div>
              <div className="px-4">
                <p
                  onClick={() => {
                    return window.open(`${e.link}`, "_blank");
                  }}
                  className="text-gray-500 sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
                >
                  {e.disc}
                </p>
                <span>
                  From :{" "}
                  <a
                    className="text-blue-300 cursor-pointer"
                    href={`https://${e.company}`}
                  >
                    {e.company}
                  </a>
                </span>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2"></div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
