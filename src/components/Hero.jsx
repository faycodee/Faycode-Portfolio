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
  const [t, i18n] = useTranslation();
  gsap.registerPlugin(ScrollTrigger);
  const [isLoading, setIsLoading] = useState(true);
  const [getOut, setIsGetOut] = useState(true);

  useGSAP(() => {
    gsap.from(".loaderText", {
      duration: 2,
      ease: "sine.in",
      opacity: 0,
    });
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      document.body.style.overflow = "auto";
    }, 2000);

    if (!isLoading) {
      gsap.to("#me", {
        scrollTrigger: {
          trigger: "#me",
          start: "top 15%",
          end: "bottom 15%",
          scrub: 4.2,
          toggleActions: "restart pause reverse pause",
        },
        x: 500,
        duration: 5,
        ease: "power1",
      });

      gsap.from("#me", {
        x: 700,
        ease: "back.inOut",
        delay: 0.3,
        duration: 3,
      });

      // gsap.from("#worldVid", {
      //   scale: 5,
      //   duration: 6,
      //   rotate: -30,
      //   ease: "power2.in",
      // });

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

      gsap.from("#btn", {
        opacity: 0,
        ease: "power1.in",
        delay: 0.2,
        duration: 1,
      });

      gsap.fromTo(
        ".para",
        { opacity: 0, y: 20 },
        {
          ease: "power1.inOut",
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 3,
          stagger: {
            amount: "6ms",
            ease: "circ.inOut",
            from: "center",
          },
        }
      );
    }
  }, [isLoading]);

  useEffect(() => {
    const animateLoaderOut = () => {
      gsap.to("#loader", {
        duration: 3,
        ease: "elastic.in",
        scale: 6,
        onComplete: () => {
          setIsLoading(false);
        },
      });
      gsap.to(".loaderText", {
        duration: 3,
        ease: "power2.inOut",
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
            <img id="loader" src="./loader.gif" alt="" />
            <h3
              style={{ position: "absolute" }}
              className="text-white z-20 font-mova top-[70vh] right-10 text-[130px] loaderText max-lg:text-[80px] max-md:text-[67px] max-md:top-[76vh]"
            >
              {t("lng.Titles.loader2")}{" "}
            </h3>
          </div>
        </div>
      )}
      <section
        style={{ overflow: "hidden" }}
        className="relative flex sm:flex-row flex-col w-full h-screen max-md:h-[100vh] mx-auto overflow-x-hidden"
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
            className="absolute inset-0 w-full sm:block hidden h-full object-cover"
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
            className="absolute inset-0 h-full"
          ></motion.video>
        )}
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] lg:top-[150px] xl:top-[250px] ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          <div className="para">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase max-sm:text-[30px] max-md:mt-[30px] max-md:w-[80vw] max-md:ml-1`}
            >
              {t("lng.Titles.hi")}
              <br />
              <span
                className="text-battleGray sm:text-[103px] mt-5 max-md:text-[70px] max-md:ml-1 max-md:w-[80vw] text-[50px] font-mova font-extrabold uppercase"
              >
                Faycode
              </span>
            </h1>
            <p className={`para ${styles.heroSubText} max-md:mt-8 max-md:w-[80vw]`}>
              {t("lng.Paragraphs.herop")}
            </p>
          </div>
          <div className="w-screen flex flex-col items-start justify-center sm:-ml-[3rem] xxs:mt-4"></div>
        </div>

        <div className="absolute max-sm:bottom-3 xs:bottom-10 bottom-32 w-full flex justify-center items-center">
          <a href="#about">
            <div
              id="btn"
              className="w-[35px] h-[64px] rounded-3xl border-4 border-frenc flex justify-center items-start p-2 max-md:mb-10 max-md:border-2 max-md:h-12 max-md:w-6"
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
                className="w-3 h-3 max-md:h-2 max-md:w-2 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div style={{ width: "500px" }}>
          {!screensize.isMobile && !screensize.isTablet && (
            <img
              id="me"
              style={{ filter: "grayscale(100%) " }}
              className="absolute bottom-[-20px] right-[-150px] ml-[50vw] lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw] sm:h-[90vh] md:h-[80vh] xl:h-[80vh]"
              src="./pp.png"
              alt="Faycode"
            />
          )}
        </div>
      </section>
    </>
  );
};

export default Hero;