// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.

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

const App = () => {
  // const dispatch = useDispatch();
  // const screensize = useSelector((state) => state.screensize);
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
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  gsap.registerPlugin(ScrollTrigger);
  const cursorr = useSelector((state) => state.cursor);

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
    // Panel animations with different directions
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      // Initial states based on index
      const initialStates = [
        { x: 0, y: 0 }, // Hero - no initial offset
        { x: 0, y: 0 }, // About - from right
        { x: "-100%", y: 0 }, // Service - from left
        { x: "100%", y: 0 }, // Tech - from bottom
        { x: 0, y: 0 }, // Service - from left
        { x: "100%", y: 0 }, // Tech - from bottom
        { x: 0, y: 0 }, // Service - from left
        { x: 0, y: 0 }, // Tech - from bottom
        // { x: 0, y: "-100%" }, // Projects - from top
        // { x: "100%", y: 0 }, // Certifications - from right
        // { x: "-100%", y: 0 }, // Education - from left
        // { x: 0, y: "100%" }, // Contact - from bottom
      ];

      // Set initial position
      gsap.set(panel, initialStates[i]);

      // Create scroll trigger for each panel
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
            ...initialStates[i],
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
            ...initialStates[i],
            duration: 1.2,
            ease: "power2.in",
          });
        },
      });
    });
  }, []);
  const refScrollUp = useRef();
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Cursor />
      <div ref={refScrollUp} className="relative z-0 overflow-hidden bg-black">
        <Navbar /> 
        <div id="p1" className="panel">
          <Hero />
        </div>

       <div
          id="p2"
          className="bg-about mt-10 bg-cover bg-center bg-no-repeat h-[100vh] panel"
        >
          <About />
        </div>
  {/*
        <div className="bg-about  bg-black bg-cover bg-center bg-no-repeat panel h-[140vh]">
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
            className="absolute z-50 overflow-hidden bg-slate-700 rounded-full p-3 right-10 bottom-9 hover:bg-slate-400 "
            onClick={() => {
              handleScrollUp();
            }}
          >
            <IoArrowUpOutline />
          </div>
          <Contact />
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
