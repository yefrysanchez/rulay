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

export const fadeUp = {
  initial: {
    y: 100,
    opacity: 0,
  },
  enter: {
    y: 0 ,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    opacity: 1,
  },
  exit: {
    y: 100 ,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    opacity: 0,
  },
};

// Define the variants for the parent and child animations
export const container = {
  initial: {},
  enter: {
    transition: {
      staggerChildren: 0.2, // Adjust this for timing between each animation
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1, // Adjust this for timing between each animation
    },
  },
};
