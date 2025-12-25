import React, { useState, useRef, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import {
  github,
  pineapple,
  pineappleHover,
  linkedin as linkedinn,
} from "../assets";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import {
  getmat,
  rest,
  ecoad,
  fayshop,
  employee,
  timepro,
} from "../assets";

const iconMap = {
  getmat: getmat,
  rest: rest,
  ecoad: ecoad,
  fayshop: fayshop,
  employee: employee,
  timepro: timepro,
};

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  linkedin,
  demo,
  rapport,
  index,
  vidExist,
  active,
  handleClick,
  cardRef,
}) => {
  const [t] = useTranslation();

  return (
    <div
      ref={cardRef}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
      h-[350px] cursor-pointer card-shadow transition-all duration-500 ease-out`}
      onClick={() => active !== id && handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"
      ></div>

      <img
        src={iconMap[image]}
        alt={name}
        className={`absolute w-full h-full object-cover rounded-[24px] ${
          active === id ? "" : "filter grayscale"
        }`}
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-4 sm:p-6 lg:p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
          >
            <div className="absolute inset-0 flex justify-end m-2 sm:m-3">
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(repo, "_blank");
                }}
                className="bg-night w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full 
                  flex justify-center items-center cursor-pointer
                  opacity-[0.9] hover:opacity-[1] transition-opacity"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(linkedin, "_blank");
                }}
                className="bg-night w-8 h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full 
                  flex justify-center items-center cursor-pointer
                  opacity-[0.9] hover:opacity-[1] transition-opacity ml-2"
              >
                <img
                  src={linkedinn}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold text-[18px] sm:text-[24px] lg:text-[32px] 
              text-timberWolf uppercase font-beckman mt-0 mb-2"
            >
              {name}
            </h2>
            <p
              className="text-silver text-[10px] sm:text-[12px] lg:text-[14px] 
              max-w-3xl leading-[16px] sm:leading-[18px] lg:leading-[24px]
              font-poppins tracking-[0.5px] mb-3"
            >
              {description}
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              {demo && (
                <button
                  className="live-demo flex justify-center items-center
             text-[11px] sm:text-[14px] lg:text-[16px] text-timberWolf 
             font-bold font-beckman px-3 py-2 sm:px-4 sm:py-3
             rounded-[10px] glassmorphism 
             hover:bg-battleGray hover:text-eerieBlack 
             transition duration-[0.2s] ease-in-out
             min-w-[100px] sm:min-w-[120px] lg:min-w-[138px]"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(demo, "_blank");
                  }}
                  onMouseOver={() => {
                    document
                      .querySelector(".btn-icon")
                      ?.setAttribute("src", pineappleHover);
                  }}
                  onMouseOut={() => {
                    document
                      .querySelector(".btn-icon")
                      ?.setAttribute("src", pineapple);
                  }}
                >
                  <img
                    src={pineapple}
                    alt="pineapple"
                    className="btn-icon w-[20px] h-[20px] sm:w-[26px] sm:h-[26px] lg:w-[34px] lg:h-[34px] 
                    object-contain mr-2"
                  />
                  <span className="whitespace-nowrap">LIVE DEMO</span>
                </button>
              )}

            <div className="z-50 ">
            {rapport !== "not exist" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(rapport, "_blank");
                  }}
                  className="flex items-center z-50 mb-1 justify-center 
                text-[10px] sm:text-[11px] lg:text-[12px] text-black
                px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-200 rounded-lg 
                hover:bg-black hover:text-white transition-colors
                font-medium whitespace-nowrap"
                >
                  {t("lng.Const.prj.1")}
                </button>
              )}
              {vidExist === "true" && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(linkedin, "_blank");
                  }}
                  className="flex items-center z-50  justify-center 
                text-[10px] sm:text-[11px] lg:text-[12px] text-black
                px-3 py-2 sm:px-4 sm:py-2.5 bg-slate-200 rounded-lg 
                hover:bg-black hover:text-white transition-colors
                font-medium whitespace-nowrap"
                >
                  {t("lng.Const.prj.2")}
                </button>
              )}
            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-4");
  const [t, i18n] = useTranslation();
  
  // Refs for animations
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectCardsRef = useRef([]);

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

    // Animate project cards with stagger
    if (projectCardsRef.current.length > 0) {
      gsap.fromTo(
        projectCardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.6,
            from: "start",
            ease: "power2.out",
          },
          scrollTrigger: {
            trigger: projectCardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 0.6,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [i18n.language]);

  const projects = t("lng.Const.projects", { returnObjects: true });

  return (
    <div className="-mt-[10rem]">
      <div>
        <p ref={sectionSubTextRef} className={`${styles.sectionSubText}`}>
          {t("lng.Titles.project1")}
        </p>
        <h2 ref={sectionHeadTextRef} className={`${styles.sectionHeadTextLight}`}>
          {t("lng.Titles.project2")}
        </h2>
      </div>

      <div className="w-full flex h-[40px]">
        <p
          ref={descriptionRef}
          className="text-taupe text-[13px] max-w-3xl leading-[30px] max-sm:leading-[20px] max-sm:text-[10px]"
        >
          {t("lng.Titles.project3")}
        </p>
      </div>

      <div className={`${styles.innerWidth} mx-auto flex max-md:mb-[500px] flex-col`}>
        <div className="mt-[60px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
              rapport={project.rapport}
              vidExist={project.vidExist}
              cardRef={(el) => (projectCardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");