import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSelector } from "react-redux";

const Education = () => {
  const [tooltip, setTooltip] = useState("");
  const [t] = useTranslation();
  const screensize = useSelector((state) => state.screensize);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!screensize.isMobile) {
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
    }
  }, [screensize]);

  const handleMouseOver = (year) => {
    switch (year) {
      case "2023/09":
        setTooltip(t("lng.Titles.edu5"));
        break;
      case "2024/07":
        setTooltip(t("lng.Titles.edu6"));
        break;
      case "2024/12":
        setTooltip(t("lng.Titles.edu7"));
        break;
      default:
        setTooltip("");
    }
  };

  return (
    <div className="w-full -mt-16 overflow-hidden max-sm:-mt-4">
      {/* Header */}
      <motion.div variants={textVariant()} className="mb-8 text-center">
        <p className={`${styles.sectionSubText}`}>{t("lng.Titles.project1")}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          {t("lng.Titles.edu2")}
        </h2>
      </motion.div>

      {/* Description */}
      <div className="w-full flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[13px] max-w-3xl leading-[30px] max-sm:leading-[22px] text-center"
        >
          {t("lng.Titles.edu3/1")}
          <a
            href="https://www.ofppt.ma/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-beckman font-bold text-blue-200 hover:text-blue-400"
          >
            OFPPT
          </a>{" "}
          {t("lng.Titles.edu3/2")}
          <br />
          {t("lng.Titles.edu3/3")}
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="container mt-12">
        {screensize.isMobile ? (
          // Vertical timeline for mobile
          <div className="flex flex-col items-center">
            {["2023/09", "2024/07", "2024/12"].map((date, index) => (
              <div
                key={date}
                className="flex flex-col items-center mb-8"
                onMouseOver={() => handleMouseOver(date)}
                onMouseOut={() => setTooltip("")}
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                  <span className="text-black text-xs font-mono">{date}</span>
                </div>
                {index < 2 && <div className="w-1 h-16 bg-white mt-2" />}
              </div>
            ))}
          </div>
        ) : (
          // Horizontal timeline for desktop
          <div className="svg-wrapper">
            <svg viewBox="0 0 800 100">
              <path
                id="curve"
                d="M 100 50 Q 200 20, 300 50 T 500 50 T 700 50"
                fill="none"
                stroke="white"
                strokeWidth="3"
                opacity="1"
              />
              <circle
                id="dot1"
                cx="100"
                cy="50"
                r="25"
                fill="white"
                className="dot"
                onMouseOver={() => handleMouseOver("2023/09")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="100"
                y="55"
                textAnchor="middle"
                fill="black"
                className="font-mono"
                fontSize={10}
                onMouseOver={() => handleMouseOver("2023/09")}
                onMouseOut={() => setTooltip("")}
              >
                2023/09
              </text>
              <circle
                id="dot2"
                cx="300"
                cy="50"
                r="25"
                fill="white"
                className="dot"
                onMouseOver={() => handleMouseOver("2024/07")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="300"
                y="55"
                textAnchor="middle"
                fill="black"
                className="font-mono"
                fontSize={10}
                onMouseOver={() => handleMouseOver("2024/07")}
                onMouseOut={() => setTooltip("")}
              >
                2024/07
              </text>
              <circle
                id="dot3"
                cx="500"
                cy="50"
                r="25"
                fill="white"
                className="dot"
                onMouseOver={() => handleMouseOver("2024/12")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="500"
                y="55"
                textAnchor="middle"
                fill="black"
                className="font-mono"
                fontSize={10}
                onMouseOver={() => handleMouseOver("2024/12")}
                onMouseOut={() => setTooltip("")}
              >
                2024/12
              </text>
              <text
                x="720"
                y="60"
                stroke="white"
                className="date-label font-mova border border-l-4"
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
          </div>
        )}
        {tooltip && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-black p-2 rounded shadow-lg text-sm">
            {tooltip}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "Education");
