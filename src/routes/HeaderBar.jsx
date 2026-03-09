import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Majik from '../assets/Majik_logo_clipped.svg';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

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
    transition: { duration:1 }
  },
  hover: { 
    scale: 1.5,
    //color: '#a78bfa',
    transition: { duration: 0.2 }
  },
  tap: {scale: 0.95}
};

export default function HeaderBar()
{
  return(
    <nav className="fixed top-0 left-0 w-full z-50 px-4 bg-slate-950/50 backdrop-blur-md border-b border-white/10 selection:bg-pink-300 selection:text-pink-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/*Logo section */}
          <motion.img
            initial={{opacity: 0, scale:0}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5, delay: 0.5, type: 'spring', stiffness:400, damping: 20}} 
            className='w-24 h-auto rounded-xl'
            src={Majik}
            alt="Profile Image"/>

            {/*Navigation Links */}
            <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible" 
            className='flex flex-row gap-x-6 ml-auto text-sm sm:text-base'>

            <motion.li 
            variants={itemVariants}
            whileHover='hover'
            whileTap='tap'>
              <Link className="hover:text-cyan-400! transition-colors"to="/">Home</Link>
            </motion.li>

            <motion.li 
            variants={itemVariants}
            whileHover='hover'
            whileTap='tap'>
              <Link className="hover:text-cyan-400! transition-colors"to="/card">Projects</Link>
            </motion.li>

            <motion.li variants={itemVariants}
            whileHover='hover'
            whileTap='tap'>
              <Link className="hover:text-cyan-400! transition-colors"to="/about">About</Link>
            </motion.li>

            <motion.li variants={itemVariants}
            whileHover='hover'
            whileTap='tap'>
              <a 
                href='https://github.com/mjk-hudson'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='Github'
                className="hover:text-cyan-400! transition-colors">
                <FaGithub />
              </a>
              </motion.li>
            <motion.li variants={itemVariants}
            whileHover='hover'
            whileTap='tap'>
              <a 
                href='https://www.linkedin.com/in/majik-hudson/'
                target='_blank'
                rel='noopener noreferrer'
                aria-label='LinkedIn'
                className="hover:text-cyan-400! transition-colors">
                <FaLinkedin />
              </a>
              </motion.li>
            </motion.ul>
        </div>
    </nav>
  );
}

