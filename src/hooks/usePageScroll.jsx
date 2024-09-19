import { useScroll } from "framer-motion";

const usePageScroll = () => {
  const { scrollYProgress } = useScroll();

  return { scrollYProgress };
};

export default usePageScroll;
