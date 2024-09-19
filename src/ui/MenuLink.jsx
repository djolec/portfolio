import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

const MenuLink = ({
  link,
  index,
  length,
  mouseEnter,
  mouseLeave,
  isHovered,
  mouseClick,
}) => {
  return (
    <motion.li
      className="w-full sm:w-fit"
      initial={{ x: 220 }}
      animate={{
        x: 0,
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.07 * index,
        },
      }}
      exit={{
        x: 220,
        transition: {
          duration: 0.6,
          ease: [0.76, 0, 0.24, 1],
          delay: 0.07 * (length - index - 1),
        },
      }}
    >
      <Link
        to={link.to[0]}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={mouseClick}
      >
        <Magnetic xOffset={2.5} yOffset={1.5} width="w-full">
          <span
            className={`w-full text-[3.3em] text-white after:absolute after:right-0 after:top-1/2 after:h-[0.3em] after:w-[0.3em] after:-translate-y-1/2 after:scale-0 after:rounded-full after:bg-white after:transition-transform after:duration-300 after:hover:scale-100 sm:relative sm:after:-left-8 ${
              link.to.some((item) => item === location.pathname) && !isHovered
                ? "after:scale-100"
                : ""
            }`}
          >
            {link.text === "Code by George" ? "Home" : link.text}
          </span>
        </Magnetic>
      </Link>
    </motion.li>
  );
};

export default MenuLink;
