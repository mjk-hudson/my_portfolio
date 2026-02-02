import React from "react";
import { motion } from "motion/react";

      //1.Horizontal slide (home<-> card)
  export const horizontalVariants = {
    initial: { opacity: 0, x: 20, y: 0 },
    animate: { opacity: 1, x: 0, y:0 },
    exit: { opacity: 0, x: -20, y: 0, transition: { duration: 1.5 } },
  };
  
  //2.Vertical slide (card <-> project)
  export const verticalVariants = {
  initial: { opacity: 0, height: 0, y: 10 // A slight nudge for a smooth lift effect 
},
  animate: { opacity: 1, height: "auto", y: 0 },
  exit: { opacity: 0, height: 0, y: 10, transition: { duration: 1.5 } },
  };

