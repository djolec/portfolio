import { motion } from "framer-motion";
import DrawerCurve from "./DrawerCurve";
import useIsHovered from "../hooks/useIsHovered";
import MenuLink from "./MenuLink";
import SocialLink from "./SocialLink";

import { socials } from "../constants/socials";
import { links } from "../constants/navLinks";

const MenuDrawer = ({ closeMenu }) => {
  const { isHovered, mouseEnter, mouseLeave } = useIsHovered();
  const navLinks = links;

  return (
    <motion.div
      className="fixed right-0 top-0 z-[38] h-screen w-screen bg-[#1C1D20] p-6 sm:w-1/3 sm:p-20 sm:portrait:w-1/2"
      initial={{ x: "calc(100% + 100px)" }}
      animate={{
        x: "0%",
        transition: {
          type: "tween",
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      exit={{
        x: "calc(100% + 100px)",
        transition: {
          type: "tween",
          duration: 0.7,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <DrawerCurve />

      <div className="text-socialsText flex h-full w-full flex-col gap-4 pt-[10vh] sm:pt-[5vh]">
        <h6
          className="border-b border-b-white/60 pb-4 text-[0.9em] text-white/60"
          color="rgba(255, 255, 255, 0.5)"
          fontSize="10px"
        >
          NAVIGATION
        </h6>

        <ul className="flex flex-col items-start">
          {navLinks.map((link, index) => {
            return (
              <MenuLink
                key={link.text}
                link={link}
                index={index}
                length={navLinks.length}
                isHovered={isHovered}
                mouseEnter={mouseEnter}
                mouseLeave={mouseLeave}
                mouseClick={closeMenu}
              />
            );
          })}
        </ul>
      </div>

      <div className="text-socialsText absolute bottom-8 left-0 px-6 sm:px-20">
        <h6 className="pb-4 text-[0.9em] text-white/60">SOCIALS</h6>

        <div className="flex gap-5">
          {socials.map((social) => {
            return (
              <SocialLink
                key={social.title}
                text={social.title}
                href={social.link}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuDrawer;
