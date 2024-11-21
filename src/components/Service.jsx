import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "../../public/Spider";


const Services = () => {
  return (
    <div>
      <div className="-mt-[6rem]">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Services.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Hello! I’m Faycal, a web developer with a passion for problem-solving.
          My journey began as a fun challenge—solving issues felt like
          completing puzzles, and the more complex they were, the more rewarding
          the solutions became. Now, I’m studying at OFPPT, where I’ve gained
          strong skills in the MERN stack (MongoDB, Express, React, Node.js),
          allowing me to create dynamic and efficient web applications. I love
          turning ideas into functional, user-friendly experiences online!
        </motion.p>
        <div className="text-black">
          <Canvas gl={{ alpha: true }} className="rounded-3xl" style={{ height: "100vh"  , scale:5,backgroundColor:"black" }}>
            <ambientLight intensity={2} />
            <OrbitControls enableZoom />
            <Suspense fallback={null}>
              <Model position={[0, -7, 0]} />
            </Suspense>
            <Environment preset="sunset" />
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

export default SectionWrapper(Services, "services");
