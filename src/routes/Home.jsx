import React from 'react';
import { motion } from 'motion/react';
import Technologies from './Technologies';
import Project from './Projects';


export default function Home() {
  return (
    <motion.div 
    initial={{opacity: 0, x: -100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: 100}}
    transition={{duration: 0.5, ease: 'anticipate'}}
    className='min-h-screen items-center justify-center'>
      
      <div className="max-w-7xl text-start selection:bg-pink-300 selection:text-pink-800 mb-20">
        
        <motion.h1
        initial={{opacity: 0, y: +50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1, delay: 0.5}} 
        className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-300 via-slate-500 to-purple-500 tracking-tight">
          Product Designer.
        </motion.h1>

        <motion.p
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.8, duration: 1.5}}
        className="mt-6 text-neutral-700 max-w-2xl text-start">
          I’m Majik Hudson, a Product Designer based in Hell’s Kitchen, N.Y.C., focused on turning complex business problems into intuitive, high-adoption digital products. Drawing on my experience shipping enterprise-scale financial tools at Bank of America, I own the end-to-end design process—from user research and system architecture to functional, production-ready React prototypes. By pairing design systems with interactive motion and modern front-end execution, I validate ideas early, reduce engineering friction, and deliver products built for real-world scale.
        </motion.p>

        <div className="mt-20 text-center">
         <Technologies />
       </div>
      </div>
    </motion.div>
  );
}
