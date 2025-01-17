import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import store from "../store/store";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../src/i18n";
const Hero = () => {
  const { t } = useTranslation();
  gsap.registerPlugin(ScrollTrigger);
  // const scrollRef = useRef();
  const [isLoading, setIsLoading] = useState(true);
  const [getOut, setIsGetOut] = useState(true);

  useGSAP(() => {
    gsap.from(".loaderText", {
      // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Final state
      duration: 2, // Animation duration
      ease: "sine.in", // Easing function
      opacity: 0,
    });
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 7000);

    !isLoading &&
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
    !screensize.isMobile &&
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
          toggleActions: "restart pause reverse pause",
        },
        ease: "power2.in",
      });
    screensize.isMobile &&
      gsap.to(".para", {
        opacity: 0,
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
  }, [isLoading]);
  useEffect(() => {
    const animateLoaderOut = () => {
      gsap.to("#loader", {
        // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Final state
        duration: 3, // Animation duration
        ease: "elastic.in", // Easing function
        scale: 6,
        onComplete: () => {
          setIsLoading(false);
        },
      });
      gsap.to(".loaderText", {
        // clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Final state
        duration: 3, // Animation duration
        ease: "power2.inOut", // Easing function
        opacity: 0,
        onComplete: () => {
          setIsLoading(false);
        },
      });
    };
    if (!getOut) {
      animateLoaderOut();
    }
  }, [getOut]);
  const cursor = useSelector((state) => state.cursor);
  const dispatch = useDispatch();
  const screensize = useSelector((state) => state.screensize);

  return (
    <>
      {isLoading && (
        <div className="bg-black h-screen w-screen flex justify-center items-center">
          <div>
            <h1 className="text-white z-10 font-mova absolute top-10 left-10 text-[300px] loaderText max-lg:text-[100px]">
              {t("lng.Titles.loader1")}
            </h1>
            <img id="loader" src="./loader.gif" alt="" srcset="" />
            <h3
              style={{ position: "absolute", top: "70vh" }}
              className="text-white z-20 font-mova   right-10 text-[130px] loaderText max-lg:text-[80px]"
            >
              {t("lng.Titles.loader2")}{" "}
            </h3>
          </div>
        </div>
      )}
      (
      <section
        style={{ overflow: "hidden" }}
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        overflow-x-hidden"
      >
        {!screensize.isMobile && (
          <motion.video
            id="worldVid"
            src="./vid.mp4"
            alt="world map"
            autoPlay
            style={{ zIndex: -5 }}
            loop
            preload="auto"
            muted
            onLoadedData={() => {
              setIsGetOut(false);
            }}
            className="absolute inset-0   w-full sm:block hidden  h-full object-cover"
          ></motion.video>
        )}
        {screensize.isMobile && (
          <motion.video
            id="worldVid"
            src="./vidS.mp4"
            alt="world map"
            autoPlay
            style={{ zIndex: -5 }}
            loop
            onLoadedData={() => {
              setIsGetOut(false);
            }}
            preload="auto"
            muted
            className="absolute inset-0   h-full "
          ></motion.video>
        )}
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="para ">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack  font-poppins uppercase max-sm:text-[65px] max-sm:mt-[50px]`}
            >
              {t("lng.Titles.hi")}
              <br />
              <span
                className="text-battleGray sm:text-[103px] 
                mt-5 
                max-sm:text-[80px]   
                text-[50px] font-mova
                font-extrabold uppercase "
              >
                Faycode
              </span>
            </h1>
            {/* <p
              className={` mt-2 text-white w-[500px]   max-sm:w-[80vw] font-mono text-[1px]  max-sm:text-[13px] max-sm:mt-[120px]`}
            > */}
            <p className={`para ${styles.heroSubText}`}>
              {t("lng.Paragraphs.herop")}
              {/* <br className="sm:block hidden " /> */}.
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute max-sm:bottom-3 xs:bottom-10 bottom-32 w-full 
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
          {!screensize.isMobile && !screensize.isTablet && (
            <img
              id="me"
              // onMouseEnter={() => {
              //   dispatch({ type: "UPDATECURSORWIDTH", wi: "40" });
              //   dispatch({ type: "UPDATECURSORHEIGTH", he: "200" });

              // }}
              // onMouseLeave={() => {
              //   dispatch({ type: "UPDATECURSORWIDTH", wi: "30" });
              //   dispatch({ type: "UPDATECURSORHEIGTH", he: "30" });
              // }}
              // ={}
              style={{ filter: "grayscale(100%) " }}
              className=" absolute bottom-[-20px]  right-[-150px]  ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[80vh] xl:h-[80vh]"
              src="./pp.png"
              alt="Faycode"
            />
          )}
        </div>
      </section>
      )
    </>
  );
};

export default Hero;
