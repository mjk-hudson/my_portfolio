import React from "react";
import {motion} from 'motion/react';
import {Experience, Skills, Education, Projects, Contact} from '../components/DataIndex.js'; 
import ProfileImage from '../assets/Majik_Hudson.jpg';

export default function About() {
  return (
    <div className="pb-20 selection:bg-pink-300 selection:text-pink-800">

      {/*Title*/}
      <motion.div
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -50}}
        transition={{duration: 0.8, ease: 'easeInOut'}}>
        <motion.h1 
        className="text-start text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-pink-300 via-slate-500 to-purple-500 tracking-tight pb-10">Experience, Skills & Education.
        </motion.h1>
      </motion.div>

      {/*Profile Image*/}
      <div className="border-b border-neutral-800 flex flex-col md:flex-row gap-10">
        <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{duration: 1, delay: 0.4, ease: 'easeInOut'}}
        className="md:w-1/3">
          <img src={ProfileImage} alt="Profile Image" className="rounded-xl w-full h-auto"/>
        </motion.div>

        {/*About me text section */}
        <motion.div 
        whileInView={{opacity: 1, x: 0 }}
        initial={{opacity: 0, x: 50}}
        transition={{duration: 1.5, delay: 0.5, ease: 'easeInOut'}}
        className="md:w-1/2">
          <p className="text-lg text-neutral-400 pb-4">I'm a passionate UX designer with 5+ years of experience in creating user-centered digital products and services with a strong foundation in frontend web technologies. My journey in design began with a curiosity about how things work, creating viable products and services and it has evolved into a career where I build solutions that are both functional, useful, interactive and elegant.</p>
          <p className="text-lg text-neutral-400 pb-4">I specialize in creating digital products and services as cross-platform responsive web applications using modern frameworks like React and Tailwind CSS, while also having experience with backend technologies such as Node.js and MongoDb. My approach to design is centered around viability, user experience, and continuous improvement.</p>
        </motion.div>
      </div>

      {/*Experience, Skills, Education sections */}

      {/*Experience Title */}
      <div className="py-10">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -50}}
        transition={{duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
        className="text-3xl text-start text-indigo-500">
          Experience
        </motion.h2>
      </div>

      {/*Dates, Role, Company, Description*/}
      <div className="border-b border-neutral-800 gap-10">

          {/*Date Range*/}
            {Experience.map((experience, index) => (
              <div className="text-start text-neutral-300 flex flex-wrap">
              <motion.div
              key={index}
              whileInView={{opacity: 1, x:0}}
              initial={{opacity: 0, x: -100}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
              className="w-full lg:w-1/4 mb-2">
                {experience.dateRange}
              </motion.div>

          {/*Role, Company, Description*/}
              <motion.div
              key={index}
              whileInView={{opacity: 1, x:0}}
              initial={{opacity: 0, x: 100}}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
              className="mb-8 w-full lg:w-3/4">
                <h3 className="text-xl text-indigo-500 font-semibold">
                  {experience.role}
                </h3>
                <h4 className="text-lg bg-cyan-900/50 rounded p-1 text-cyan-400 italic mb-2">{experience.company}
                </h4>
                <p className="text-neutral-400 mt-4 mb-8">
                  {experience.description}
                </p>
              </motion.div>
              </div>
            ))}
      </div>

      {/*Skill Information*/}
      <div className="border-b border-neutral-800 gap-10">
        <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
        className="text-3xl text-start text-indigo-500 mt-10 mb-8">Skills</motion.h2>
        <div>
          {Skills.map((skill, index) => (
            <motion.div key={index}
              whileInView={{opacity: 1, y:0}}
              initial={{opacity: 0, y: -20}}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut'}}
              className="text-lg mb-4 text-start">
              <h3 className="mb-2 bg-cyan-900 rounded p-1 text-xl text-cyan-400 font-semibold">
                {skill.role}
              </h3>
              <p className="pb-8">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/*Education Information*/}
      <div className="gap-10 border-b border-pink-300">
        <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
        className="text-3xl text-start text-indigo-500 mt-10 mb-8">Education</motion.h2>
        <div>
          {Education.map((education, index) => (
            <motion.div key={index}
              whileInView={{opacity: 1, y:0}}
              initial={{opacity: 0, y: -20}}
              transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut'}}
              className="text-lg mb-4 text-start">
              <h2 className="text-indigo-400 text-2xl mb-2">{education.dateRange}</h2>
              <h3 className="mb-4 bg-cyan-900 rounded p-1 text-xl text-cyan-400 font-semibold">
                {education.role}
              </h3>
              <h4 className="text-lg rounded p-1 text-indigo-400 italic mb-2">{education.company}
              </h4>
              <p className="pb-8">{education.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/*Contact Information*/}
      <div className="gap-10">
        <motion.h2
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -50}}
        transition={{duration: 0.8, delay: 0.5, ease: 'easeInOut'}}
        className="text-3xl text-start text-indigo-500 mt-10 mb-2">Contact</motion.h2>
        <motion.div
        whileInView={{opacity: 1, y:0}}
        initial={{opacity: 0, y: -20}}
        transition={{ duration: 0.8, delay: 0.8, ease: 'easeInOut'}}
        className="text-lg mb-4 text-start">
          <p className="text-neutral-400">{Contact.address}</p>
          <p className="text-neutral-400">{Contact.phone}</p>
          <h2 className="text-cyan-400">{Contact.email}</h2>
        </motion.div>
      </div>
    </div>
  );
}