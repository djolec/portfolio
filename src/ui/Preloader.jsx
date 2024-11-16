import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { words } from "../constants/preloaderWords";
import useSvgPath from "../hooks/useSvgPath";
import anim from "../helper/anim";
import TransitionSVG from "./TransitionSVG";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const { initialPath, targetPath } = useSvgPath();

  const slideUp = {
    initial: {
      opacity: 0,
      top: "40%",
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      top: -100,
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
    exit: {
      d: targetPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const slide = {
    initial: {
      top: "-300px",
    },
    exit: {
      top: "-100vh",
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  useEffect(() => {
    if (index === words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index === 0 ? 1200 : 190,
    );
  }, [index]);

  return (
    <div className="">
      <TransitionSVG slide={slide} curve={curve} zIndex="z-[200]" />

      <motion.div
        className="fixed left-1/2 top-[40%] z-[210] flex w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4 text-pageTransition text-white"
        {...anim(slideUp)}
      >
        {/* <div className="z-[100] h-[0.25em] w-[0.25em] rounded-full bg-white" /> */}

        <p className="z-[100] whitespace-nowrap text-[1em]">{words[index]}</p>
      </motion.div>
    </div>
  );
};

export default Preloader;
