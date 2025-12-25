import React, { useState, useMemo, useRef, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Ensure this CSS is imported
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  datacer,
  gitcer,
  pythoncer,
  jscer,
  aiintro,
  algo,
  py2,
  hacker,
  english,
  cyber,
} from "../assets";

const iconMap = {
  datacer: datacer,
  gitcer: gitcer,
  pythoncer: pythoncer,
  jscer: jscer,
  aiintro: aiintro,
  algo: algo,
  py2: py2,
  hacker: hacker,
  english: english,
  cyber: cyber,
};

gsap.registerPlugin(ScrollTrigger);

const Certificat = ({ obj, pos, certRef }) => {
  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      ref={certRef}
      key={pos}
      className="card-shadow cursor-grab group relative flex flex-col 
      my-6 bg-jet shadow-sm rounded-lg w-96 hover:shadow-lg
      transition-shadow duration-300 min-h-[300px] max-h-[330px] 
      max-md:w-[240px] max-md:min-h-[280px] max-sm:w-[280px]"
    >
      <img
        src="./pin.png"
        alt="Pin decoration"
        className="absolute z-10 w-[50px] sm:w-[70px] rotate-[-30deg] top-2 left-[-11px]"
      />
      <div className="relative m-2.5 overflow-hidden text-white rounded-md flex justify-start items-start">
        <img
          className="transition-transform duration-500 rotate-2 transform-gpu m-1 group-hover:scale-105 cursor-pointer"
          src={iconMap[obj.image]}
          alt={obj.name}
          onClick={() => handleImageClick(obj.link)}
        />
        <img
          src="./pin.png"
          alt="Pin decoration"
          className="absolute z-10 w-[50px] sm:w-[70px] rotate-[-12deg] bottom-0 right-[-11px]"
        />
      </div>
      <div className="px-3 sm:px-4">
        <h3 className="font-mova mb-1 mt-2 sm:mt-3 text-[14px] sm:text-[16px] line-clamp-2">
          {obj.name}
        </h3>
        <p
          onClick={() => handleImageClick(obj.link)}
          className="text-gray-400 text-[10px] sm:text-[12px] leading-[16px] sm:leading-[20px] 
          font-poppins tracking-[0.5px] mb-6 sm:mb-8 cursor-pointer hover:text-gray-300
          transition-colors line-clamp-3"
        >
          {obj.disc}
        </p>
        <span className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 font-thin text-[10px] sm:text-[12px]">
          from:{" "}
          <a
            className="text-blue-400 cursor-pointer hover:text-blue-300 transition-colors"
            href={`https://${obj.company}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {obj.company}
          </a>
        </span>
      </div>
    </div>
  );
};

const filterOptions = [
  { label: "All", value: "" },
  { label: "Web Dev", value: "web" },
  { label: "Cyber Security", value: "cyber" },
  { label: "Data Science", value: "data" },
  { label: "AI", value: "ai" },
];

const Certifications = () => {
  const [t, i18n] = useTranslation();
  const screensize = useSelector((state) => state.screensize);

  // Refs for animations
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const filterButtonsRef = useRef([]);
  const swiperRef = useRef(null);

  // Load certifications
  const certifications = useMemo(
    () => t("lng.Const.certifications", { returnObjects: true }),
    [t]
  );

  const [selectedFilter, setSelectedFilter] = useState("");
  const slidesPerVieww = screensize.isMobile ? 1 : 3;

  // Filter certifications
  const filteredCertifications = selectedFilter
    ? certifications.filter(
        (c) => c.type && c.type.split(",").includes(selectedFilter)
      )
    : certifications;

  // GSAP Animations
  useEffect(() => {
    // ... (Previous animations kept same for brevity)
    gsap.fromTo(
      sectionSubTextRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionSubTextRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      }
    );
    gsap.fromTo(
      sectionHeadTextRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: sectionHeadTextRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        delay: 0.2,
      }
    );
    gsap.fromTo(
      descriptionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: descriptionRef.current, start: "top 85%", toggleActions: "play none none reverse" },
        delay: 0.4,
      }
    );
    if (filterButtonsRef.current.length > 0) {
      gsap.fromTo(
        filterButtonsRef.current,
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.4)", stagger: 0.1,
          scrollTrigger: { trigger: filterButtonsRef.current[0], start: "top 85%", toggleActions: "play none none reverse" },
          delay: 0.6,
        }
      );
    }
    if (swiperRef.current) {
      gsap.fromTo(
        swiperRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: swiperRef.current, start: "top 85%", toggleActions: "play none none reverse" },
          delay: 0.8,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="-mt-[4rem] max-sm:-mt-[1rem]">
      <div>
        <p ref={sectionSubTextRef} className={`${styles.sectionSubText}`}>
          {t("lng.Titles.certif1")}
        </p>
        <h2 ref={sectionHeadTextRef} className={`${styles.sectionHeadTextLight}`}>
          {t("lng.Titles.certif2")}
        </h2>
      </div>
      <div className="w-full flex">
        <p
          ref={descriptionRef}
          className="mt-4 text-taupe text-[10px] sm:text-[12px] max-w-3xl 
          leading-[20px] sm:leading-[30px]"
        >
          {t("lng.Titles.certif3")}
        </p>
      </div>

      <div className="flex gap-2 sm:gap-3 my-4 sm:my-6 flex-wrap">
        {filterOptions.map((opt, index) => (
          <button
            key={opt.value}
            ref={(el) => (filterButtonsRef.current[index] = el)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border-2 
            text-[11px] sm:text-[13px] font-medium transition-all duration-300
            ${
              selectedFilter === opt.value
                ? "bg-blue-500 text-white border-blue-500 shadow-lg scale-105"
                : "bg-transparent text-gray-300 border-gray-600 hover:border-blue-400 hover:text-blue-400"
            }`}
            onClick={() => setSelectedFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div
        ref={swiperRef}
        className={`${styles.innerWidth} mx-auto flex flex-row max-sm:mt-[20px]`}
      >
        <Swiper
          className="w-full h-[510px] max-md:h-[410px] max-sm:h-[450px]"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={slidesPerVieww}
          // 1. ENABLE NAVIGATION
          navigation={true} 
          pagination={{ el: ".swiper-pagination", clickable: true }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          // 2. INJECT CSS VARIABLES FOR BLUE COLOR
          style={{
            "--swiper-navigation-color": "#60a5fa", // Bright Blue (Tailwind Blue-400)
            "--swiper-pagination-color": "#60a5fa", // Matching Pagination
            "--swiper-navigation-size": "30px",     // Adjust size if needed
          }}
        >
          {filteredCertifications.map((e, i) => (
            <SwiperSlide key={i}>
              <Certificat obj={e} pos={i} />
            </SwiperSlide>
          ))}
          
          <div
            className="swiper-pagination"
            style={
              screensize.isMobile
                ? {
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "0px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                    zIndex: 20
                  }
                : {
                    position: "absolute",
                    bottom: "-8px",
                  }
            }
          ></div>
        </Swiper>
      </div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");