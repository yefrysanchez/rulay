import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { fade, scaleX } from "../animations/animations";
import { useEffect, useState } from "react";

const Loader = () => {
  const words = ["The", "Adventure", "Awaits"];
  const [isVisible, setIsVisible] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start("exit");
      setTimeout(() => setIsVisible(false), 2000); // Adjust timeout to match animation duration
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={fade}
          initial="initial"
          animate="enter"
          exit="exit"
          className="h-screen fixed inset-0 bg-amber-500 z-[100] flex justify-center items-center"
        >
          <h2 className="font-bold absolute top-1/2 -translate-y-1/2 text-center text-[7.4vw] text-white">
            The Adventure Awaits
          </h2>
          <motion.div
            variants={scaleX}
            initial="initial"
            animate="enter"
            exit="exit"
            className="h-full w-full bg-black"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
