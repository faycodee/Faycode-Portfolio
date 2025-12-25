import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Education = () => {
  const screensize = useSelector((state) => state.screensize);
  const [tooltip, setTooltip] = useState("");
  const [t] = useTranslation();

  // Refs for text animations
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const timelineContainerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // Animate text elements
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
          start: "top 85%",
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

    // Animate description
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.4,
      }
    );

    // Animate timeline container
    if (timelineContainerRef.current) {
      gsap.fromTo(
        timelineContainerRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineContainerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.6,
        }
      );
    }
  }, []);

  // Timeline animation - works for both mobile and desktop
  useEffect(() => {
    gsap.set("#curve", {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      opacity: 1,
    });
    gsap.set(".dot", { scale: 0, opacity: 0 });
    gsap.set(".content-box", { y: 20, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".container",
        start: "top center",
        end: "+=1000",
        scrub: true,
        toggleActions: "play none none reverse",
      },
    });

    tl.to("#curve", {
      strokeDashoffset: 0,
      duration: 4,
      ease: "none",
    })
      .to(
        "#dot1",
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "<0.5"
      )
      .to(
        "#dot2",
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "<0.5"
      )
      .to(
        "#dot3",
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "<0.5"
      )
      .to(".content-box", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
      });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [screensize.isMobile]);

  const handleMouseOver = (year) => {
    switch (year) {
      case "2023/06":
        setTooltip(t("lng.Titles.edu5"));
        break;
      case "2024/07":
        setTooltip(t("lng.Titles.edu6"));
        break;
      case "2025/06":
        setTooltip(t("lng.Titles.edu7"));
        break;
      default:
        setTooltip("");
    }
  };

  return (
    <div className="-mt-[4rem] overflow-hidden max-sm:-mt-[1rem]">
      <div>
        <p ref={sectionSubTextRef} className={`${styles.sectionSubText}`}>
          {t("lng.Titles.project1")}
        </p>
        <h2 ref={sectionHeadTextRef} className={`${styles.sectionHeadTextLight}`}>
          {t("lng.Titles.edu2")}
        </h2>
      </div>
      <div className="w-full flex">
        <p
          ref={descriptionRef}
          className="mt-4 text-taupe text-[12px] sm:text-[13px] max-w-3xl 
          leading-[22px] sm:leading-[30px]"
        >
          {t("lng.Titles.edu3/1")}{" "}
          <a
            href="https://www.ofppt.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-beckman font-bold text-blue-400 hover:text-blue-300 
            transition-colors duration-300 underline decoration-blue-400/30 
            hover:decoration-blue-300"
          >
            OFPPT
          </a>{" "}
          {t("lng.Titles.edu3/2")}
          <br />
          {t("lng.Titles.edu3/3")}
        </p>
      </div>

      {/* Desktop Timeline */}
      {!screensize.isMobile ? (
        <div ref={timelineContainerRef} className="container mt-8 sm:mt-12">
          <div className="svg-wrapper">
            <svg viewBox="0 0 800 100" className="w-full h-auto">
              <path
                id="curve"
                d="M 100 50 Q 200 20, 300 50 T 500 50 T 700 50"
                fill="none"
                stroke="white"
                strokeWidth="3"
                opacity="1"
              />

              {/* Dot 1 */}
              <circle
                id="dot1"
                cx="100"
                cy="50"
                r="37"
                fill="white"
                className="dot cursor-pointer transition-all duration-300 hover:fill-blue-300"
                onMouseOver={() => handleMouseOver("2023/06")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="100"
                y="52"
                textAnchor="middle"
                fill="black"
                className="font-mono font-semibold pointer-events-none select-none"
                fontSize={9}
              >
                Abitur
              </text>
              <text
                x="100"
                y="62"
                textAnchor="middle"
                fill="black"
                className="font-mono pointer-events-none select-none"
                fontSize={7}
              >
                06/2023
              </text>

              {/* Dot 2 */}
              <circle
                id="dot2"
                cx="300"
                cy="50"
                r="37"
                fill="white"
                className="dot cursor-pointer transition-all duration-300 hover:fill-blue-300"
                onMouseOver={() => handleMouseOver("2024/07")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="300"
                y="52"
                textAnchor="middle"
                fill="black"
                className="font-mono font-semibold pointer-events-none select-none"
                fontSize={9}
              >
                Praktikum
              </text>
              <text
                x="300"
                y="62"
                textAnchor="middle"
                fill="black"
                className="font-mono pointer-events-none select-none"
                fontSize={7}
              >
                04/2025
              </text>

              {/* Dot 3 */}
              <circle
                id="dot3"
                cx="500"
                cy="50"
                r="37"
                fill="white"
                className="dot cursor-pointer transition-all duration-300 hover:fill-blue-300"
                onMouseOver={() => handleMouseOver("2025/06")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="500"
                y="52"
                textAnchor="middle"
                fill="black"
                className="font-mono font-semibold pointer-events-none select-none"
                fontSize={9}
              >
                Diplom
              </text>
              <text
                x="500"
                y="62"
                textAnchor="middle"
                fill="black"
                className="font-mono pointer-events-none select-none"
                fontSize={7}
              >
                06/2025
              </text>

              {/* End marker */}
              <text
                x="720"
                y="60"
                stroke="white"
                className="date-label font-mova text-[14px] sm:text-[16px]"
              >
                {t("lng.Titles.edu4")}
              </text>
              <line
                x1="700"
                y1="30"
                x2="700"
                y2="70"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
            {tooltip && (
              <div className="tooltip bg-white/90 backdrop-blur-sm text-black 
              px-4 py-2 rounded-lg shadow-xl text-[12px] sm:text-[14px] 
              font-medium max-w-[300px] border border-blue-200">
                {tooltip}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Mobile Timeline */
<div
      ref={timelineContainerRef}
      className="container mt-8 mx-auto flex flex-col items-center"
    >
      <div className="svg-wrapper w-full max-w-md">
        {/* Kept viewBox at 160 as requested */}
        <svg viewBox="0 0 160 750" className="w-full h-auto">
          
          {/* Shifted content by 30px on X axis.
             Old X = 50. New X = 80 (which is the exact center of 160).
          */}
          <g transform="translate(30, 0)">
            <path
              id="curve"
              d="M 50 50 Q 20 100, 50 150 T 50 250 T 50 350"
              fill="none"
              stroke="white"
              strokeWidth="2"
              opacity="1"
            />

            {/* Dot 1 */}
            <circle
              id="dot1"
              cx="50"
              cy="50"
              r="18"
              fill="white"
              className="dot cursor-pointer"
              onTouchStart={() => handleMouseOver("2023/06")}
              onTouchEnd={() => setTooltip("")}
            />
            <text
              x="50"
              y="52"
              textAnchor="middle"
              fill="black"
              className="font-mono font-semibold pointer-events-none"
              fontSize={5}
            >
              Abitur
            </text>
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fill="black"
              className="font-mono pointer-events-none"
              fontSize={4}
            >
              06/2023
            </text>

            {/* Dot 2 */}
            <circle
              id="dot2"
              cx="50"
              cy="150"
              r="18"
              fill="white"
              className="dot cursor-pointer"
              onTouchStart={() => handleMouseOver("2024/07")}
              onTouchEnd={() => setTooltip("")}
            />
            <text
              x="50"
              y="152"
              textAnchor="middle"
              fill="black"
              className="font-mono font-semibold pointer-events-none"
              fontSize={5}
            >
              Praktikum
            </text>
            <text
              x="50"
              y="158"
              textAnchor="middle"
              fill="black"
              className="font-mono pointer-events-none"
              fontSize={4}
            >
              04/2025
            </text>

            {/* Dot 3 */}
            <circle
              id="dot3"
              cx="50"
              cy="250"
              r="18"
              fill="white"
              className="dot cursor-pointer"
              onTouchStart={() => handleMouseOver("2025/06")}
              onTouchEnd={() => setTooltip("")}
            />
            <text
              x="50"
              y="252"
              textAnchor="middle"
              fill="black"
              className="font-mono font-semibold pointer-events-none"
              fontSize={5}
            >
              Diplom
            </text>
            <text
              x="50"
              y="258"
              textAnchor="middle"
              fill="black"
              className="font-mono pointer-events-none"
              fontSize={4}
            >
              06/2025
            </text>

            {/* End marker */}
            <text
              x="50"
              y="380"
              textAnchor="middle"
              stroke="white"
              className="date-label font-mova text-[10px]"
            >
              {t("lng.Titles.edu4")}
            </text>
            <line
              x1="30"
              y1="350"
              x2="70"
              y2="350"
              stroke="white"
              strokeWidth="2"
            />
          </g>
        </svg>

        {tooltip && (
          <div className="tooltip bg-white/90 backdrop-blur-sm text-black px-3 py-2 rounded-lg shadow-xl text-[10px] font-medium max-w-[250px] border border-blue-200 mt-4 mx-auto text-center">
            {tooltip}
          </div>
        )}
      </div>
    </div>
      )}
    </div>
  );
};

export default SectionWrapper(Education, "Education");