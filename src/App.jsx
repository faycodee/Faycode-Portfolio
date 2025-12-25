import { BrowserRouter } from "react-router-dom";
import {
  About,
  Service,
  Contact,
  Experience,
  Hero,
  Navbar,
  Certifications,
  Tech,
  Projects,
  Cursor,
  Education,
} from "./components";
import { IoArrowUpOutline } from "react-icons/io5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import SchnellContact from "./components/SchnellContact";

const App = () => {
  const screensize = useSelector((state) => state.screensize);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      let newObjSizes = {
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isLaptop: window.innerWidth >= 1024 && window.innerWidth < 1440,
        isDesktop: window.innerWidth >= 1440,
      };
      dispatch({ type: "UPDATEscreensize", screen: newObjSizes });
    };
    window.addEventListener("resize", handleResize);
    // Call once on mount to ensure state is correct immediately
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  gsap.registerPlugin(ScrollTrigger);
  const cursorr = useSelector((state) => state.cursor);

  // Panel Animations
  !screensize.isMobile &&
    useGSAP(() => {
      // Cursor animation
      gsap.fromTo(
        ".cursor-outline",
        { rotate: `${cursorr.rotate}` },
        {
          rotate: `-${cursorr.rotate}deg`,
          repeat: -1,
          yoyo: 1,
          duration: 10,
        }
      );

      // Panel animations
      gsap.utils.toArray(".panel").forEach((panel, i) => {
        const initialStates = [
          { x: 0, y: 0 }, // Hero
          { x: 0, y: 0 }, // About
          { x: "-100%", y: 0 }, // Service
          { x: "100%", y: 0 }, // Tech
          { x: 0, y: 0 }, // Projects (placeholder index)
          { x: "100%", y: 0 }, // Certifications
          { x: 0, y: 0 }, // Education
          { x: 0, y: 0 }, // Contact
        ];

        // Ensure we don't go out of bounds if panels change
        const state = initialStates[i] || { x: 0, y: 0 };

        gsap.set(panel, state);

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          end: "bottom top",
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            gsap.to(panel, {
              x: 0,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
            });
          },
          onLeaveBack: () => {
            gsap.to(panel, {
              ...state,
              duration: 1.2,
              ease: "power2.in",
            });
          },
          onEnterBack: () => {
            gsap.to(panel, {
              x: 0,
              y: 0,
              duration: 1.2,
              ease: "power2.out",
            });
          },
          onLeave: () => {
            gsap.to(panel, {
              ...state,
              duration: 1.2,
              ease: "power2.in",
            });
          },
        });
      });
    }, [screensize.isMobile]);

  const refScrollUp = useRef();
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Cursor />

      <div ref={refScrollUp} className="relative z-0 bg-black">
        <SchnellContact />
        <Navbar />

        <div id="p1" className="panel">
          <Hero />
        </div>

        <div
          id="p2"
          className="bg-about mt-10 bg-cover bg-center bg-no-repeat h-[100vh] panel"
        >
          {" "}
          <About />
        </div>

        <div className="bg-about bg-black bg-cover bg-center bg-no-repeat panel h-[140vh] max-md:h-[100vh]">
          <Service />
        </div>

        <div className="bg-cover mt-10 bg-center bg-no-repeat panel h-[100vh] bg-black">
          <Tech />
        </div>

        <div className="panel h-[100vh] backdrop-blur-lg">
          <Projects />
        </div>

      <div className="panel h-[100vh] bg-black">
          <Certifications />
        </div> 

        <div className="panel h-[170vh] backdrop-blur-2xl">
          <Education />
        </div> 
  
        <div className="relative z-0 panel h-[100vh] bg-black">
          <div
            className="absolute z-50 overflow-hidden bg-slate-700 rounded-full p-3 right-20 bottom-9 hover:bg-slate-400 cursor-pointer"
            onClick={() => {
              handleScrollUp();
            }}
          >
            <IoArrowUpOutline className="text-white w-6 h-6" />
          </div>
          <Contact />
        </div> 
      </div>
    </BrowserRouter>
  );
};

export default App;
