import { useEffect, useState } from "react";

const useXPercent = () => {
  const [scrollDirection, setScrollDirection] = useState(-1);
  const [xPercent, setXPercent] = useState(0);
  const increment = 0.03;

  // Sets the scroll direction
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > prevScrollY ? 1 : -1);
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Sets the value to animate the sliding text
  useEffect(() => {
    const interval = setInterval(() => {
      setXPercent((prevXPercent) => {
        let newXPercent = prevXPercent + increment * scrollDirection;

        if (newXPercent > 0) {
          return -100;
        } else if (newXPercent < -100) {
          return 0;
        }

        return newXPercent;
      });
    }, 4);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [scrollDirection, increment]);

  return { xPercent };
};

export default useXPercent;
