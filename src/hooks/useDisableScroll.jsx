import { useEffect } from "react";

const useDisableScroll = (isMenuOpen) => {
  useEffect(() => {
    if (isMenuOpen) {
      document.body.setAttribute("data-lenis-prevent", "true");
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-lenis-prevent");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-lenis-prevent");
    };
  }, [isMenuOpen]);
};

export default useDisableScroll;
