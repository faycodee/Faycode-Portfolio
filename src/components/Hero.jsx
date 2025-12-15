import { motion } from "framer-motion";
import { styles } from "../styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../src/i18n";

const Hero = () => {
  const [t] = useTranslation();
  gsap.registerPlugin(ScrollTrigger);
  
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [getOut, setIsGetOut] = useState(true);
  
  const containerRef = useRef(); 
  const screensize = useSelector((state) => state.screensize);

  // --- NEW: Scroll Locking Logic ---
  useEffect(() => {
    if (isLoading) {
      // Disable scroll on HTML and Body
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh"; // Prevent elastic scrolling on iOS
    } else {
      // Re-enable scroll
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
      document.body.style.height = "auto";
    }
  }, [isLoading]);

  // Animation Logic
  useGSAP(
    () => {
      // Loader Text In
      gsap.from(".loaderText", {
        duration: 2,
        ease: "sine.in",
        opacity: 0,
      });

      // NOTE: Removed the setTimeout that forced scroll unlock here.
      // Scroll is now controlled by the useEffect above based on isLoading state.

      if (!isLoading) {
        // Safe check for #me
        if (document.querySelector("#me")) {
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
        }

        // Paragraph Animations
        gsap.to(".para", {
          scale: 0,
          ease: "power1.inOut",
          opacity: 0,
          duration: 1,
          stagger: {
            amount: 1,
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
              amount: 0.5,
              ease: "circ.inOut",
              from: "center",
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [isLoading] }
  );

  // Loader Exit Logic
  useEffect(() => {
    const animateLoaderOut = () => {
      gsap.to("#loader", {
        duration: 1.5,
        ease: "elastic.in(1, 0.75)",
        scale: 6,
        opacity: 0,
        onComplete: () => {
          // This triggers the scroll unlock in the first useEffect
          setIsLoading(false); 
        },
      });
      gsap.to(".loaderText", {
        duration: 1.5,
        ease: "power2.inOut",
        opacity: 0,
      });
    };

    if (!getOut) {
      animateLoaderOut();
    }
  }, [getOut]);

  return (
    <div ref={containerRef}>
      {isLoading && (
        // Added z-[999] to ensure it covers Navbar and everything else
        <div className="fixed inset-0 z-[999] bg-black flex justify-center items-center overflow-hidden touch-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <h1 className="text-white z-10 font-mova absolute top-[5%] left-[5%] text-[20vw] lg:text-[15vw] leading-none loaderText">
              {t("lng.Titles.loader1")}
            </h1>
            
            <img id="loader" src="./loader.gif" alt="loading" className="relative z-0 max-w-[50vw]" />
            
            <h3
              className="text-white z-20 font-mova absolute bottom-[5%] right-[5%] text-[10vw] lg:text-[8vw] leading-none loaderText"
            >
              {t("lng.Titles.loader2")}
            </h3>
          </div>
        </div>
      )}

      <section
        style={{ overflow: "hidden" }}
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-x-hidden"
      >
        <motion.video
          id="worldVid"
          src={screensize.isMobile ? "./vidS.mp4" : "./vid.mp4"}
          alt="world map"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setIsGetOut(false)}
          className="absolute inset-0 w-full h-full object-cover -z-10"
        ></motion.video>

        <div
          className={`absolute inset-0 top-[20vh] sm:top-[30vh] ${styles.paddingX} max-w-7xl mx-auto flex flex-row items-start justify-between gap-3`}
        >
          <div className="para w-full">
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase text-[8vw] sm:text-[60px] leading-tight`}
            >
              {t("lng.Titles.hi")}
              <br />
              <span
                className="text-battleGray font-mova font-extrabold uppercase block mt-2 text-[15vw] sm:text-[100px] leading-none"
              >
                Faycode
              </span>
            </h1>
            <p className={`para ${styles.heroSubText} mt-4 max-w-lg`}>
              {t("lng.Paragraphs.herop")}
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 w-full flex justify-center items-center">
          <a href="#about">
            <div
              id="btn"
              className="w-[35px] h-[64px] rounded-3xl border-4 border-frenc flex justify-center items-start p-2 opacity-0"
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
      </section>
    </div>
  );
};

export default Hero;