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
import { ScrollTrigger } from "gsap/all";
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
  const tm = gsap.timeline({
    scrollTrigger: {
      trigger: "#paper",
      start: "top 80%",
      end: "bottom",
      markers: true,
      scrub: 10,
      toggleActions: "restart pause reverse pause",
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    tm.fromTo(
      "#paper",
      {
        x: 150,
        y: -50,
        duration: 5,
        ease: "none",
      },
      {
        x: 500,
        ease: "none",
        y: -150,
        duration: 5,

        rotation: "30deg",
      }
    ).to("#paper", {
      x: 900,
      y: -50,
      ease: "none",
      duration: 5,
      rotation: "70deg",
    }
    ).to("#paper", {
      x: 1000,
      y: 150,
      ease: "none",
      duration: 5,
      rotation: "130deg",
    }
    ).to("#paper", {
      x: 1050,
      y: 350,
      ease: "none",
      duration: 5,
      rotation: "160deg",
    }
    ).to("#paper", {
      x: 900,
      y: 750,
      ease: "none",
      duration: 5,
      rotation: "150deg",
    }
    ).to("#paper", {
      x: 900,
      y: 950,
      ease: "none",
      duration: 2,
      rotation: "100deg",
    });
  }, []);
  return (
    <div>
      <div>
        <img src="./paper.png" id="paper" className="w-[50px]" />
      </div>
      <div className="-mt-[6rem]">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
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
