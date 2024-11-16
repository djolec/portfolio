import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CurvedDiv = ({ bgColor = "white" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["150px", "0px"]);
  const margin = useTransform(scrollYProgress, [0, 1], ["-150px", "0px"]);

  return (
    <motion.div
      className="relative w-full overflow-hidden bg-transparent"
      style={{ height: height, marginBottom: margin }}
      ref={ref}
    >
      <motion.div
        className={`absolute -left-[80%] bottom-4 z-10 h-[1350%] w-[260%] rounded-bl-[50%] rounded-br-[50%] shadow-[0px_10px_10px_rgba(0,0,0,0.3)]`}
        style={{ backgroundColor: bgColor }}
      />
    </motion.div>
  );
};

export default CurvedDiv;
