import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { shaq, bwmap, worldmap } from "../assets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  // const scrollRef = useRef();
  useGSAP(() => {
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 7000);
    gsap.to("#me", {
      scrollTrigger: {
        trigger: "#me",
        start: "top 15%",
        end: "bottom 15%",
        scrub: 4.2,
        // markers: 1,
        toggleActions: "restart pause reverse pause",
      },
      x: 500,
      duration: 5,
      ease: "power1",
    });

    gsap.from("#me", {
      // opacity: 0,
      x: 700,
      ease: "back.inOut",
      delay: 6.3,
      duration: 3,
    });

    gsap.from("#worldVid", {
      scale: 5,
      duration: 6,
      rotatE: -30,
      ease: "power2.in",
    });
    gsap.to(".para", {
      scale: 0,

      ease: "power1.inOut",
      opacity: 0,
      duration: 1,
      stagger: {
        amount: "1",

        ease: "circ.inOut",
        from: "center",
      },
      scrollTrigger: {
        trigger: ".para",
        start: "top 18%",
        end: "bottom 38%",
        scrub: 7,
        markers: 1,
        toggleActions: "restart pause reverse pause",
      },
      ease: "power2.in",
    });
    gsap.from("#btn", {
      opacity: 0,
      ease: "power1.in",
      delay: 4.5,
      duration: 1,
    });

    gsap.fromTo(
      ".para",
      { opacity: 0, y: 20 },
      {
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
        delay: 5.8,
        duration: 3,
        stagger: {
          amount: "6ms",
          // tartib bach atmchi bjoj wla whda whda fhal step schrittemuster
          // grid:[4,3]  ,
          // axis:"y",
          ease: "circ.inOut",
          from: "center",
        },
      }
    );
  }, []);
  return (
    <>
      <section
        style={{ overflow: "hidden" }}
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        overflow-x-hidden"
      >
        <motion.video
          id="worldVid"
          src="./vid.mp4"
          alt="world map"
          autoPlay
          style={{ zIndex: -5 }}
          loop
          muted
          className="absolute inset-0   w-full sm:block hidden  h-full object-cover"
        ></motion.video>
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="para">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm{" "}
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase "
              >
                Faycode
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white text-[1px] para`}
            >
              <br className="sm:block hidden " />
              My passion for web development grew from the thrill of solving
              increasingly complex problems, which brings me great satisfaction
              .
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              id="btn"
              className="w-[35px] h-[64px] rounded-3xl border-4 
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
            </div>
          </a>
        </div>

        <div style={{ width: "500px" }}>
          <img
            id="me"
            style={{ filter: "grayscale(100%) " }}
            className="absolute bottom-[-20px]  right-[-150px]  ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[80vh] xl:h-[80vh]"
            src="./p.png"
            alt="Faycode"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
