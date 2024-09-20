import Globe from "../../ui/Globe";
import { motion } from "framer-motion";

const WorkHeading = () => {
  return (
    <motion.div className="mx-auto max-w-[150rem] px-4 sm:px-paddingX sm:text-headingClamp sm:portrait:px-12">
      <h1 className="pt-48 font-normal leading-none sm:flex sm:flex-col sm:pt-[30vh] sm:portrait:pt-[20vh] sm:portrait:text-center sm:portrait:text-[1em]">
        <span className="text-[3rem] sm:text-[1em]">Creating next level </span>
        <span className="text-[3rem] sm:text-[1em]">digital products</span>
      </h1>

      <div className="relative my-24 h-[1px] bg-borderLight lg:my-28 sm:portrait:my-[12vw]">
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
    </motion.div>
  );
};

export default WorkHeading;
