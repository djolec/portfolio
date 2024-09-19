import Magnetic from "./Magnetic";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HeaderLink = ({
  children,
  mouseEnter,
  mouseLeave,
  linkHovered,
  to,
  textColor,
}) => {
  const location = useLocation();

  const linkStyles = `
  ${textColor} ${textColor === "text-white" ? "after:bg-white" : "after:bg-[#1C1D20]"} 
relative after:h-[0.5em] after:w-[0.5em] after:rounded-full after:absolute after:-bottom-[0.8em] after:left-1/2 after:-translate-x-1/2 after:transition-transform after:duration-300 after:scale-0 landscape:after:hover:scale-100 sm:portrait:text-[3.5vw]
  `;

  return (
    <li className="">
      <Magnetic xOffset={2} yOffset={1}>
        <NavLink
          className={`${linkStyles} ${
            to.some((item) => item === location.pathname) && !linkHovered
              ? "landscape:after:scale-100"
              : ""
          }`}
          to={to[0]}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
        >
          {children}
        </NavLink>
      </Magnetic>
    </li>
  );
};

export default HeaderLink;
