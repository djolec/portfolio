import useIsInView from "../../hooks/useIsInView";
import PhraseLine from "../../ui/PhraseLine";
import { motion, useScroll, useTransform } from "framer-motion";
import { AppContext } from "../../ui/AnimatedRoutes";
import { useContext } from "react";
import Button from "../../ui/Button";

const HomepageAbout = () => {
  const { ref, isInView } = useIsInView();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const { isTabletOrMobile } = useContext(AppContext);
  const yButton = useTransform(
    scrollYProgress,
    [0, 1],
    isTabletOrMobile ? [0, 0] : [0, -200],
  );

  const desktopPhrases = [
    "Helping brands to stand out in the digital era.",
    "Together we will set the new status quo.",
    "No nonsese, always on the cutting edge.",
  ];

  const mobilePhrases = [
    "Helping brands to stand out in",
    "the digital era. Together we will",
    "set the new status quo. No",
    "nonsese, always on the cutting",
    "edge.",
  ];

  const phrases = isTabletOrMobile ? mobilePhrases : desktopPhrases;

  return (
    <div
      className="relative mx-auto flex w-full max-w-[150rem] flex-col gap-8 bg-white px-4 pb-[12em] pt-[5em] text-headerNav sm:flex-row sm:justify-between sm:px-paddingX sm:pb-[10em] sm:pt-[5em] portrait:lg:pb-[12em]"
      ref={ref}
    >
      <div>
        {phrases.map((phrase, index) => (
          <PhraseLine
            phraseLine={phrase}
            index={index}
            key={phrase}
            isInView={isInView}
          />
        ))}
      </div>

      <motion.p
        className="w-64 text-base leading-normal sm:text-[0.8em] landscape:sm:w-[14em]"
        initial={{ y: 40, opacity: 0 }}
        animate={
          isInView
            ? {
                y: 0,
                opacity: 1.2,
                transition: {
                  duration: 1,
                  ease: [0.5, 1, 0.89, 1],
                },
              }
            : null
        }
      >
        The combination of my passion for design, code & interaction positions
        me in a unique place in the web design world.
      </motion.p>

      <motion.div
        className="absolute bottom-[0.5em] right-12 z-20 portrait:sm:right-32 landscape:-bottom-[3em] landscape:sm:right-[9em] tablet:landscape:bottom-[2em]"
        style={{ y: yButton }}
      >
        <Button to="/about">About me</Button>
      </motion.div>
    </div>
  );
};

export default HomepageAbout;
