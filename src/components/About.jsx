import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
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

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  useGSAP(() => {
    gsap.fromTo(
      "#paper",
      { x: 20,y:-20 },
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
          end:"bottom 30%",
          scrub: 4,
          markers:true,

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
      <div>
        <img style={{position:"absolute"}} src="./paper.png" id="paper" className="w-[50px]" />
      </div>
      <div className="-mt-[6rem] conti">
        <motion.div variants={textVariant()}>
          <p id="pAbout" className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 id="h2About" className={styles.sectionHeadText}>
            Overview.
          </h2>
        </motion.div>

        <motion.p
          id="pAbout"
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Hello! I’m Faycal, a web developer with a passion for problem-solving.
          My journey began as a fun challengeSolving issues felt like completing
          puzzles, and the more complex they were, the more rewarding the
          solutions became. Now, I’m studying at OFPPT, where I’ve gained strong
          skills in the MERN stack (MongoDB, Express, React, Node.js), allowing
          me to create dynamic and efficient web applications. I love turning
          ideas into functional, user-friendly experiences online!
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
