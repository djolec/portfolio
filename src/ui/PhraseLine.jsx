import { motion } from "framer-motion";

const PhraseLine = ({ phraseLine, index, isInView }) => {
  const animate = {
    initial: { y: "100%" },
    open: (i) => ({
      y: "0%",
      transition: {
        duration: 1.2,
        delay: 0.15 * i,
        ease: [0.5, 1, 0.89, 1],
      },
    }),
  };

  return (
    <div className="overflow-hidden">
      <motion.p
        className="text-[0.9em] leading-normal"
        custom={index}
        variants={animate}
        initial="initial"
        animate={isInView ? "open" : ""}
      >
        {phraseLine}
      </motion.p>
    </div>
  );
};

export default PhraseLine;
