import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { container, fadeUp, fade, slideRight } from "../animations/animations";
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
        <motion.div variants={fade} initial="initial"
        animate="enter"
        exit="exit" className="h-screen fixed inset-0 bg-amber-500 z-[100] flex justify-center items-center">
          <div className="h-fit max-w-sm lg:max-w-[50%] w-full px-4 flex flex-col justify-center">
            <motion.div
              variants={container}
              initial="initial"
              animate="enter"
              exit="exit"
              className="text-[8vw] lg:text-[4.2vw] text-center font-bold"
            >
              {words.map((w) => (
                <motion.span
                  variants={fadeUp}              
                  className="mr-1 lg:mr-3"
                  key={w}
            
                >
                  {w}
                </motion.span>
              ))}
            </motion.div>
            <div className="relative w-full h-1 rounded-lg  overflow-hidden">
              <motion.div
                variants={slideRight}
                initial="initial"
                animate="enter"
                exit="exit"
                className="h-full w-full absolute bg-black rounded-lg"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
