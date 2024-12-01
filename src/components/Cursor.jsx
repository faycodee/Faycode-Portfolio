import { useRef } from "react";

const Cursor = () => {
  const cursorDot = useRef();
  const cursorOutline = useRef();
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.current.style.left = `${posX}px`;
    cursorDot.current.style.top = `${posY}px`;
    // cursorOutline.current.style.left = `${posX}px`
    // cursorOutline.current.style.top = `${posY}px`

    cursorOutline.current.animate(
      {
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
  return (
    <>
      <div ref={cursorDot} className="cursor-dot"></div>
      <div ref={cursorOutline} className="cursor-outline" >
        <img src="./logo2.png" className="rounded-full"  alt="" srcset="" />
      </div>
      {/* className="cursor-outline" */}
    </>
  );
};
export default Cursor;
