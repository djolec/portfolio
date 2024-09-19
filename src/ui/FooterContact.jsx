import { useRef } from "react";
import Socials from "./Socials";
import { useScroll, useTransform, motion } from "framer-motion";
import Button from "./Button";

const FooterContact = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const xButton = useTransform(scrollYProgress, [0, 1], [-100, 0]);

  const contactInfo = [
    {
      text: "djordjeenglish@gmail.com",
      link: "mailto:djordjeenglish@gmail.com",
      type: "mailto:",
    },
    {
      text: "+381 64 328 74 95",
      link: "tel:+381643287495",
      type: "tel:",
    },
  ];

  return (
    <motion.footer
      className="relative flex min-h-[102vh] flex-col items-center justify-between bg-[#141517] text-roundButtonText"
      ref={ref}
    >
      <motion.div className="relative mx-auto my-auto flex w-full max-w-[150rem] flex-col items-center justify-start px-4 py-[5vh] sm:px-paddingX">
        <div className="flex w-full items-end justify-between text-footerHeader">
          <div className="sm:portrait:text-[2em]">
            <div className="flex items-center gap-4">
              <img
                className="inline-block h-[1em] w-[1em] rounded-full"
                src="/images/avatarpic.webp"
                alt="avatar"
              />
              <h3 className="leading-none text-white">Let&apos;s work</h3>
            </div>
            <h3 className="leading-none text-white">together</h3>
          </div>

          <img
            className="h-10 w-10"
            src="/images/SouthWest.svg"
            alt="SouthWest"
          />
        </div>

        <div className="bg-borderDark relative my-24 h-[1px] w-full sm:portrait:my-[16vw]">
          <motion.div
            className="absolute right-[10%] top-1/2 w-fit"
            style={{ x: xButton, translateY: "-50%" }}
          >
            <Button to="/contact" bgColor="bg-[#455CE9]">
              Get in touch
            </Button>
          </motion.div>
        </div>

        <div className="flex w-full flex-row flex-wrap items-center justify-start gap-5 portrait:flex-col portrait:sm:flex-row portrait:sm:gap-8">
          {contactInfo.map((contactItem) => {
            return (
              <Button key={contactItem.link} link={contactItem.link}>
                {contactItem.text}
              </Button>
            );
          })}
        </div>
      </motion.div>

      <Socials />
    </motion.footer>
  );
};

export default FooterContact;
