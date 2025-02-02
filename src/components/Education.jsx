import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  frontend,
  backend,
  ux,
  datamanagement,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  agile,
  bootstrap,
  framerm,
  githubi,
  // gsap,
  mysql,
  php,
  python,
  reactjs,
  redux,
  tailwind,
  three,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  employee,
  fayshop,
  getmat,
  parallax,
  porthtml,
  timepro,
  datacer,
  gitcer,
  jscer,
  pythoncer,
} from "../assets";
const Education = () => {
  const screensize = useSelector((state) => state.screensize);

  const [tooltip, setTooltip] = useState("");
  const [t, i18n] = useTranslation();
  !screensize.isMobile &&
    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
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
    }, []);

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
    <div className="-mt-[4rem] overflow-hidden max-sm:-mt-[1rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          {" "}
          {t("lng.Titles.project1")}{" "}
        </p>
        <h2 className={`${styles.sectionHeadTextLight}`}>
          {" "}
          {t("lng.Titles.edu2")}{" "}
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[13px] max-w-3xl leading-[30px]
          max-sm:leading-[22px]"
        >
          {t("lng.Titles.edu3/1")}{" "}
          <a
            href="https://www.ofppt.ma/"
            target="_blank"
            className="font-beckman font-bold text-blue-200 hover:text-blue-400 "
          >
            OFPPT
          </a>{" "}
          {t("lng.Titles.edu3/2")}
          <br />
          {t("lng.Titles.edu3/3")}
        </motion.p>
      </div>
      {!screensize.isMobile ? (
        <div className="container  max-sm:mt-[60px]  ">
          <div className="svg-wrapper ">
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
            {tooltip && <div className="tooltip">{tooltip}</div>}
          </div>
        </div>
      ) : (
        <div className="container max-sm:mt-[30px]">
          <div className="svg-wrapper">
            <svg viewBox="0 0 100 400">
              <path
                id="curve"
                d="M 50 50 Q 20 100, 50 150 T 50 250 T 50 350"
                fill="none"
                stroke="white"
                strokeWidth="2"
                opacity="1"
              />
              <circle
                id="dot1"
                cx="50"
                cy="50"
                r="15"
                fill="white"
                className="dot"
                onMouseOver={() => handleMouseOver("2023/09")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="38"
                y="50"
                textAnchor="start"
                fill="black"
                className="font-mono"
                fontSize={6}
                onMouseOver={() => handleMouseOver("2023/09")}
                onMouseOut={() => setTooltip("")}
              >
                2023/09
              </text>
              <circle
                id="dot2"
                cx="50"
                cy="150"
                r="15"
                fill="white"
                className="dot"
                onMouseOver={() => handleMouseOver("2024/07")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="38"
                y="150"
                textAnchor="start"
                fill="black"
                className="font-mono"
                fontSize={6}
                onMouseOver={() => handleMouseOver("2024/07")}
                onMouseOut={() => setTooltip("")}
              >
                2024/07
              </text>
              <circle
                id="dot3"
                cx="50"
                cy="250"
                r="15"
                fill="white"
                className="dot"
                onMouseOver={() => handleMouseOver("2024/12")}
                onMouseOut={() => setTooltip("")}
              />
              <text
                x="38"
                y="250"
                textAnchor="start"
                fill="black"
                className="font-mono"
                fontSize={6}
                onMouseOver={() => handleMouseOver("2024/12")}
                onMouseOut={() => setTooltip("")}
              >
                2024/12
              </text>
              <text
                x="60"
                y="370"
                stroke="white"
                className="date-label font-mova border border-l-4"
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
            </svg>
            {tooltip && <div className="tooltip">{tooltip}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Education, "Education");
