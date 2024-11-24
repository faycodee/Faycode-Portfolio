import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Tech = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    // gsap.from(".tech", {
    //   opacity: 0.5,
    //   scale: 0.6,
    //   duration: 20,
    //   ScrollTrigger: ".tech",
    //   stagger: {
    //     amount: 1,
    //     // tartib bach atmchi bjoj wla whda whda fhal step schrittemuster
    //     // grid:[4,3]  ,
    //     // axis:"y",
    //     ease: "circ.inOut",
    //     from: "start",
    //   },
    //   ease: "power1.inOut",
    // });
  }, []);
  return (
    <>
      <motion.video
        id="techvid"
        src="./vid2.mp4"
        alt="Tech Video"
        autoPlay
        style={{ zIndex: -5 }}
        loop
        muted
        className="absolute inset-0   w-full sm:block hidden  h-full object-cover"
      ></motion.video>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14 conti2">
        {technologies.map((technology) => (
          <div className="w-28 h-28 tech" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
