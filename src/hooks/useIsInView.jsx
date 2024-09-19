import { useInView } from "framer-motion";
import { useRef } from "react";

const useIsInView = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { marginTop: "-10%" });

  return { isInView, ref };
};

export default useIsInView;
