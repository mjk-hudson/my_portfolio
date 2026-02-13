import React from 'react';
import {Projects} from '../components/DataIndex.js';
import { motion } from 'motion/react';


export default function Project () {
    return (
        <div className="border-b border-cyan-800 pb-4">
        <h2 className='my-20 text-start text-3xl text-indigo-500'>Recent Projects</h2>
            <div>
                {Projects.map((project, index) =>(
                    <div key={index} className="mb-8 gap-x-12 flex flex-wrap lg:justify-center">
                        <motion.div
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        transition={{duration: 1}} 
                        className="w-full lg:w-1/4">
                            <img src={project.image} 
                                width={250} 
                                height={250}
                                alt={project.title}
                                className='mb-6 rounded-xl' 
                            />
                        </motion.div>
                        <motion.div 
                        whileInView={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: 100}}
                        transition={{duration: 1.5}}
                        className="w-full max-w-xl lg:w-3/4 mt-4">
                            <h3 className='mb-2 font-semibold text-indigo-500'>{project.title}</h3>
                            <p className='mb-6'>{project.description}</p>
                            {project.technologies.map((tech, index)=>(
                                <span key={index} className='p-2 mb-10 mr-2 rounded bg-cyan-900 text-cyan-400'>{tech}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};