const anim = (variants) => {
  return {
    initial: "initial",
    animate: "animate",
    variants,
  };
};

const pageAnim = {
  initial: {
    y: "400px",
  },
  animate: {
    y: "0px",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export const pageAnimation = anim(pageAnim);
