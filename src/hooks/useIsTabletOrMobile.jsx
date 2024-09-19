import { useEffect, useState } from "react";

function useIsTabletOrMobile() {
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(max-width: 1370px) and (pointer: coarse)",
    );

    const handleMediaQueryChange = (e) => {
      setIsTabletOrMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    setIsTabletOrMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isTabletOrMobile;
}

export default useIsTabletOrMobile;
