import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

//List parent animation
const navVariants = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      delayChildren:0.2,
      staggerChildren:0.1
    }
  }
};

//List Item animation
const itemVariants = {
  hidden: {opacity:0, y:-50},
  visible: {
    opacity: 1,
    y: 0, 
    transition: { duration:0.08 }
  },
  hover: { 
    scale: 1.5,
    color: '#a78bfa',
    transition: { duration: 0.2 }
  },
  tap: {scale: 0.95}
};

export default function HeaderBar()
{
  return(
    <div>
        <div className="flex p-4 border-b border-b-violet-300/20 bg-gray-900/75 shadow-md absolute top-0 left-0 w-full">
            <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}} 
            className="mr-12 text-gray-200 font-neonderthaw">Majik</motion.h1>

            <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible" 
            className='flex flex-row gap-x-8 ml-auto'>

                <motion.li variants={itemVariants}><Link to="/">Home</Link></motion.li>
                <motion.li variants={itemVariants}><Link to="/card">Case Studies</Link></motion.li>
                <motion.li variants={itemVariants}><Link to="/about">About</Link></motion.li>
                <motion.li variants={itemVariants}><Link to="/contact">Contact</Link></motion.li>

            </motion.ul>
        </div>
    </div>
  );
}

