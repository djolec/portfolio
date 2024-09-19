import { useState } from "react";
const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return { isMenuOpen, setIsMenuOpen, closeMenu };
};

export default useMenuToggle;
