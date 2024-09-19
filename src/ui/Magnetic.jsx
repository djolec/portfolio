import { motion } from "framer-motion";
import { useContext, useRef, useState } from "react";
import { AppContext } from "./AnimatedRoutes";

const Magnetic = ({ children, xOffset = 1, yOffset = 1, width = "w-fit" }) => {
  const { isTabletOrMobile } = useContext(AppContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(true);
  const ref = useRef(null);

  const mouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const mouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  const mouseEnter = () => {
    setIsHovered(true);
  };

  const { x, y } = position;

  const hovered = {
    initial: {
      x: 0,
      y: 0,
    },

    ...(!isTabletOrMobile
      ? {
          enter: {
            x: x / xOffset,
            y: y / yOffset,
            transition: { type: "tween", duration: 0.25, ease: "linear" },
          },
        }
      : {
          enter: {
            x: 0,
            y: 0,
            transition: { type: "tween", duration: 0.25, ease: "linear" },
          },
        }),

    leave: {
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 300, mass: 1, damping: 12 },
    },
  };

  return (
    <motion.div
      className={`${width} relative h-fit`}
      onMouseEnter={mouseEnter}
      onMouseMove={mouseMove}
      onMouseLeave={mouseLeave}
      ref={ref}
      variants={hovered}
      initial="initial"
      animate={isHovered ? "enter" : "leave"}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
