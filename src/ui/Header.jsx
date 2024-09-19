import HeaderLink from "./HeaderLink";
import useIsHovered from "../hooks/useIsHovered";
import { links } from "../constants/navLinks";
import SideMenu from "./SideMenu";
import useMenuToggle from "../hooks/useMenuToggle";
import useDisableScroll from "../hooks/useDisableScroll";

const Header = ({ textColor = "text-[#1C1D20]" }) => {
  const { isHovered, mouseEnter, mouseLeave } = useIsHovered();
  const { isMenuOpen, setIsMenuOpen, closeMenu } = useMenuToggle();
  useDisableScroll(isMenuOpen);

  return (
    <header className="absolute left-0 top-0 z-30 w-full bg-transparent px-4 pt-6 text-headerNav sm:px-[2em] sm:pt-[1.5em]">
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        closeMenu={closeMenu}
      />
      <nav>
        <ul className="flex items-center justify-between">
          {links.slice(0, 1).map((link) => (
            <HeaderLink
              key={link.text}
              mouseEnter={mouseEnter}
              mouseLeave={mouseLeave}
              linkHovered={isHovered}
              to={link.to}
              textColor={textColor}
            >
              {link.text}
            </HeaderLink>
          ))}

          <li className="hidden lg:block portrait:hidden">
            <ul className="flex gap-[1.3em]">
              {links.slice(1).map((link) => (
                <HeaderLink
                  key={link.text}
                  mouseEnter={mouseEnter}
                  mouseLeave={mouseLeave}
                  linkHovered={isHovered}
                  to={link.to}
                  textColor={textColor}
                >
                  {link.text}
                </HeaderLink>
              ))}
            </ul>
          </li>

          <li className="block text-headerNav lg:hidden portrait:block sm:portrait:text-[3.3vw]">
            <button
              className="flex items-center gap-1 sm:gap-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <div
                className={`h-[0.5em] w-[0.5em] ${
                  textColor === "text-white" ? "bg-white" : "bg-[#1C1D20]"
                } rounded-full`}
              />
              <span className={`${textColor} `}>Menu</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
