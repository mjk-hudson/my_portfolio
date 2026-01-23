import React from 'react';
import { useEffect } from 'react';
import HeaderBar from './HeaderBar';
import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import './App.css'

export default function App ()
{
  const location = useLocation();
  const outlet = useOutlet();

  //Reset scroll position on route changes
  useEffect(() => {
    //ONLY reset scroll if we're not going to a project page
   if (!location.pathname.includes("FirstProjectComponent")) 
    {window.scrollTo(0, 0);}
  }, [location.pathname]);
  
  //1.Horizontal slide (home<-> card)
  const horizontalVariants = {
    initial: { opacity: 0, x: 20, y: 0 },
    animate: { opacity: 1, x: 0, y:0 },
    exit: { opacity: 0, x: -20, y: 0 },
    transition: { duration: 0.3 },
  };
  
  //2.Vertical slide (card <-> project)
  const verticalVariants = {
  initial: { opacity: 0, height: 0, y: 10 // A slight nudge for a smooth lift effect 
  },
  animate: { opacity: 1, height: "auto", y: 0 },
  exit: { opacity: 0, height: 0, y: 10 },
  };

  //4.Robust path checking
  const isProjectPage = location.pathname.includes("FirstProjectComponent");


  return (
    <>
      <HeaderBar />
      <div className="pt-20 px-4 relative min-h-screen overflow-x-hidden">

        <AnimatePresence mode="wait">
          <motion.div
          key={location.pathname}

          //Dynamically swap animation variants
          variants={ isProjectPage ? verticalVariants : horizontalVariants }
          initial='initial'
          animate='animate'
          exit='exit'

          //Different speeds for different directions
          transition={{
            duration: isProjectPage ? 0.5 : 0.3, 
            ease: 'easeInOut'}}
          style={{ overflow: 'hidden' }}
          className="w-full"
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

