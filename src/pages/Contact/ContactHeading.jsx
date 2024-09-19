import { motion } from "framer-motion";
import { pageAnimation } from "../../constants/pageAnim";

const ContactHeading = () => {
  return (
    <motion.div
      className="mx-auto flex w-full max-w-[150rem] flex-row items-end justify-between px-4 pt-48 text-[3rem] sm:px-paddingX sm:pt-[30vh] sm:text-headingClamp sm:portrait:pt-[20vh]"
      // {...pageAnimation}
    >
      <div className="w-full">
        <div className="flex flex-row items-center gap-2 sm:portrait:justify-center">
          <img
            className="h-[50px] w-[50px] rounded-full sm:hidden portrait:inline-block"
            src="/images/avatarpic.webp"
          />

          <h1 className="leading-none text-white sm:text-[1em]">
            Let's start a
          </h1>
        </div>

        <h1 className="leading-none text-white sm:text-[1em] sm:portrait:text-center">
          project together
        </h1>
      </div>

      <div className="relative w-1/4 items-end sm:flex portrait:hidden">
        <img
          className="inline-block h-[1.1em] w-[1.1em] rounded-full"
          src="/images/avatarpic.webp"
        />

        <img
          className="absolute left-0 top-[140%] h-[30px] w-auto"
          src="/images/SouthEast.svg"
          alt=""
        />
      </div>
    </motion.div>
  );
};

export default ContactHeading;
