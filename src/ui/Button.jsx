import useIsHovered from "../hooks/useIsHovered";
import Magnetic from "./Magnetic";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ children, to, bgColor = "bg-[#1C1D20]", link, type }) => {
  const { isHovered, mouseEnter, mouseLeave } = useIsHovered();

  const hovered = {
    initial: {
      top: "101%",
    },
    enter: {
      top: "0%",
      transition: { duration: 0.3 },
    },
    leave: {
      top: "-101%",
      transition: { duration: 0.3 },
      transitionEnd: {
        top: "101%",
      },
    },
  };

  if (to && !type)
    return (
      <Link
        to={to}
        className="block rounded-full text-roundButtonText sm:portrait:text-[2.4vw]"
      >
        <Magnetic xOffset={1.5} yOffset={1.5}>
          <div
            className={`${bgColor} relative h-buttonHeight2 w-buttonWidth2 overflow-hidden rounded-full text-white`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              className={`absolute h-full w-full rounded-full bg-darkBlue`}
              variants={hovered}
              initial="initial"
              animate={isHovered ? "enter" : "leave"}
            />

            <Magnetic width="w-full" xOffset={2.4} yOffset={2.4}>
              <p
                className={`flex h-buttonHeight2 w-full items-center justify-center text-center text-[1em]`}
              >
                {children}
              </p>
            </Magnetic>
          </div>
        </Magnetic>
      </Link>
    );

  if (link)
    return (
      <a
        href={link}
        className="block w-full text-roundButtonText sm:w-fit sm:portrait:text-[2.4vw]"
      >
        <Magnetic xOffset={5} yOffset={2} width="sm:w-fit w-full">
          <div
            className={`relative h-[4em] w-full overflow-hidden rounded-full border border-borderDark bg-veryDark text-white sm:w-fit`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              className={`absolute h-full w-full rounded-full bg-darkBlue`}
              variants={hovered}
              initial="initial"
              animate={isHovered ? "enter" : "leave"}
            />

            <Magnetic width="w-full sm:w-fit" xOffset={6} yOffset={2.5}>
              <p
                className={`sm:fit flex h-[4em] w-full items-center justify-center px-[2em] text-center text-[1em]`}
              >
                {children}
              </p>
            </Magnetic>
          </div>
        </Magnetic>
      </a>
    );

  if (type === "oval")
    return (
      <Link
        to={to}
        className="w-fit text-roundButtonText sm:portrait:text-[2.4vw]"
      >
        <Magnetic xOffset={1.5} yOffset={1.5} width="w-fit">
          <div
            className={`${bgColor} relative h-fit w-fit overflow-hidden rounded-full border border-borderDark text-white`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              className={`absolute h-full w-full rounded-full bg-darkBlue`}
              variants={hovered}
              initial="initial"
              animate={isHovered ? "enter" : "leave"}
            />

            <Magnetic width="w-fit" xOffset={2.4} yOffset={2.4}>
              <p
                className={`flex w-full items-center justify-center px-[2.3em] py-[1.5em] text-center text-[1em]`}
              >
                {children}
              </p>
            </Magnetic>
          </div>
        </Magnetic>
      </Link>
    );

  if (type === "submit")
    return (
      <button className="text-roundButtonText sm:portrait:text-[2.4vw]">
        <Magnetic xOffset={1.5} yOffset={1.5}>
          <div
            className={`${bgColor} relative h-buttonHeight2 w-buttonWidth2 overflow-hidden rounded-full text-white`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              className={`absolute h-full w-full rounded-full bg-darkBlue`}
              variants={hovered}
              initial="initial"
              animate={isHovered ? "enter" : "leave"}
            />

            <Magnetic width="w-full" xOffset={2.4} yOffset={2.4}>
              <p
                className={`flex h-buttonHeight2 w-full items-center justify-center text-center text-[1em]`}
              >
                {children}
              </p>
            </Magnetic>
          </div>
        </Magnetic>
      </button>
    );
};

export default Button;
