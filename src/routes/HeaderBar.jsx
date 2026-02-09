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
        <div className="top-0 left-0 w-full">
          <motion.img
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}} 
            className='w-40 h-auto rounded-xl'
            src={Majik}
            alt="Profile Image"/>

            <motion.ul
            variants={navVariants}
            initial="hidden"
            animate="visible" 
            className='flex flex-row gap-x-2 ml-auto text-sm sm:text-base'>
                {/*Will be converted to social media icons and links later*/}
                <motion.li variants={itemVariants}><Link to="/">Home</Link></motion.li>
                <motion.li variants={itemVariants}><Link to="/card">Case Studies</Link></motion.li>
                <motion.li variants={itemVariants}><Link to="/about">About</Link></motion.li>
                <motion.li variants={itemVariants}><Link to="/contact">Contact</Link></motion.li>

            </motion.ul>
        </div>
    </div>
  );
}

