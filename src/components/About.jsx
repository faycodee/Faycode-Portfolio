import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";
import { frontend, backend, datamanagement } from "../assets";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const iconMap = {
  frontend: frontend,
  backend: backend,
  datamanagement: datamanagement,
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.15,
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="xs:w-[200px] mb-[50px] h-[100px] w-full card-gradient rounded-[20px]
       shadow-card my-[70px] max-md:h-[30px] max-md:mt-[100px] max-md:mx-[10px] max-md:w-[25%]"
    >
      <div className="bg-jetLight rounded-[20px] px-12 min-h-[200px] flex justify-evenly items-center flex-col max-sm:h-[40px] max-sm:px-0">
        <img
          src={iconMap[icon]}
          alt={title}
          className="w-10 h-10 object-contain"
        />
        <h3 className="text-taupe text-[15px] max-sm:w-[70%] max-sm:text-[10px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

const About = () => {
  const { t, i18n } = useTranslation();
  const [services, setServices] = useState([]);
  
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const fetchedServices = t("lng.Const.services", { returnObjects: true });
    if (Array.isArray(fetchedServices)) {
      setServices(fetchedServices);
    } else {
      console.error("Services data missing or invalid:", fetchedServices);
      setServices([]);
    }
  }, [i18n.language, t]);

  useEffect(() => {
    // Animate section subtitle
    gsap.fromTo(
      sectionSubTextRef.current,
      {
        opacity: 0,
        y: 40,
      },
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

    // Animate section heading
    gsap.fromTo(
      sectionHeadTextRef.current,
      {
        opacity: 0,
        y: 40,
      },
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
      {
        opacity: 0,
        y: 40,
      },
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

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="-mt-[12rem] conti h-[100vh]">
        <div>
          <p
            ref={sectionSubTextRef}
            className={`${styles.sectionSubText} max-sm:mt-[40px]`}
          >
            {t("lng.Titles.about1")}
          </p>
          <h2 ref={sectionHeadTextRef} className={styles.sectionHeadText}>
            {t("lng.Titles.about2")}
          </h2>
        </div>
        <p
          ref={paragraphRef}
          className="text-taupe text-[13px] max-w-3xl leading-[30px] max-sm:leading-[20px] max-sm:mt-[10px]"
        >
          {t("lng.Titles.about3")}
        </p>
        <div className="mt-10 flex flex-wrap gap-10 max-md:w-[100vw] max-md:gap-0 max-md:flex-row">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");