import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "../../public/Spider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";

const Services = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#canvas", {
      opacity: 0,
      ease: "expo",
      duration: 9,
      scrollTrigger: {
        trigger: "#canvas",
      },
    });
    window.addEventListener("mousemove", (e) => {
      const posX = e.clientX;
      const posY = e.clientY;
      // alert(posX)
      // cursorDot.current.style.left = `${posX}px`;
      // cursorDot.current.style.top = `${posY}px`;
      posX > 0 && posX < 600
        ? (gsap.to("#para1", {
            opacity: 1,
            duration: 9,
          }),
          gsap.to("#para2", {
            opacity: 1,
            duration: 7,
          }))
        : (gsap.to("#para1", {
            opacity: 0,
            duration: 5,
          }),
          gsap.to("#para2", {
            opacity: 0,
            duration: 5,
          }));
      posX > 700 && posX < 1000
        ? (gsap.to("#para3", {
            opacity: 1,
            duration: 7,
          }),
          gsap.to("#para4", {
            opacity: 1,
            duration: 9,
          }))
        : (gsap.to("#para3", {
            opacity: 0,
            duration: 5,
          }),
          gsap.to("#para4", {
            opacity: 0,
            duration: 5,
          }));
    });
  }, []);

  return (
    <div>
      <div style={{ overflow: "none" }} className="-mt-[6rem] ">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px] mb-8"
        >
          Hey ,I will assist you in the same way that{" "}
          <span className="font-mono font-extrabold ">Spider-Man</span> helps
          others .
          <br />
          Let’s get creative and make something together !
        </motion.p>
        <div className="text-black">
          <div id="para">
            <div
              id="para1"
              className="absolute font-beckman  text-zinc-200 flying-text z-20 text-center opacity-0 "
              style={{ bottom: "60%", left: "14%" }}
            >
              " I am here to assist you <br />
              in developing your{" "}
              <span className="font-mono font-extrabold ">PORTFOLIO</span> "
            </div>
            <div
              id="para2"
              className="absolute font-beckman  text-zinc-200 flying-text z-20 opacity-0"
              style={{ bottom: "36%", left: "10%" }}
            >
              " I’ll help you creatively design <br /> a standout{" "}
              <span className="font-mono font-extrabold text-center ">
                PORTFOLIO
              </span>{" "}
              that shines. "
            </div>
            <div
              id="para3"
              className="absolute font-beckman opacity-0  text-zinc-200 flying-text z-20 "
              style={{ bottom: "60%", right: "14%" }}
            >
              "I’ll assist you in building the{" "}
              <span className="font-mono font-extrabold text-center ">
                WEBSITE
              </span>{" "}
              you need. "
            </div>

            <div
              id="para4"
              className="absolute  font-beckman opacity-0  text-zinc-200 flying-text z-20 "
              style={{ bottom: "45%", right: "20%" }}
            >
              " I help you bring your visions <br /> to life, whatever they are.
              "
            </div>
          </div>
          <div className=" flex justify-center">
            <div
              id="btn"
              className="w-[35px] h-[64px] rounded-3xl border-4  rotate-[90deg] absolute mt-[30px] z-40
            border-frenc flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>{" "}
            <Canvas
              gl={{ alpha: true }}
              id="canvas"
              className="rounded-3xl"
              style={{ height: "100vh", scale: 5, backgroundColor: "black" }}
            >
              <ambientLight intensity={2} />
              <OrbitControls enableZoom />
              <Suspense fallback={null}>
                <Model position={[0, -7, 0]} />
              </Suspense>
              <Environment preset="city" />
              <ContactShadows
                position={[0, 0, 0]}
                opacity={0.5}
                scale={50}
                blur={1}
                color="#00000"
              />
            </Canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "service");
