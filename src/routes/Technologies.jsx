import React, {useState} from "react";
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
import {motion, AnimatePresence} from 'motion/react';

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

const Techs = [
    {name: 'Figma', duration:2.5, color: "text-pink-500" , icon: <PiFigmaLogoDuotone className="text-2xl text-pink-500" />},
    {name: 'HTML5', duration:3, color: "text-red-500", icon: <DiHtml5 className="text-2xl text-red-500" />},
    {name: 'CSS3', duration:3.5, color: "text-orange-500", icon: <DiCss3Full className="text-2xl text-orange-500" />},
    {name: 'JavaScript', duration:4, color: "text-yellow-400", icon: <DiJsBadge className="text-2xl text-yellow-400" />},
    {name: 'React.js', duration:4.5, color: "text-cyan-400", icon: <RiReactjsLine className="text-2xl text-cyan-400" />},
    {name: 'Git', duration:3, color: "text-neutral-400", icon: <DiGit className="text-2xl text-neutral-400" />},
    {name: 'Bootstrap CSS', duration:2.5, color: "text-blue-700", icon: <SiBootstrap className="text-2xl text-blue-700" />},
    {name: 'Tailwind CSS', duration:2.5, color: "text-indigo-500", icon: <SiTailwindcss className="text-2xl text-indigo-500" />},
    {name: 'Motion.dev', duration:3.5, color: "text-purple-500", icon: <TbBrandFramerMotion className="text-2xl text-purple-500" />},
];

export default function Technologies() {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <div className="border-b border-cyan-800 items-center justify-center pb-20">

      <h2 className="text-3xl text-start text-font-semibold text-indigo-500 pb-10">Technologies & Frameworks.</h2>

        {/* Technology container */}
      <motion.div 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -50}}
      transition={{duration: 1, ease: 'easeInOut'}}
      className="flex flex-wrap items-center justify-center gap-4">

        {Techs.map ((tech, index) => (
        <div 
          key={index}
          onMouseEnter={() => setHoveredTech(index)}
          onMouseLeave={() => setHoveredTech(null)}
          className='relative p-4 flex items-center justify-center'>

            {/* icons */}
          <motion.div
              variants={iconVariants(tech.duration)}
              initial= "initial"
              animate= "animate"
              whileHover={{scale: 1.5}}
              className='flex items-center justify-center'>
              {tech.icon}
          </motion.div>

              {/*Tooltips */}
              <AnimatePresence>
                {hoveredTech === index && (
                  <motion.span
                  initial={{opacity: 0, y: 10, x: '-50%'}}
                  animate={{opacity: 1, y: 0, x: '-50%'}}
                  exit={{opacity: 0, y: 10, x: '-50%'}}
                  className={`pointer-events-none absolute bg-neutral-250 -top-10 left-1/2 whitespace-nowrap px-3 py-1.5 text-xs shadow-lg ${tech.color}`}>
                   {tech.name}
                  </motion.span>
                )}
              </AnimatePresence>

        </div>
        ))}
      </motion.div>
    </div>
  );
}