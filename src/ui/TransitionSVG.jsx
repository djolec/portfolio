import { motion } from "framer-motion";
import anim from "../helper/anim";

const TransitionSVG = ({ slide, curve, zIndex }) => {
  return (
    <motion.svg
      className={`fixed -top-[300px] left-0 ${zIndex} h-[calc(100vh+600px)] w-screen fill-[#141517]`}
      {...anim(slide)}
    >
      <motion.path {...anim(curve)} />
    </motion.svg>
  );
};

export default TransitionSVG;
