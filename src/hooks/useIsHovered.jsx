import { useState } from "react";

const useIsHovered = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnter = () => {
    setIsHovered(true);
  };

  const mouseLeave = () => {
    setIsHovered(false);
  };

  return { isHovered, mouseEnter, mouseLeave };
};

export default useIsHovered;
