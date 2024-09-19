import { useEffect, useRef, useState } from "react";
import Socials from "../../ui/Socials";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

const NextProject = ({ nextProject }) => {
  const [active, setActive] = useState(false);
  const cursorLabel = useRef(null);

  const scaleAnimation = {
    initial: { scale: 1, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  useEffect(() => {
    //Move cursor label
    let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.4,
      ease: "power3",
    });
    let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.4,
      ease: "power3",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { title, src, color, link } = nextProject;

  return (
    <motion.div className="relative flex h-[102vh] flex-col bg-[#141517] text-hero">
      <div className="grow px-paddingX">
        <div className="relative mx-auto flex h-full max-w-[150rem] flex-col items-center justify-center gap-8 overflow-hidden sm:gap-0 tablet:gap-8">
          <Link
            className="mx-auto block h-fit w-full sm:h-fit sm:w-fit tablet:h-fit"
            to={`/work/${link}`}
          >
            <div
              className="text-projectFont group mx-auto flex h-full w-full flex-col items-center gap-6 sm:gap-2 tablet:gap-4"
              onMouseEnter={() => setActive(true)}
              onMouseLeave={() => setActive(false)}
            >
              <h3 className="w-fit text-center text-[1em] leading-none text-white sm:portrait:text-[4vw]">
                Next project
              </h3>

              <h2 className="text-projectFont2 w-fit text-center leading-none text-white transition-colors duration-500 sm:group-hover:text-white/50 tablet:portrait:text-[11vw]">
                {title}
              </h2>

              <div className="relative -mt-[5vh] hidden w-[27.5vw] overflow-hidden bg-transparent before:block before:pb-[50%] sm:block tablet:hidden">
                <div
                  className="absolute top-0 flex aspect-[1.4/1] w-full translate-y-[35%] items-center justify-center transition-transform duration-500 group-hover:translate-y-0"
                  style={{ backgroundColor: color }}
                >
                  <img
                    className="h-auto w-[85%]"
                    src={`/images/${src}`}
                    width="800"
                    height="500"
                    alt="project image"
                  />
                </div>
              </div>

              <div
                className="flex aspect-[1.4/1] w-full items-center justify-center sm:hidden tablet:flex tablet:portrait:w-[75%] tablet:landscape:w-[45vw]"
                style={{ backgroundColor: color }}
              >
                <img
                  className="h-auto w-[85%]"
                  src={`/images/${src}`}
                  width="800"
                  height="500"
                  alt="project image"
                />
              </div>
            </div>
          </Link>

          <div className="border-t-borderDark hidden h-[10vh] w-full border-t bg-transparent sm:block tablet:hidden" />

          <Button to="/work" type="oval">
            More work
          </Button>
        </div>
      </div>

      <motion.div
        className="pointer-events-none fixed z-[3] hidden h-[4em] w-[4em] items-center justify-center rounded-full bg-[#455CE9] text-[0.3em] text-white sm:flex tablet:hidden"
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>

      <Socials />
    </motion.div>
  );
};

export default NextProject;
