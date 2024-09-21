import { motion, useTransform } from "framer-motion";
import useXPercent from "../hooks/useXPercent";
import useIsMobile from "../hooks/useIsMobile";

const SlidingText = ({ scrollYProgress }) => {
  const isMobile = useIsMobile();
  const { xPercent } = useXPercent();
  const scrollVal = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [0, 0] : [0, 1500],
  );

  const commonStyle = `
  text-white pr-[0.2em] text-heroSliding font-medium leading-none sm:portrait:text-[28vw]
  `;

  return (
    <div className="absolute bottom-[30vh] sm:landscape:bottom-[10vh]">
      <motion.div
        className="relative whitespace-nowrap"
        style={{ x: scrollVal }}
      >
        <motion.h2
          className={`absolute -left-full top-0 ${commonStyle}`}
          style={{ x: `${xPercent}%` }}
        >
          Frontend Developer
        </motion.h2>
        <motion.h2 className={`${commonStyle}`} style={{ x: `${xPercent}%` }}>
          Frontend Developer
        </motion.h2>
        <motion.h2
          className={`absolute left-full top-0 ${commonStyle}`}
          style={{ x: `${xPercent}%` }}
        >
          Frontend Developer
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default SlidingText;
