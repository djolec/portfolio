import Magnetic from "./Magnetic";
import { motion } from "framer-motion";
import useIsHovered from "../hooks/useIsHovered";

const MenuToggle = ({ isVisible, isMenuOpen, setIsMenuOpen }) => {
  const { isHovered, mouseEnter, mouseLeave } = useIsHovered();

  const menuButton = {
    initial: {
      scale: 0,
    },

    enter: {
      scale: 1,
      transition: { type: "spring", duration: 0.2, stiffness: 150 },
    },

    leave: {
      scale: 0,
      transition: {
        duration: 0.3,
        type: "tween",
      },
    },
  };

  const hovered = {
    initial: {
      top: "100%",
    },
    enter: {
      top: "0%",
      transition: { duration: 0.3 },
    },
    leave: {
      top: "-100%",
      transition: { duration: 0.3 },
      transitionEnd: {
        top: "100%",
      },
    },
  };

  return (
    <motion.button
      className="fixed right-[20px] top-[20px] z-[39] rounded-full sm:right-[30px] sm:top-[30px] 2xl:right-[40px] 2xl:top-[40px]"
      variants={menuButton}
      initial="initial"
      animate={isVisible || isMenuOpen ? "enter" : "leave"}
      onClick={() => setIsMenuOpen((prev) => !prev)}
    >
      <Magnetic xOffset={1.5} yOffset={1.5}>
        <div
          className="border-borderDark relative flex h-16 w-16 cursor-pointer items-center justify-center overflow-hidden rounded-full border bg-[#1C1D20] sm:h-[1.8em] sm:w-[1.8em]"
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          <motion.div
            className="absolute h-full w-full rounded-full bg-[#334BD3] lg:h-[90px] lg:w-[90px] xl:h-[120px] xl:w-[120px] 2xl:h-[140px] 2xl:w-[140px] sm:portrait:h-[90px] sm:portrait:w-[90px] lg:portrait:h-[110px] lg:portrait:w-[110px]"
            variants={hovered}
            initial="initial"
            animate={isHovered || isMenuOpen ? "enter" : "leave"}
          />
          <Magnetic xOffset={2} yOffset={2}>
            <div className="flex h-[1.8em] w-[1.8em] flex-col items-center justify-center gap-2 xl:gap-3">
              <div
                className={`h-[1px] w-[30px] bg-white lg:w-[40px] xl:w-[48px] ${
                  isMenuOpen
                    ? "translate-x-[1px] translate-y-[6px] rotate-45 xl:translate-y-[8px]"
                    : ""
                } transition-transform duration-500`}
              />

              <div
                className={`h-[1px] w-[30px] bg-white lg:w-[40px] xl:w-[48px] ${
                  isMenuOpen
                    ? "-translate-y-[3px] translate-x-[1px] -rotate-45 xl:-translate-y-[4px]"
                    : ""
                } transition-transform duration-500`}
              />
            </div>
          </Magnetic>
        </div>
      </Magnetic>
    </motion.button>
  );
};

export default MenuToggle;
