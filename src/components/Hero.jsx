import { motion } from "framer-motion";
import { styles } from "../styles";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../src/i18n";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [t] = useTranslation();
  
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [getOut, setIsGetOut] = useState(true);
  
  const containerRef = useRef();
  const scrollTriggersRef = useRef([]);
  const screensize = useSelector((state) => state.screensize);

  // --- Scroll Locking Logic ---
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
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
        duration: 3,
        ease: "power2.in",
        opacity: 0,
      });

      if (!isLoading) {
        // Safe check for #me
        if (document.querySelector("#me")) {
          const st1 = ScrollTrigger.create({
            trigger: "#me",
            start: "top 15%",
            end: "bottom 15%",
            scrub: 4.2,
            toggleActions: "restart pause reverse pause",
            animation: gsap.to("#me", {
              x: 500,
              duration: 5,
              ease: "power1",
            }),
          });
          scrollTriggersRef.current.push(st1);

          gsap.from("#me", {
            x: 700,
            ease: "back.inOut",
            delay: 0.3,
            duration: 3,
          });
        }

        // Paragraph Animations
        const st2 = ScrollTrigger.create({
          trigger: ".para",
          start: "top 18%",
          end: "bottom 38%",
          scrub: 7,
          toggleActions: "restart pause reverse pause",
          animation: gsap.to(".para", {
            ease: "power1.inOut",
            opacity: 0,
            y: 0,
            delay: 0.1,
            duration: 3,
          }),
        });
        scrollTriggersRef.current.push(st2);

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

  // Cleanup only own ScrollTriggers
  useEffect(() => {
    return () => {
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  // Loader Exit Logic
  useEffect(() => {
    const animateLoaderOut = () => {
      gsap.to("#loader", {
        duration: 1.5,
        ease: "elastic.in(1, 0.75)",
        scale: 6,
        opacity: 0,
        onComplete: () => {
          setIsLoading(false); 
        },
      });
      gsap.to(".loaderText", {
        duration: 1.5,
        ease: "power2.out",
        opacity: 0,
      });
    };

    if (!getOut) {
      animateLoaderOut();
    }
  }, [getOut]);

  // Fallback: if video takes too long, dismiss loader after 4s
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIsGetOut(false);
      }
    }, 4000);
    return () => clearTimeout(timeout);
  }, [isLoading]);

  // Pick the RIGHT video: mobile gets the SMALLER file
  const videoSrc = screensize.isMobile ? "./vid.mp4" : "./vidS.mp4";

  return (
    <div ref={containerRef}>
      { isLoading &&  (
        <div className="fixed inset-0 z-[999] bg-black flex justify-center items-center overflow-hidden touch-none">
          <div className="relative w-full h-full flex items-center justify-center">
            <h1 className="text-white z-10 font-mova absolute top-[15%] left-[5%] text-[20vw] lg:text-[15vw] leading-none loaderText">
              {t("lng.Titles.loader1")}
            </h1>
            
            {/* Replaced 1.7MB GIF with CSS spinner for fast loading */}
            <div id="loader" className="relative z-0 flex items-center justify-center">
              <div className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] rounded-full border-[3px] border-transparent border-t-white border-r-white/50 animate-spin" />
              <img 
                src="./logo.png" 
                alt="Faycode" 
                className="absolute w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full object-contain"
              />
            </div>
            
            <h3
              className="text-white z-20 font-mova absolute bottom-[15%] right-[5%] text-[10vw] lg:text-[8vw] leading-none loaderText"
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
          src={videoSrc}
          alt="world map"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
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