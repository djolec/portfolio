import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const Devices = ({ folder }) => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  console.log(isMobile);

  const isInView = useInView(ref, {
    margin: "0px 0px -90% 0px",
    once: "true",
  });

  const anim = (variants) => {
    return {
      initial: "initial",
      animate: isInView ? "animate" : "",
      variants,
    };
  };

  const laptop = {
    initial: {
      y: 150,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const phone = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const ipad = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        delay: 0.4,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative mx-auto flex w-full max-w-[150rem] items-center justify-center overflow-hidden py-16 sm:py-32"
      ref={ref}
    >
      <div className="relative w-[69%] -translate-x-[7%] sm:w-[58%]">
        {isMobile ? (
          <>
            <img
              className="h-auto w-full"
              height="580"
              width="1000"
              loading="eager"
              src="/images/frames/laptop_frame.webp"
            />

            <img
              className="absolute left-[12%] top-[6%] h-auto w-[75.8%]"
              height="571"
              width="900"
              loading="eager"
              src={`/images/${folder}/devices/laptop-mobile.webp`}
              alt=""
            />

            <div className="absolute -bottom-[10%] -left-[5%] w-[20%]">
              <img
                className="relative z-[5] h-auto w-full"
                height="900"
                width="417"
                loading="eager"
                src="/images/frames/samsung_frame.webp"
              />

              <img
                className="absolute left-[2.2%] top-[1.3%] h-auto w-[94.5%] rounded-[2%]"
                height="500"
                width="225"
                loading="eager"
                src={`/images/${folder}/devices/phone-mobile.webp`}
                alt=""
              />
            </div>

            <div className="absolute -bottom-[10%] -right-[20%] w-[60%]">
              <img
                className="relative z-[5] h-auto w-full"
                height="767"
                width="1000"
                loading="eager"
                src="/images/frames/IPadProFrame.webp"
              />

              <img
                className="absolute left-[3.1%] top-[4.1%] h-auto w-[94.2%]"
                width="700"
                height="527"
                loading="eager"
                src={`/images/${folder}/devices/ipad-mobile.webp`}
                alt=""
              />
            </div>
          </>
        ) : (
          <>
            <motion.img
              className="h-auto w-full"
              height="862"
              width="1487"
              loading="eager"
              {...anim(laptop)}
              src="/images/frames/laptop_frame.webp"
            />

            <motion.img
              className="absolute left-[12%] top-[6%] h-auto w-[75.8%]"
              height="914"
              width="1449"
              loading="eager"
              {...anim(laptop)}
              src={`/images/${folder}/devices/laptop.webp`}
            />

            <motion.div
              className="absolute -bottom-[10%] -left-[5%] w-[20%]"
              {...anim(phone)}
            >
              <img
                className="relative z-[5] h-auto w-full"
                height="1800"
                width="834"
                loading="eager"
                src="/images/frames/samsung_frame.webp"
              />

              <img
                className="absolute left-[2.6%] top-[1.3%] h-auto w-[94.2%] rounded-[2%]"
                height="1400"
                width="630"
                loading="eager"
                src={`/images/${folder}/devices/phone.webp`}
                alt=""
              />
            </motion.div>

            <motion.div
              className="absolute -bottom-[10%] -right-[20%] w-[60%]"
              {...anim(ipad)}
            >
              <img
                className="relative z-[5] h-auto w-full"
                loading="eager"
                src="/images/frames/IPadProFrame.webp"
              />

              <img
                className="absolute left-[3.1%] top-[4.1%] h-auto w-[94.2%]"
                width="1200"
                height="903"
                loading="eager"
                src={`/images/${folder}/devices/ipad.webp`}
                alt=""
              />
            </motion.div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default Devices;
