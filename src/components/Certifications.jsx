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
             hover:shadow-lg transition-shadow duration-300 min-h-[400px]  max-h-[430px]  "
            >
              <img
                src="./pin.png"
                alt=""
                className="absolute z-10 w-[70px] rotate-[-30deg] top-2 left-[-11px]"
              />
              <div className="relative m-2.5 overflow-hidden text-white rounded-md flex justify-start items-start">
                <img
                  className=" transition-transform duration-500 rotate-2 transform-gpu m-1 group-hover:scale-40 "
                  src={e.image}
                  alt="investment-seed-round"
                  onClick={() => {
                    return window.open(`${e.link}`, "_blank");
                  }}
                ></img>
                <img
                  src="./pin.png"
                  alt=""
                  className="absolute z-10 w-[70px] rotate-[-12deg] bottom-0 right-[-11px]"
                />
              </div>
              <div className="px-4">
                <h3 className="font-mova mb-1 mt-3">{e.name}</h3>
                <p
                  onClick={() => {
                    return window.open(`${e.link}`, "_blank");
                  }}
                  className="text-gray-500 sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px] mb-8"
                >
                  {e.disc}
                </p>
                <span className="absolute bottom-3 font-thin">
                  from :{" "}
                  <a
                    className="text-blue-300 cursor-pointer text-[10px] hover:text-blue-500"
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
