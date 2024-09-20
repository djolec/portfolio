import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
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

const Modal = ({ modal, projects, layout }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.6,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.6,
      ease: "power3",
    });

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
      xMoveContainer(clientX);
      yMoveContainer(clientY);

      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        className={`pointer-events-none fixed z-20 hidden h-[6.4em] w-[8em] items-center justify-center overflow-hidden bg-white tablet:hidden ${layout === "list" ? "md:block" : ""}`}
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div
          className="absolute h-full w-full"
          style={{
            top: index * -100 + "%",
            transition: "top 0.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        >
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className="flex h-full w-full items-center justify-center"
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <img
                  loading="lazy"
                  src={`/images/${src}`}
                  width="800"
                  height="500"
                  alt="project image"
                  style={{ width: "85%", height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="pointer-events-none fixed z-[20] hidden h-[4em] w-[4em] items-center justify-center rounded-full bg-[#455CE9] text-[0.3em] text-white sm:flex"
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
