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
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollTrigger);
  const cursorr = useSelector((state) => state.cursor);
  useGSAP(() => {
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
    gsap.utils.toArray(".panel").forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
      });
    });
  }, []);
  return (
    <BrowserRouter>
      <Cursor />
      <div className="relative z-0">
        <div id="p1" className=" panel">
          <Navbar />
          <Hero />
        </div>

        <div id="p2" className="bg-about bg-cover bg-center bg-no-repeat h-[100vh] panel">
          <About />
        </div>
        <div className="bg-about bg-black bg-cover bg-center bg-no-repeat panel h-[100vh] ">
          <Service />
        </div>

        <div
          className=" bg-cover bg-center bg-no-repeat panel h-[100vh] bg-black"
          style={{ overflow: "none" }}
        >
          <Tech />
        </div>

        <div className="panel">
          <Projects />
        </div>
        <div className="panel">
          <Certifications />
        </div>
        <div className="panel">
          <Education />
        </div>
        <div className="relative z-0 panel ">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
