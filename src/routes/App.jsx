import React from 'react';
import { useEffect } from 'react';
import HeaderBar from './HeaderBar';
import { useOutlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import './App.css'
import WaitingMobile from '../components/WaitingMobile';


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
    {/*<WaitingMobile initialSeconds={60}/>}*/}
    <HeaderBar />
    <div className='fixed inset-0 -z-10 overflow-x-hidden text-neutral-200 selection:bg-pink-300 selection:text-pink-800 pointer-events-none'>
      
      {/*App Background */}
      <div className="fixed top-0 h-full w-full">
        <div className="relative h-full w-full bg-slate-100">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full">
          </div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full">
          </div>
        </div>
      </div>
    </div>
      <div className="pt-45 px-0 min-h-screen">
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

