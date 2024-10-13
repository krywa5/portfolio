import { motion, Variants } from "framer-motion";
import { FunctionComponent } from "react";

const stairAnimations: Variants = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const STEPS_COUNT = 6;

const reverseIndex = (index: number) => {
  const totalSteps = STEPS_COUNT;
  return totalSteps - index - 1;
};

const Stairs: FunctionComponent = () => {
  return (
    <>
      {[...Array(STEPS_COUNT)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        );
      })}
    </>
  );
};

export default Stairs;
