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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]); 

  const pageVariants = {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20, transition: { duration: 0.4 } },
    };

  return (
    <>
      <HeaderBar />

      <div className="pt-20 px-4 min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full">
            {outlet}
          </motion.div>
        </AnimatePresence>
      </div>    
    </>
  );
}

