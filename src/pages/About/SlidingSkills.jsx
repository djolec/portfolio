import { useRef } from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

const SlidingSkills = () => {
  const isMobile = useIsMobile();
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const slide1 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0vw", "0vw"] : ["-100vw", "0vw"],
  );
  const slide2 = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0vw", "0vw"] : ["0vw", "-100vw"],
  );

  const skills1 = [
    { name: "HTML5", img: "html.svg" },
    { name: "CSS", img: "css.svg" },
    { name: "JavaScript", img: "javascript.svg" },
    { name: "React", img: "react.svg" },
    { name: "Node JS", img: "nodejs.svg" },
    { name: "Express JS", img: "expressjs.svg" },
    { name: "TypeScript", img: "typescript.svg" },

    { name: "HTML5", img: "html.svg" },
    { name: "CSS", img: "css.svg" },
    { name: "JavaScript", img: "javascript.svg" },
    { name: "React", img: "react.svg" },
    { name: "Node JS", img: "nodejs.svg" },
    { name: "Express JS", img: "expressjs.svg" },
    { name: "TypeScript", img: "typescript.svg" },
  ];
  const skills2 = [
    { name: "Tailwind CSS", img: "tailwind.svg" },
    { name: "Material UI", img: "materialui.svg" },
    { name: "Styled Components", img: "styledcomponents.svg" },
    { name: "Framer Motion", img: "framermotion.svg" },
    { name: "React Query", img: "reactquery.svg" },
    { name: "Formik", img: "formik.svg" },
    { name: "Redux", img: "redux.svg" },
    { name: "Tailwind CSS", img: "tailwind.svg" },
    { name: "Material UI", img: "materialui.svg" },
    { name: "Styled Components", img: "styledcomponents.svg" },
    { name: "Framer Motion", img: "framermotion.svg" },
    { name: "React Query", img: "reactquery.svg" },
    { name: "Formik", img: "formik.svg" },
    { name: "Redux", img: "redux.svg" },
  ];

  return (
    <div className="relative z-20 flex flex-col gap-4 overflow-hidden bg-white py-8 text-headerNav">
      <h2 className="px-4 pt-8 text-[1.4em] sm:px-paddingX06 sm:portrait:px-12">
        Tech stack
      </h2>

      <div className="px-4 sm:px-paddingX06 sm:portrait:px-12">
        <div className="h-[1px] bg-borderLight" />
      </div>

      <div className="flex flex-col" ref={container}>
        <motion.div
          className="grid w-[200vw] auto-cols-fr grid-flow-col"
          style={{ x: slide1 }}
        >
          {skills1.map((skill, index) => {
            return (
              <div
                className="flex w-full flex-grow flex-col items-center justify-start gap-4 p-2 sm:p-6"
                key={index}
              >
                <img
                  className="h-auto w-full"
                  src={`/images/skills/${skill.img}`}
                />

                <h6 className="hidden text-center text-[1em] text-black landscape:block">
                  {skill.name}
                </h6>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid w-[200vw] auto-cols-fr grid-flow-col"
          style={{ x: slide2 }}
        >
          {skills2.map((skill, index) => {
            return (
              <div
                className="flex w-full flex-grow flex-col items-center justify-start gap-4 p-2 sm:p-8"
                key={index}
              >
                <img
                  className="h-auto w-full"
                  src={`/images/skills/${skill.img}`}
                />
                <h6 className="hidden text-center text-[1em] text-black landscape:block">
                  {skill.name}
                </h6>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default SlidingSkills;
