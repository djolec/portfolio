import { createContext, useContext } from "react";
import useIsHovered from "../hooks/useIsHovered";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

const ButtonContext = createContext();

const LayoutToggleProvider = ({ children, name, setLayout, layout }) => {
  const { isHovered, mouseEnter, mouseLeave } = useIsHovered();

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
    <ButtonContext.Provider value={{ isHovered, layout, name }}>
      <button className="w-fit" onClick={() => setLayout(name)}>
        <Magnetic xOffset={1.5} yOffset={1.5}>
          <div
            className={`${
              layout === name ? "bg-[#1C1D20]" : "bg-white"
            } border-borderLight relative flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border transition-colors duration-300 ease-in-out`}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <motion.div
              className={`absolute ${
                layout === name ? "bg-[#1C1D20]" : "bg-[#334BD3]"
              } h-20 w-20 rounded-full transition-colors duration-300 ease-in-out`}
              variants={hovered}
              initial="initial"
              animate={isHovered ? "enter" : "leave"}
            />
            <Magnetic xOffset={5} yOffset={5}>
              {children}
            </Magnetic>
          </div>
        </Magnetic>
      </button>
    </ButtonContext.Provider>
  );
};

const useButtonContext = () => {
  const context = useContext(ButtonContext);

  if (context === undefined)
    throw new Error("ButtonContext was used outside the LayoutToggleProvider");
  return context;
};

export { LayoutToggleProvider };

const Lines = () => {
  const { isHovered, layout, name } = useButtonContext();

  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center gap-[0.4rem]">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`h-[1px] w-7 ${
            isHovered || layout === name ? "bg-white" : "bg-black"
          } transition-colors duration-300 ease-in-out`}
        />
      ))}
    </div>
  );
};

const Squares = () => {
  const { isHovered, layout, name } = useButtonContext();

  return (
    <div
      className="grid h-20 w-20 place-content-center gap-2"
      style={{
        gridTemplateColumns: "repeat(2, 10px)",
        gridTemplateRows: "repeat(2, 10px)",
      }}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`h-[0.6rem] w-[0.6rem] border bg-transparent ${
            isHovered || layout === name ? "border-white" : "border-black"
          } transition-colors duration-300 ease-in-out`}
        />
      ))}
    </div>
  );
};

LayoutToggleProvider.Lines = Lines;
LayoutToggleProvider.Squares = Squares;
