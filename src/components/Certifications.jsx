import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github, pineapple, pineappleHover } from "../assets";
// import { certifications } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { certifications } from "../constants";

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
              className=" card-shadow cursor-pointer group relative flex
             flex-col my-6 ml-5 bg-white shadow-sm
             border border-slate-200 rounded-lg w-96 
             hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img
                  className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                  src={e.image}
                  alt="investment-seed-round"
                />
              </div>
              <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold"></h6>
                <p className="text-slate-600 leading-normal font-light">
                  We are thrilled to announce the completion of our seed round,
                  securing $2M in investment to fuel product development and
                  market expansion.
                </p>
              </div>
              <div className="px-4 pb-4 pt-0 mt-2">
                <button
                  className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Read article
                </button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
