import { useTransform, motion } from "framer-motion";
import Globe from "../../ui/Globe";
import SlidingText from "../../ui/SlidingText";
// import { AppContext } from "../../ui/AnimatedRoutes";
// import { useContext } from "react";

const Hero = ({ scrollYProgress }) => {
  // const { isLoadingApp } = useContext(AppContext);
  const heroBg = useTransform(scrollYProgress, [0, 1], ["0px", "500px"]);

  return (
    <motion.div
      className="relative h-[105vh] w-full overflow-hidden bg-heroGray text-hero"
      // initial={{ y: "400px" }}
      // animate={{
      //   y: "0px",
      //   transition: {
      //     duration: 0.75,
      //     ease: [0.76, 0, 0.24, 1],
      //     // delay: isLoadingApp ? 4 : 0,
      //   },
      // }}
    >
      <motion.img
        className={`absolute bottom-0 left-1/2 h-[90%] w-auto max-w-max sm:bottom-auto sm:top-0 sm:h-full`}
        src="images/hero.webp"
        loading="eager"
        alt="profile image"
        height="1200"
        width="864"
        style={{ y: heroBg, x: "-50%" }}
      />

      <div className="absolute top-[88vh] flex w-full flex-row-reverse items-center justify-between px-4 sm:px-16 sm:landscape:top-[30%] sm:landscape:flex-row sm:landscape:px-0">
        <div className="relative h-fit w-[7em] portrait:w-fit">
          <div className="relative aspect-square h-auto w-16 sm:portrait:w-[12vw] sm:landscape:absolute sm:landscape:right-[10%] sm:landscape:top-[50%] sm:landscape:w-[20%] sm:landscape:-translate-y-1/2">
            <Globe />
          </div>

          <img
            className="hidden h-auto w-full sm:landscape:block"
            src="images/globe.svg"
            alt="globe"
          />

          <p className="absolute top-1/2 hidden w-[65%] -translate-y-1/2 pl-4 text-[0.5em] text-white sm:landscape:block">
            Located in Serbia
          </p>
        </div>

        <h1 className="mr-heroMargin text-white sm:portrait:text-[6vw]">
          Hi, I'm George
        </h1>
      </div>
      <SlidingText scrollYProgress={scrollYProgress} />
    </motion.div>
  );
};

export default Hero;
