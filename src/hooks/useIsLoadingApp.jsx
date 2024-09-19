import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useIsLoadingApp = () => {
  const [isLoadingApp, setIsLoadingApp] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (isLoadingApp === false) return;

    const timer = setTimeout(
      () => {
        setIsLoadingApp(false);
        window.scrollTo(0, 0);
      },
      location.pathname === "/" ? 4000 : 0,
    );

    return () => clearTimeout(timer);
  }, [location.pathname, isLoadingApp]);

  return { isLoadingApp };
};

export default useIsLoadingApp;
