import { AnimatePresence } from "framer-motion";
import MenuToggle from "./MenuToggle";
import MenuDrawer from "./MenuDrawer";
import useMenuButton from "../hooks/useMenuButton";
import NoScrollOverlay from "./NoScrollOverlay";

const SideMenu = ({ isMenuOpen, setIsMenuOpen, closeMenu }) => {
  const { isVisible } = useMenuButton();

  return (
    <div className="text-hero">
      <MenuToggle
        isVisible={isVisible}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <AnimatePresence mode="sync">
        {isMenuOpen && (
          <>
            <MenuDrawer closeMenu={closeMenu} />
            <NoScrollOverlay closeMenu={closeMenu} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
