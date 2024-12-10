import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Education = () => {
  const [tooltip, setTooltip] = useState("");
  
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
        setTooltip(
          "At that time, I only knew a little bit of programming, such as html,css"
        );
        break;
      case "2024/07":
        setTooltip(
          "By this date, I had spent a year studying and learned a lot, including: algorithm , php , python , advanced html css  , bootstrap , ajax , mysql ... "
        );
        break;
      case "2024/12":
        setTooltip(
          "On this date, four months into my second year, I learned react , mongo , redux , advanced mysql , approch agile , tailwindcss , gsap , framermotion  "
        );
        break;
      default:
        setTooltip("");
    }
  };

  return (
    <div className="-mt-[4rem] overflow-hidden max-sm:-mt-[1rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Education.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[13px] max-w-3xl leading-[30px]
          max-sm:leading-[22px]"
        >
          I am in my final year at{" "}
          <a
            href="https://www.ofppt.ma/"
            target="_blank"
            className="font-beckman font-bold text-blue-200 hover:text-blue-400 "
          >
            OFPPT
          </a>{" "}
          , Morocco's top vocational training institute, renowned globally for
          its rigorous, hands-on curriculum. My training has equipped me with
          technical expertise and problem-solving skills, preparing me to excel
          in the tech industry.
          <br />
          Note: There Are skills I learned through self-learning like gsap
          ,tailwindcss ...
        </motion.p>
      </div>
       <div className="container max-sm:rotate-[90deg] max-sm:mt-[170px]  ">
      <div className="svg-wrapper max-sm:w-[500px]">
        <svg viewBox="0 0 800 100" >
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
            Present
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
    </div>
  );
};

export default SectionWrapper(Education, "Education");
