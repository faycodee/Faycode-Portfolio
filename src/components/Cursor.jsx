import { useRef } from "react";
import { useSelector } from "react-redux";
const Cursor = () => {
  const cursorr = useSelector((state) => state.cursor);
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
      {/* background-color: white; */
        left: `${posX}px`,
        top: `${posY}px`,
      },
      { duration: 500, fill: "forwards" }
    );
  });
  return (
    <>
      <div ref={cursorDot} className="cursor-dot"></div>
      <div ref={cursorOutline} className="cursor-outline">
      <img
  src={cursorr.src}
  className={`rounded-full`}
  alt=""
  style={{
    width: cursorr.scale,
    height: cursorr.scale,
    filter: "hue-rotate(120deg)", 
  }}
/>
      </div>
      {/* className="cursor-outline" */}
    </>
  );
};
export default Cursor;
