import React from 'react';
import {Projects} from '../components/DataIndex.js';


export default function Project () {
    return (
        <div className="border-b border-neutral-900 pb-4">
        <h2 className='my-20 text-center text-3xl text-indigo-500'>Projects</h2>
            <div className=''>
                {Projects.map((project, index) =>(
                    <div key={index} className="mb-8 gap-x-12 flex flex-wrap lg:justify-center">
                        <div className="w-full lg:w-1/4">
                            <img src={project.image} 
                                width={250} 
                                height={250}
                                alt={project.title}
                                className='mb-6 rounded-xl' 
                            />
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className='mb-2 font-semibold text-indigo-500'>{project.title}</h3>
                            <p className='mb-6'>{project.description}</p>
                            {project.technologies.map((tech, index)=>(
                                <span key={index} className='p-2 mb-10 mr-2 rounded bg-cyan-900 text-cyan-400'>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};