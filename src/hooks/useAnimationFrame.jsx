import { useAnimationFrame } from "framer-motion";
import { useState } from "react";
import useScrollDirection from "./useScrollDirection";

const useAnimationFrameHook = () => {
  const [xPercent, setXPercent] = useState(0);
  const { scrollDirection } = useScrollDirection();

  useAnimationFrame(() => {
    if (xPercent > 0) {
      setXPercent(-100);
    } else if (xPercent < -100) {
      setXPercent(0);
    }
    setXPercent((prevXPercent) => prevXPercent + 0.12 * scrollDirection);
  });

  return { xPercent };
};

export default useAnimationFrameHook;
