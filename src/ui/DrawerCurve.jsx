import { motion } from "framer-motion";

const DrawerCurve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;

  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,

      transition: { type: "tween", duration: 0.9, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { type: "tween", duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg className="pointer-events-none absolute left-[-99px] top-0 h-full w-[100px] fill-[#1C1D20] stroke-none">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default DrawerCurve;
