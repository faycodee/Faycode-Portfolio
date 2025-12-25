import React, { useRef, useEffect } from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const [t] = useTranslation();
  
  // Refs for animations
  const videoRef = useRef(null);
  const sectionSubTextRef = useRef(null);
  const sectionHeadTextRef = useRef(null);
  const emailContainerRef = useRef(null);
  const phoneContainerRef = useRef(null);
  const socialLinksRef = useRef([]);
  const footerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animate video background
    if (videoRef.current) {
      gsap.fromTo(
        videoRef.current,
        { opacity: 0, scale: 1.1 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

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

    // Animate email container
    gsap.fromTo(
      emailContainerRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: emailContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.7,
      }
    );

    // Animate phone container
    gsap.fromTo(
      phoneContainerRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phoneContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
        delay: 0.9,
      }
    );

    // Animate social links with stagger
    if (socialLinksRef.current.length > 0) {
      gsap.fromTo(
        socialLinksRef.current,
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: socialLinksRef.current[0],
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: 1.1,
        }
      );
    }

    // Animate footer
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col justify-center">
      <div className="-mt-[8rem] xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center items-center">
        <div className="flex-[0.75] bg-jet p-6 sm:p-8 rounded-2xl relative">
          <video
            ref={videoRef}
            src="./vid0.mp4"
            alt="Background video"
            autoPlay
            style={{ zIndex: -5 }}
            loop
            muted
            className="absolute inset-0 w-full sm:block hidden h-full object-cover rounded-2xl"
          />
          
          <div className="relative z-10">
            <p ref={sectionSubTextRef} className={styles.sectionSubText}>
              {t("lng.Titles.contact1")}
            </p>
            <h3 ref={sectionHeadTextRef} className={styles.sectionHeadTextLight}>
              {t("lng.Titles.contact2")}
            </h3>

            {/* Email Section */}
            <div ref={emailContainerRef} className="mt-8 sm:mt-10">
              <p className="font-bold text-[14px] sm:text-[16px] mb-2 text-gray-200">
                Email:
              </p>
              <a
                href="mailto:faysaloumzil1@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline 
                decoration-blue-400/50 hover:decoration-blue-300 
                transition-all duration-300 text-[13px] sm:text-[15px]
                inline-block hover:translate-x-1"
              >
                faysaloumzil1@gmail.com
              </a>
            </div>

            {/* Phone Section */}
            <div ref={phoneContainerRef} className="mt-6 sm:mt-8">
              <p className="font-bold text-[14px] sm:text-[16px] mb-2 text-gray-200">
                {t("lng.Titles.contact5")}
              </p>
              <a
                href="https://wa.me/212613487814"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline 
                decoration-blue-400/50 hover:decoration-blue-300 
                transition-all duration-300 text-[13px] sm:text-[15px]
                inline-flex items-center gap-2 hover:translate-x-1"
              >
                <svg 
                  className="w-5 h-5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                +212 6 13 48 78 14
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-10">
              <a
                ref={(el) => (socialLinksRef.current[0] = el)}
                href="https://www.linkedin.com/in/faycal-oumzil-b97888250/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl sm:text-3xl hover:text-blue-400 
                transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>

              <a
                ref={(el) => (socialLinksRef.current[1] = el)}
                href="https://github.com/faycodee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl sm:text-3xl hover:text-blue-400 
                transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                ref={(el) => (socialLinksRef.current[2] = el)}
                href="https://profile.indeed.com/?hl=en_MA&co=MA&from=gnav-jobseeker-profile--profile-one-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl sm:text-3xl hover:text-blue-400 
                transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Indeed Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="28"
                  height="28"
                  fill="currentColor"
                >
                  <path d="M17 0c-3.95 0-7.146 3.196-7.146 7.146 0 3.216 2.064 6.99 7.146 6.99 0.953 0 2.23-0.084 2.998-0.202l-0.113 0.953c-1.086 0-1.952 0.024-3.444 0.024-4.22 0-7.62-3.056-7.62-7.812 0-4.41 3.214-7.88 7.62-7.88s7.856 3.602 7.856 7.88c0 4.578-3.92 7.652-8.274 7.652-1.718 0-3.05-0.094-4.442-0.214l0.098-0.806h0.098l1.616 0.084c1.514 0.084 3.234-0.098 3.234-1.15 0-0.854-0.63-1.006-1.548-1.17l-0.962-0.166c-1.514-0.25-3.072-0.906-3.072-3.064 0-2.202 1.8-3.494 4.024-3.494 1.594 0 2.53 0.404 3.364 0.63l-0.404 2.13c-1.61-0.6-2.644-0.916-3.582-0.916-1.148 0-1.944 0.542-1.944 1.48 0 0.816 0.648 1.01 1.6 1.14l0.998 0.13c1.81 0.218 3.048 0.906 3.048 3.202 0 2.186-1.972 3.444-4.634 3.444-2.25 0-3.53-0.51-4.56-0.73v-0.73h-0.144l-0.98 0.17-0.314 0.998 0.074 0.73h2.126c4.95 0 7.62-3.23 7.62-7.884 0-4.582-3.286-7.806-7.62-7.806z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <p
        ref={footerRef}
        className="text-center font-mova mt-[50px] sm:mt-[70px] px-4"
      >
        <span className="text-[12px] sm:text-[14px] text-gray-300">
          Mozilla Public License Version 2.0 <span className="font-sans">©</span>
        </span>
        <br />
        <span className="text-[10px] sm:text-[11px] text-blue-100 mt-2 inline-block">
          {t("lng.Titles.contact6")}{" "}
          <a
            href="https://www.linkedin.com/in/faycal-oumzil-b97888250/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-300 underline-offset-3 
            hover:text-blue-200 transition-colors duration-300"
          >
            faycal oumzil
          </a>
        </span>
      </p>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");