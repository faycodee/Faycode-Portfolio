
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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {
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
        {  x: "100%", y: 0 }, // Tech - from bottom
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
            ease: "power2.out"
          });
        },
        onLeaveBack: () => {
          gsap.to(panel, {
            ...initialStates[i],
            duration: 1.2,
            ease: "power2.in"
          });
        },
        onEnterBack: () => {
          gsap.to(panel, {
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power2.out"
          });
        },
        onLeave: () => {
          gsap.to(panel, {
            ...initialStates[i],
            duration: 1.2,
            ease: "power2.in"
          });
        }
      });
    });
  }, []);

  return (
    <BrowserRouter>
      <Cursor />
      <div className="relative z-0 overflow-hidden bg-black">
        <div id="p1" className="panel">
          <Navbar />
          <Hero />
        </div>

        <div id="p2" className="bg-about bg-cover bg-center bg-no-repeat h-[100vh] panel">
          <About />
        </div>

        <div className="bg-about bg-black bg-cover bg-center bg-no-repeat panel h-[140vh]">
          <Service />
        </div>

        <div className="bg-cover bg-center bg-no-repeat panel h-[100vh] bg-black">
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
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

