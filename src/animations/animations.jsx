export const slideRight = {
  initial: {
    x: "-100%",
  },
  enter: {
    x: "0%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const fade = {
    initial: {
    },
    enter: {
      
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 },
    },
  };


  export const scaleX = {
    initial: {
      scaleX: "0%",
      scaleY: "0.1%",
    },
    enter: {
      scaleX: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      scaleY: "100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };
