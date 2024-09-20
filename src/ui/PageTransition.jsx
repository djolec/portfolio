import { motion } from "framer-motion";
import { routes } from "../constants/pageTransitionRoutes";

// import useDimensions from "../hooks/useDimensions";
import useScrollToTop from "../hooks/useScrollToTop";
import useIsMobile from "../hooks/useIsMobile";
import { useContext } from "react";
import { AppContext } from "./AnimatedRoutes";

const anim = (variants) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
  };
};

const PageTransition = ({ children }) => {
  // const dimensions = useDimensions();
  const isMobile = useIsMobile();

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

  return (
    <div>
      <motion.div
        className="fixed left-[50%] top-[40%] z-50 flex -translate-x-[50%] -translate-y-[50%] flex-row items-center justify-center gap-4 text-5xl text-white"
        {...anim(text)}
      >
        <div className="h-[10px] w-[10px] rounded-full bg-white" />

        <p className="text-[50px] text-white">
          {routes[location.pathname] ? routes[location.pathname] : "Error"}
        </p>
      </motion.div>

      <div
        className="pointer-events-none fixed -top-[300px] left-0 z-40 h-[calc(100vh+600px)] w-full bg-red-500"
        style={{
          opacity: window.innerWidth == null ? 1 : 0,
        }}
      >
        <div
          className="fixed left-[50%] top-[40%] z-50 flex -translate-x-[50%] -translate-y-[50%] flex-row items-center justify-center gap-4 text-5xl text-white"
          {...anim(text)}
        >
          <div className="h-[10px] w-[10px] rounded-full bg-white" />

          <p className="text-[50px] text-white">
            {routes[location.pathname] ? routes[location.pathname] : "Error"}
          </p>
        </div>
      </div>

      {/* {dimensions.width !== null && <SVG {...dimensions} isMobile={isMobile} />} */}

      <SVG
        // width={window.innerWidth}
        // height={window.innerHeight}
        isMobile={isMobile}
      />

      {children}
    </div>
  );
};

export default PageTransition;

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

  return (
    <motion.svg
      className="fixed -top-[300px] left-0 z-40 h-[calc(100vh+600px)] w-screen fill-[#141517]"
      {...anim(slide)}
    >
      <motion.path {...anim(curve)} />
    </motion.svg>
  );
};
