import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { certifications } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Certificat = ({ obj, pos }) => {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.fromTo(
      "#swiperr",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: "#swiperr",
          start: "top 80%",
          end: "center 15%",
          scrub: 4.2,
          // markers: 1,
          // toggleActions: "restart pause reverse pause",
        },
        duration: 8, // Added duration for clarity
      }
    );
  }, []);

  const handleImageClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      key={pos}
      className=" card-shadow cursor-grab group relative flex flex-col 
      my-6 ml-5 bg-jet shadow-sm scah rounded-lg w-96 hover:shadow-lg
       transition-shadow duration-300 min-h-[300px] max-h-[330px]"
    >
      <img
        src="./pin.png"
        alt="Pin decoration"
        className="absolute z-10 w-[70px] rotate-[-30deg] top-2 left-[-11px]"
      />
      <div className="relative m-2.5 overflow-hidden text-white rounded-md flex justify-start items-start">
        <img
          className="transition-transform duration-500 rotate-2 transform-gpu m-1 group-hover:scale-40"
          src={obj.image}
          alt={obj.name}
          onClick={() => handleImageClick(obj.link)}
        />
        <img
          src="./pin.png"
          alt="Pin decoration"
          className="absolute z-10 w-[70px] rotate-[-12deg] bottom-0 right-[-11px]"
        />
      </div>
      <div className="px-4">
        <h3 className="font-mova mb-1 mt-3">{obj.name}</h3>
        <p
          onClick={() => handleImageClick(obj.link)}
          className="text-gray-500 sm:text-[12px] text-[10px] max-w-3xl sm:leading-[24px] leading-[15px] font-poppins tracking-[1px] mb-8"
        >
          {obj.disc}
        </p>
        <span className="absolute bottom-3 font-thin">
          from:{" "}
          <a
            className="text-blue-300 cursor-pointer text-[12px] hover:text-blue-500"
            href={`https://${obj.company}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {obj.company}
          </a>
        </span>
      </div>
      <div className="px-4 pb-4 pt-0 mt-2"></div>
    </div>
  );
};

const Certifications = () => {
  const dispatch = useDispatch();
  const screensize = useSelector((state) => state.screensize);
  const slidesPerVieww = screensize.isMobile ? 1 : 3;
  return (
    <div className="-mt-[4rem] max-sm:-mt-[1rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Certifications.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[13px] max-w-3xl leading-[30px]"
        >
          Highlighting key certifications that validate my expertise and
          commitment to professional development. Each certification reflects
          skills gained and dedication to staying updated in my field.
        </motion.p>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-row max-sm:mt-[60px] `}
      >
        <Swiper
          id="swiperr"
          className="w-full   h-[510px] "
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={1}
          slidesPerView={slidesPerVieww}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {certifications.map((e, i) => (
            <SwiperSlide key={i}>
              <Certificat obj={e} pos={i} />
            </SwiperSlide>
          ))}
          <div
            className="swiper-pagination"
            style={{ position: "absolute", bottom: "-8" }}
          ></div>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Certifications, "certifications");
