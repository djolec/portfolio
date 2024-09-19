import { motion, useTransform } from "framer-motion";
import usePageScroll from "../../hooks/usePageScroll";
import Globe from "../../ui/Globe";

const AboutHeading = () => {
  const { scrollYProgress } = usePageScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ["100%", "20%"]);

  return (
    <div className="mx-auto max-w-[150rem] px-4 sm:px-paddingX sm:text-headingClamp sm:portrait:px-12">
      <h1 className="pt-48 font-normal leading-none sm:flex sm:flex-col sm:pt-[30vh] sm:portrait:pt-[20vh] sm:portrait:text-center sm:portrait:text-[1em]">
        <span className="text-[3rem] sm:text-[1em]">
          Helping brands thrive{" "}
        </span>
        <span className="text-[3rem] sm:text-[1em]">in the digital world</span>
      </h1>

      <div className="bg-borderLight relative my-24 h-[1px] lg:my-28 sm:portrait:my-[12vw]">
        <motion.div
          className="absolute right-10 top-1/2 h-36 w-36 -translate-y-1/2 rounded-full bg-red-600 p-12 sm:h-[2.2em] sm:w-[2.2em] sm:p-[0.7em]"
          initial={{ backgroundColor: "#455CE9" }}
          animate={{ backgroundColor: ["#455CE9", "#ff4444", "#455CE9"] }}
          transition={{
            duration: 14,
            type: "tween",
            times: [0, 0.5, 1],
            repeat: Infinity,
          }}
        >
          <Globe />
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 pt-10 text-headerNav sm:flex-row">
        <motion.p className="w-full text-[0.8em] text-[#636363] sm:w-[30%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum nam
          repudiandae qui minima voluptatem veniam exercitationem, voluptate
          modi reprehenderit vitae?
        </motion.p>

        <motion.div
          className="aspect-square flex-grow rounded-[20px] bg-[url('/images/coding1.webp')] bg-cover bg-no-repeat"
          style={{ backgroundPositionY: yBg }}
        />
      </div>
    </div>
  );
};

export default AboutHeading;
