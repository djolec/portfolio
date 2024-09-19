import { useState, useEffect } from "react";

const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ height: null, width: null });

  useEffect(() => {
    const resize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    resize();

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  return dimensions;
};

export default useDimensions;
