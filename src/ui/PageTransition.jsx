import { motion } from "framer-motion";
import { routes } from "../constants/pageTransitionRoutes";

import useScrollToTop from "../hooks/useScrollToTop";
import useSvgPath from "../hooks/useSvgPath";
import anim from "../helper/anim";
import { useContext } from "react";
import { AppContext } from "./AnimatedRoutes";
import TransitionSVG from "./TransitionSVG";

const PageTransition = ({ children }) => {
  const { initialPath, targetPath } = useSvgPath();
  const { location } = useContext(AppContext);

  useScrollToTop();

  const text = {
    initial: {
      opacity: 1,
      zIndex: 50,
    },
    enter: {
      opacity: 0,
      top: -100,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "65%",
        zIndex: -1,
      },
    },
    exit: {
      zIndex: 50,
      opacity: [0, 0, 1],
      top: "40%",
      transition: {
        times: [0, 0.15, 1],
        duration: 0.9,

        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    enter: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
      transitionEnd: {
        top: "100vh",
      },
    },
    exit: {
      top: "-300px",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <div>
      <TransitionSVG slide={slide} curve={curve} zIndex="z-[40]" />

      <motion.div
        className="fixed left-[50%] top-[40%] z-40 flex -translate-x-[50%] -translate-y-[50%] flex-row items-center justify-center gap-4 text-pageTransition text-white"
        {...anim(text)}
      >
        <div className="h-[0.25em] w-[0.25em] rounded-full bg-white" />

        <p className="w-fit text-start text-[0.9em]">
          {routes[location.pathname] ? routes[location.pathname] : "Error"}
        </p>
      </motion.div>

      {children}
    </div>
  );
};

export default PageTransition;
