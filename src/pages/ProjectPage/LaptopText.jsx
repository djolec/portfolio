import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const LaptopText = ({ text, video, direction, color, textColor, folder }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "0px 0px -50% 0px", once: true });

  const animateText = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.1,
      },
    },
  };

  return (
    <div
      className="sm:text-projectInfo"
      style={{ backgroundColor: color }}
      ref={ref}
    >
      <div
        className={`mx-auto flex max-w-[150rem] flex-col-reverse sm:portrait:flex-col-reverse ${direction} h-fit w-full items-center justify-center gap-8 px-4 py-16 sm:h-[110vh] sm:px-paddingX sm:py-0 sm:portrait:gap-16`}
      >
        <motion.p
          className={`w-[80%] sm:w-[30%] ${textColor} text-base leading-snug sm:text-[1em] sm:portrait:w-[75%] sm:portrait:text-[1.3em]`}
          variants={animateText}
          initial="initial"
          animate={inView ? "animate" : ""}
        >
          {text}
        </motion.p>

        <div className="relative w-full sm:w-[65%] sm:portrait:w-full">
          <img
            className="relative z-[5] h-auto w-full"
            height="862"
            width="1487"
            src="/images/frames/laptop_frame.webp"
          />

          <video
            className="absolute left-[12.1%] top-[6.1%] h-auto w-[76%]"
            width="1784"
            height="1114"
            loading="lazy"
            autoPlay
            loop={true}
            muted
          >
            <source
              src={`/images/${folder}/features/${video}`}
              type="video/webm"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default LaptopText;
