import React from "react";
import{RiReactjsLine} from 'react-icons/ri';
import{SiMongodb} from 'react-icons/si';
import{FaNodeJs} from 'react-icons/fa';
import{DiCss3Full} from 'react-icons/di';
import{DiGit} from 'react-icons/di';
import{DiHtml5} from 'react-icons/di';
import{DiJsBadge} from 'react-icons/di';
import{SiTailwindcss} from 'react-icons/si';
import{TbBrandFramerMotion} from 'react-icons/tb';
import {PiFigmaLogoDuotone} from 'react-icons/pi';
import { SiWebpack } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import {motion} from 'motion/react';

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {y:[10, -10],
        transition:{
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
        }
    },
});
export default function Technologies() {
  return (
    <div className="border-b border-cyan-800 items-center justify-center pb-20">

      <h2 className="text-3xl text-start text-font-semibold text-indigo-500 pb-10">Technologies & Frameworks.</h2>

        {/* Technology icons */}
      <motion.div 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -50}}
      transition={{duration: 1, ease: 'easeInOut'}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
            variants={iconVariants(2.5)}
            initial= "initial"
            animate= "animate"
            whileHover={{scale: 1.2}}
            className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <PiFigmaLogoDuotone className="text-2xl text-pink-500" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Figma
            </span>
        </motion.div>
        <motion.div
            variants={iconVariants(3)}
            initial='initial'
            whileHover={{scale: 1.2}}
            animate= 'animate'
            className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <DiHtml5 className="text-2xl text-red-500" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                HTML5
            </span>

        </motion.div>
        <motion.div 
          whileHover={{scale: 1.2}}
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <DiCss3Full className="text-2xl text-orange-500" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-orange-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              CSS3
            </span>
        </motion.div>
        <motion.div
          whileHover={{scale: 1.2}} 
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <DiJsBadge className="text-2xl text-yellow-400" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-yellow-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                JavaScript
            </span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(4.5)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
          <RiReactjsLine className="text-2xl text-cyan-400" />
          {/* icon Tooltip */}
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            React.js
          </span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(4.5)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
          <SiTypescript className="text-2xl text-blue-700" />
          {/* icon Tooltip */}
          <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            TypeScript
          </span>
        </motion.div>
        <motion.div
          whileHover={{scale: 1.2}} 
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <DiGit className="text-2xl text-neutral-400" />
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-neutral-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              Git
            </span>
        </motion.div>
        <motion.div
          whileHover={{scale: 1.2}} 
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className="group relative rounded-2xl border-2 border-purple-900 p-4">
              <SiMongodb  className="text-2xl text-green-500" />
              {/* icon Tooltip */}
              <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-green-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Mongo DB</span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <SiTailwindcss className="text-2xl text-indigo-500" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Tailwind CSS</span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <SiBootstrap className="text-2xl text-blue-700" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Bootstrap CSS</span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(2)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <FaNodeJs className="text-2xl text-green-400" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-green-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Node.js</span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(3.5)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <TbBrandFramerMotion className="text-2xl text-purple-500" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Framer- Motion.dev</span>
        </motion.div>
        <motion.div
        whileHover={{scale: 1.2}} 
        variants={iconVariants(2.5)}
        initial='initial'
        animate='animate'
        className="group relative rounded-2xl border-2 border-purple-900 p-4">
            <SiWebpack className="text-2xl text-blue-500" />
            {/* icon Tooltip */}
            <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-[10px] text-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">Webpack</span>
        </motion.div>
      </motion.div>
    </div>
  );
}