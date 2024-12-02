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
  }, []);
  let isMouseDown = false;

  // Track mouse button state
  window.addEventListener("mousedown", () => {
    // alert("down")
    isMouseDown = true;
  });
  
  window.addEventListener("mouseup", () => {
    // alert("notdown")
    isMouseDown = false;
  });

  // Trigger action on mouse move only when the mouse button is down
  window.addEventListener("mousemove", (e) => {
    if (isMouseDown) {
      const posX = e.clientX;
      const posY = e.clientY;
      if (posX > 0 && posX < 500) {
        // alert("work")
        gsap.to("#para2", {
          opacity: 1,
          duration: 4,
        });
      } else {
        gsap.to("#para2", {
          opacity: 0,
          duration: 4,
        });
      }
    }
  });
  // gsap.from("#para2", {
  //   opacity: 0,
  //   duration: 4,
  // });
  // gsap.from("#para3", {
  //   opacity: 0,
  //   duration: 4,
  // });
  // gsap.from("#para4", {
  //   opacity: 0,
  //   duration: 4,
  // });

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
          <div className="para">
            <div
              id="para1"
              className="absolute font-beckman  text-zinc-200 flying-text z-20 text-center"
              style={{ bottom: "60%", left: "14%" }}
            >
              " I am here to assist you <br />
              in developing your{" "}
              <span className="font-mono font-extrabold ">PORTFOLIO</span> "
            </div>
            <div
              id="para3"
              className="absolute font-beckman  text-zinc-200 flying-text z-20 "
              style={{ bottom: "60%", right: "14%" }}
            >
              "I’ll assist you in building the{" "}
              <span className="font-mono font-extrabold text-center">
                WEBSITE
              </span>{" "}
              you need. "
            </div>
            <div
              id="para2"
              className="absolute font-beckman  text-zinc-200 flying-text z-20 "
              style={{ bottom: "36%", left: "10%" }}
            >
              " I’ll help you creatively design <br /> a standout{" "}
              <span className="font-mono font-extrabold text-center">
                PORTFOLIO
              </span>{" "}
              that shines. "
            </div>
            <div
              id="para4"
              className="absolute  font-beckman  text-zinc-200 flying-text z-20 "
              style={{ bottom: "45%", right: "20%" }}
            >
              " I help you bring your visions <br /> to life, whatever they are.
              "
            </div>
          </div>
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
  );
};

export default SectionWrapper(Services, "service");
