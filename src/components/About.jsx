import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
// import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "../../public/Spider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { frontend, backend, datamanagement } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[200px] mb-[50px] h-[100px] w-full card-gradient 
       rounded-[20px] shadow-card my-[70px]
       max-sm:h-[30px] max-sm:w-[70px] "
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px]  px-12 min-h-[200px] 
        flex justify-evenly items-center flex-col
         max-sm:h-[40px] max-sm:px-0  "
      >
        <img
          src={eval(icon)}
          alt={title}
          className="w-10 h-10 object-contain "
        />
        <h3 className="text-taupe text-[15px] max-sm:text-[10px]  font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const [t, i18n] = useTranslation();
  let services = t("lng.Const.services", { returnObjects: true });

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useGSAP(() => {
    gsap.fromTo(
      "#paper",
      { x: 20, y: -20 },
      {
        motionPath: {
          path: [
            { x: 150, y: -10 },
            { x: 500, y: -30 },
            { x: 800, y: 0 },
            { x: 1000, y: 200 },
            { x: 1000, y: 400 },
            { x: 1000, y: 900 },
          ],
        },
        scrollTrigger: {
          trigger: ".conti",
          start: "top 80%",
          end: "bottom 30%",
          scrub: 4,

          toggleActions: "restart pause reverse pause",
        },
        rotation: "150deg",
        duration: 20,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <div>
      <div></div>
      <div className="-mt-[12rem] conti h-[100vh]">
        <motion.div variants={textVariant()}>
          <p
            id="pAbout"
            className={`${styles.sectionSubText} max-sm:mt-[40px]`}
          >
            <img
              src="./paper.png"
              id="paper"
              className="w-[50px] translate-y-60 max-sm:hidden "
            />
            {t("lng.Titles.about1")}{" "}
          </p>
          <h2 id="h2About" className={styles.sectionHeadText}>
            {t("lng.Titles.about2")}{" "}
          </h2>
        </motion.div>

        <motion.p
          id="pAbout"
          variants={fadeIn("", "", 0.1, 1)}
          className=" text-taupe text-[13px] max-w-3xl leading-[30px] 
          max-sm:leading-[20px]  max-sm:mt-[10px]  "
        >
          {t("lng.Titles.about3")}{" "}
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-10 ">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
