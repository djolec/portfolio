import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { words } from "../constants/preloaderWords";
import useIsMobile from "../hooks/useIsMobile";
const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile();

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
    <div className="fixed left-0 top-0 z-[200] h-screen w-screen">
      <SVG isMobile={isMobile} />

      <motion.div
        className="absolute left-1/2 top-[40%] z-[90] flex w-fit -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4"
        {...anim(slideUp)}
      >
        <div className="z-[100] h-[10px] w-[10px] rounded-full bg-white" />

        <p className="z-[100] whitespace-nowrap text-[50px] text-white">
          {words[index]}
        </p>
      </motion.div>
    </div>
  );
};

export default Preloader;

const SVG = ({ isMobile = false }) => {
  const initialPath = `
        M0 300 
        Q${window.innerWidth / 2} ${isMobile ? 220 : 0} ${window.innerWidth} 300
        L${window.innerWidth} ${window.innerHeight + 300}
        Q${window.innerWidth / 2} ${window.innerHeight + (isMobile ? 440 : 600)} 0 ${window.innerHeight + 300}
        L0 0
    `;
  const targetPath = `
        M0 300 
        Q${window.innerWidth / 2} 0 ${window.innerWidth} 300
        L${window.innerWidth} ${window.innerHeight}
        Q${window.innerWidth / 2} ${window.innerHeight} 0 ${window.innerHeight}
        L0 0
    `;

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

  return (
    <motion.svg
      className="absolute -top-[300px] left-0 z-[80] h-[calc(100vh+600px)] w-screen fill-[#141517]"
      {...anim(slide)}
    >
      <motion.path {...anim(curve)} />
    </motion.svg>
  );
};
