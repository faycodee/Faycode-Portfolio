import { useRef, useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

const Tech = () => {
  const [t] = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  
  // Refs for GSAP animations
  const videoRef = useRef(null);
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const techItemsRef = useRef([]);

  gsap.registerPlugin(ScrollTrigger);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Animate video background
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 1.1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate subtitle
    gsap.fromTo(
      sectionSubTextRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionSubTextRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.3,
      }
    );

    // Animate heading
    gsap.fromTo(
      sectionHeadTextRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionHeadTextRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.5,
      }
    );

    // Animate tech items with stagger
    if (techItemsRef.current.length > 0) {
      gsap.fromTo(
        techItemsRef.current,
        { 
          opacity: 0, 
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.4)",
          stagger: {
            amount: 1.2,
            from: "start",
            ease: "power2.inOut",
          },
          scrollTrigger: {
            trigger: techItemsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.7,
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div style={{ overflow: "none" }}>
        <video
          ref={videoRef}
          id="techvid"
          src="./vid2.mp4"
          alt="Tech Video"
          autoPlay
          style={{ zIndex: -5 }}
          loop
          muted
          playsInline
          className="absolute inset-0 w-[100vw] h-[100vh] object-cover"
        />
        
        <div>
          <p ref={sectionSubTextRef} className={styles.sectionSubTextLight}>
            {t("lng.Titles.tech1")}
          </p>
          <h2 ref={sectionHeadTextRef} className={styles.sectionHeadTextLight}>
            {t("lng.Titles.tech2")}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10 mt-14 conti2 max-sm:gap-4">
          {technologies.map((technology, index) => (
            <div
              ref={(el) => (techItemsRef.current[index] = el)}
              className="w-28 h-28 tech max-sm:w-[60px] max-sm:h-[60px]"
              key={technology.name}
            >
              {isMobile ? (
                // Mobile: Show 2D image with nice styling
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl shadow-lg p-3 hover:scale-105 transition-transform duration-300">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-white text-xs text-center font-bold">${technology.name}</div>`;
                    }}
                  />
                </div>
              ) : (
                // Desktop: Show 3D BallCanvas
                <BallCanvas icon={technology.icon} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");