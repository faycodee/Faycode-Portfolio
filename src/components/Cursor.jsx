import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cursor = () => {
  const cursorr = useSelector((state) => state.cursor);
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Check if device is mobile on mount
  useEffect(() => {
    const checkDevice = () => {
      // Checks for touch capability or small screens (tablets/phones)
      const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 1024; 
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // 2. Handle Mouse Movement (Only if NOT mobile)
  useEffect(() => {
    if (isMobile) return; // Stop here if it's a phone

    const moveCursor = (e) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (cursorDot.current) {
        cursorDot.current.style.left = `${posX}px`;
        cursorDot.current.style.top = `${posY}px`;
      }

      if (cursorOutline.current) {
        cursorOutline.current.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    window.addEventListener("mousemove", moveCursor);

    // Important: Clean up the listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [isMobile]);

  // 3. If it is mobile, return nothing (Standard behavior)
  if (isMobile) {
    return null;
  }

  return (
    <>
      <div ref={cursorDot} className="cursor-dot"></div>
      <div ref={cursorOutline} className="cursor-outline">
        <img
          src={cursorr.src}
          className={`rounded-full`}
          alt=""
          style={{
            width: `${cursorr.width}px`,
            height: `${cursorr.height}px`,
            filter: cursorr.filter,
          }}
        />
      </div>
    </>
  );
};

export default Cursor;