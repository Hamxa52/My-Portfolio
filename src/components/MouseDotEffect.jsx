import { useEffect } from "react";

const MouseDotEffect = () => {
  useEffect(() => {
    const mouseDot = document.createElement("div");
    mouseDot.style.position = "absolute";
    mouseDot.style.width = "15px";
    mouseDot.style.height = "15px";
    mouseDot.style.backgroundColor = "#FF520E";
    mouseDot.style.borderRadius = "50%";
    mouseDot.style.pointerEvents = "none";
    mouseDot.style.transition = "transform 0.1s ease-out";
    mouseDot.style.zIndex = 9999;
    document.body.appendChild(mouseDot);

    const moveMouseDot = (e) => {
      mouseDot.style.left = `${e.pageX - mouseDot.offsetWidth / 2}px`;
      mouseDot.style.top = `${e.pageY - mouseDot.offsetHeight / 2}px`;
    };

    document.addEventListener("mousemove", moveMouseDot);

    return () => {
      document.removeEventListener("mousemove", moveMouseDot);
      document.body.removeChild(mouseDot);
    };
  }, []);

  return null;
};

export default MouseDotEffect;
