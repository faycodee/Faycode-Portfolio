import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Model from "../../public/Spider";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Services = () => {
  const [t] = useTranslation();
  const screensize = useSelector((state) => state.screensize);
  
  // Refs for GSAP animations
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const paragraphRef = useRef(null);
  const listItemsRef = useRef([]);
  const canvasContainerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // Animate text elements on scroll
  useEffect(() => {
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
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
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
        delay: 0.2,
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.4,
      }
    );

    // Animate list items with stagger
    if (listItemsRef.current.length > 0) {
      gsap.fromTo(
        listItemsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: listItemsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.6,
        }
      );
    }

    // Animate canvas container
    if (canvasContainerRef.current) {
      gsap.fromTo(
        canvasContainerRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: canvasContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.5,
        }
      );
    }

    // Animate scroll indicator
    if (scrollIndicatorRef.current) {
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: scrollIndicatorRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.8,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [screensize.isMobile, screensize.isTablet]);

  // Desktop hover effect
  !screensize.isMobile &&
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
        
        posX > 0 && posX < 600
          ? (gsap.to("#para1", { opacity: 0.5, duration: 9 }),
            gsap.to("#para2", { opacity: 1, duration: 7 }))
          : (gsap.to("#para1", { opacity: 0, duration: 3 }),
            gsap.to("#para2", { opacity: 0, duration: 2 }));
            
        posX > 700 && posX < 1100
          ? (gsap.to("#para3", { opacity: 1, duration: 7 }),
            gsap.to("#para4", { opacity: 0.5, duration: 9 }))
          : (gsap.to("#para3", { opacity: 0, duration: 3 }),
            gsap.to("#para4", { opacity: 0, duration: 2 }));
      });
    }, []);

  return (
    <div>
      <div
        style={{ overflow: "none" }}
        className="-mt-[3rem] max-sm:mt-[-20px]"
      >
        <div>
          <p ref={sectionSubTextRef} className={styles.sectionSubText}>
            {t("lng.Titles.services1")}
          </p>
          <h2 ref={sectionHeadTextRef} className={styles.sectionHeadText}>
            {t("lng.Titles.services2")}
          </h2>
        </div>

        <p
          ref={paragraphRef}
          className="mt-4 text-taupe text-[18px] max-w-3xl
           leading-[30px] mb-8 max-sm:text-[12px] max-sm:leading-[20px]"
        >
          {t("lng.Titles.services3")}
          {screensize.isMobile && (
            <ul style={{ listStyle: "circle" }}>
              <li
                ref={(el) => (listItemsRef.current[0] = el)}
                className="text-[12px] font-mova ml-8"
              >
                {t("lng.Titles.services4li1")}
              </li>
              <li
                ref={(el) => (listItemsRef.current[1] = el)}
                className="text-[12px] font-mova ml-8"
              >
                {t("lng.Titles.services4li4")}
              </li>
            </ul>
          )}
          {screensize.isTablet && (
            <ul style={{ listStyle: "circle" }} className="mt-4">
              <li
                ref={(el) => (listItemsRef.current[0] = el)}
                className="text-[12px] font-mova ml-8"
              >
                {t("lng.Titles.services4li1")}
              </li>
              <li
                ref={(el) => (listItemsRef.current[1] = el)}
                className="text-[12px] font-mova ml-8"
              >
                {t("lng.Titles.services4li2")}
              </li>
              <li
                ref={(el) => (listItemsRef.current[2] = el)}
                className="text-[12px] font-mova ml-8"
              >
                {t("lng.Titles.services4li3")}
              </li>
              <li
                ref={(el) => (listItemsRef.current[3] = el)}
                className="text-[12px] font-mova ml-8"
              >
                {t("lng.Titles.services4li4")}
              </li>
            </ul>
          )}
        </p>

        <div className="text-black">
          {!screensize.isMobile && !screensize.isTablet && (
            <div id="para">
              <div
                id="para1"
                className="absolute font-beckman text-zinc-200 text-[10px] flying-text z-20 text-center opacity-0"
                style={{ bottom: "19%", left: "14%" }}
              >
                {t("lng.Titles.services4li1")}
              </div>
              <div
                id="para2"
                className="absolute font-beckman text-zinc-200 flying-text z-20 opacity-0"
                style={{ bottom: "36%", left: "10%" }}
              >
                {t("lng.Titles.services4li2")}
              </div>
              <div
                id="para3"
                className="absolute font-beckman opacity-0 text-zinc-200 flying-text z-20"
                style={{ bottom: "20%", right: "14%" }}
              >
                {t("lng.Titles.services4li3")}
              </div>
              <div
                id="para4"
                className="absolute font-beckman opacity-0 text-[10px] text-zinc-200 flying-text z-20"
                style={{ bottom: "45%", right: "20%" }}
              >
                {t("lng.Titles.services4li4")}
              </div>
            </div>
          )}

          <div ref={canvasContainerRef} className="flex justify-center">
            <div
              ref={scrollIndicatorRef}
              id="btn"
              className="w-[25px] h-[45px] rounded-3xl border-2 rotate-[90deg] absolute mt-[30px] z-40
            border-frenc flex justify-center items-start p-2"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
            <Canvas
              gl={{ alpha: true }}
              id="canvas"
              className="rounded-3xl"
              style={{ height: "55vh", scale: 5, backgroundColor: "black" }}
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