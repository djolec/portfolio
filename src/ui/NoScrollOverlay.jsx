import { motion } from "framer-motion";

const NoScrollOverlay = ({ closeMenu }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={closeMenu}
      className="fixed left-0 top-0 z-[37] h-screen w-screen bg-black/35"
    />
  );
};

export default NoScrollOverlay;
