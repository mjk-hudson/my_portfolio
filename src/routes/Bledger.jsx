import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import {ProjectData} from '../components/ProjectData.jsx';
import BledgerHMW from '../assets/Bledger_How_might_we.png'



export default function Bledger()
{
    
    return(
        <>
            {/*--Bledger Intro--*/}
            <div className="w-full p-6 md:p-4 gap-6 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">

                {/*--Hero Image--*/}
                <div clasName="">
                    <img src={ProjectData.p1.intro.image} alt="Bledger App" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                </div>

                {/*--Project Overview--*/}
                <div className="gap-4">
                    <h1 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">{ProjectData.p1.intro.title}</h1>
                        <p className="text-start text-slate-500 text-base sm:text-lg">{ProjectData.p1.intro.technologies}</p>
                        <h2 className="text-start text-slate-500 text-base sm:text-lg">The Category</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.intro.studyDescription}</p>
                        <h1 className="text-start text-slate-500 text-base sm:text-lg">The Problem</h1>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.intro.productDescription}</p>
                </div>

                {/*--Empathy and User Research--*/}
                <div classname='gap-4'>

                    {/*--Empathy--*/}
                    <h2 className="mt-4 text-start text-slate-500 font-semibold text-lg sm:text-xl">{ProjectData.p1.empathy.title}</h2>
                    <h3 className="mt-4 text-start text-slate-500 text-base sm:text-lg">{ProjectData.p1.empathy.methods}</h3>
                    <h2 className="mt-2 text-start text-slate-400 text-base sm:text-lg">Study Description</h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.StudyDescription}</p>

                    {/*User Research*/}
                    <div classname='gap-4'>
                    </div>

                    {/*Personas*/}
                    <div classname='gap-4'>
                        <h2 className="mt-4 text-start text-slate-500 font-semibold text-lg sm:text-xl">Personas
                        </h2>

                        {/*First Persona*/}
                        <h2 className="mt-2 text-start text-slate-400 text-base sm:text-lg">Mya Rodriguez</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.persona1}</p>
                        <img src={ProjectData.p1.empathy.personaImage1} alt="Bledger User Persona" className='mt-4 w-full h-auto rounded-lg mb-10'/>

                        {/*Second Persona*/}
                        <h2 className="text-start text-slate-400 text-base sm:text-lg">Ben Johnson</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.persona2}
                        </p>
                        <img src={ProjectData.p1.empathy.personaImage2} alt="Bledger User Persona" className='mt-4 w-full h-auto rounded-lg mb-10'/>
                    </div>
                    
                    {/*User Journey Mapping*/}
                    <div classname='gap-4'>
                        <h2 className="mt-10 text-start text-slate-500 font-semibold text-lg sm:text-xl">User Journey Mapping
                        </h2>
                        <img src={ProjectData.p1.empathy.journeyMapImage} alt="Bledger User Journey Map" className='mt-6 w-full h-auto rounded-lg'/>

                        <h2 className="mt-6 text-start text-slate-500 font-semibold text-lg sm:text-xl">Empathy Map
                        </h2>

                        {/*Empathy Map*/}
                        <img src={ProjectData.p1.empathy.empathyMapImage} alt="Bledger Empathy Map" className='w-full h-auto rounded-lg'/>
                    </div>

                    <div classname='gap-4'>
                        <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-lg">Competitor Audit
                        </h2>
                        <img src={ProjectData.p1.define.competitiveAuditImage} alt="Bledger Competitive Audit image" className='w-full h-auto rounded-lg'/>
                    </div>
                </div>

                {/*Define*/} 
                <div classname='gap-4'>
                    <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Define Phase
                    </h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.define.problemStatement}
                    </p>
                    <div classname='gap-4'>
                        <h3 className="mt-6 text-start text-slate-400 text-base sm:text-lg">Information Architecture
                        </h3>
                        <img src={ProjectData.p1.define.informationArchitecture} alt="Bledger Information Architecture" className='mt- 4 w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.define.userFlows} alt="Bledger User Flows" className='w-full h-auto rounded-lg mb-10'/>

                    </div>
                </div>
                {/*Ideation*/}
                <div classname='gap-4'>
                    <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl mt-4">The Execution:
                    </h2>
                    <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl mt-4">Design and Strategy Phase.
                    </h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">Completed ideation phase artifacts. Constructed low-to-high fidelity wireframes in Figma, integrating ethical AI considerations (TensorFlow Lite) and conducting WCAG 2.1 AA accessibility audits. Explored node-based generative AI workflows using Figma Weave to rapidly iterate on layout variants.
                    </p>
                    <h3 className="mt-4 text-start text-slate-400 text-base sm:text-lg">Ideation Artifacts
                    </h3>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.ideationMethods}
                    </p>
                    <div>
                        <h2 className="mt-4 text-start text-slate-400 text-base sm:text-lg">How Might We....?
                        </h2>
                        <img src={BledgerHMW} alt="Bledger How Might We" className='w-full h-auto rounded-lg mt-1'/>
                    </div>
                    <h2 className="mt-6 text-start text-slate-400 text-base sm:text-lg">Crazy 8s
                    </h2>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.crazy8s}
                    </p>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.ideate.earlySketches} alt="Bledger Early Sketches" className='w-full h-auto rounded-lg mt-6'/>
                    </div>

                    <div className="gap-4">
                        {/*Wireframes*/}
                        <h3 className="mt-4 text-start text-slate-400 text-base sm:text-lg">Wireframes
                        </h3>
                        <p className='text-left text-slate-400 text-small sm:text-base'>Converted sketches into Low-Fidelity Wireframes to visualize the layout and structure of the app, focusing on user flow and functionality.
                        </p>
                        <img src={ProjectData.p1.define.wireframe1} alt="Bledger Wireframes" className='mt-6 w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.define.wireframe2} alt="Bledger Wireframes" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                </div>

                <div classname='gap-4 bg-slate-500'>
                    {/*Design Iterations*/}
                    <h2 className="text-start text-slate-400 text-base sm:text-lg">Concept Development / Iterations
                    </h2>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.conceptDevelopment}
                    </p>
                    <img src={ProjectData.p1.ideate.iterationImage1} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mt-6 mb-10'/>
                    <img src={ProjectData.p1.ideate.iterationImage2} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideate.iterationImage3} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideate.iterationImage4} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                </div>

                <div classname='gap-4 grid grid-cols-1 justify-center sm:grid-cols-2 '>
                    {/*Final Iteration Images*/}
                    <h2 className="text-start text-slate-400 text-base sm:text-lg mt-6">Final Design Direction
                    </h2>
                    <img src={ProjectData.p1.prototype.finalImage1} alt="Bledger Iteration Sketches" className='w-1/2 h-auto rounded-lg mb-10 mt-4 mx-auto'/>
                    <img src={ProjectData.p1.prototype.finalImage2} alt="Bledger Iteration Sketches" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.prototype.finalImage3} alt="Bledger Iteration Sketches" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.prototype.finalImage4} alt="Bledger Iteration Sketches" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                </div>
            </div>

            <div classname='gap-4'>
                {/*Prototype*/}
                <h1 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Prototype
                </h1>
                <p className="text-left text-slate-400 text-small sm:text-base mt-2">{ProjectData.p1.prototype.prototypeIntro}
                </p>

                {/*Prototype Images*/}
                <h2 className="text-start text-2xl font-bold text-slate-500 mt-4">Prototype animations:</h2>

                <div classname="">
                    <img src={ProjectData.p1.prototype.prototypeImage1} alt="Bledger Prototype Iterations" className='w-1/2 h-auto rounded-lg mb-10 mt-4 mx-auto'/>
                    <img src={ProjectData.p1.prototype.prototypeImage2} alt="Bledger Prototype Iterations" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.prototype.prototypeImage3} alt="Bledger Prototype Iterations" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.prototype.prototypeImage4} alt="Bledger Prototype Iterations" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                </div>

                {/*Rationale*/}
                <h2 className="text-start text-slate-400 text-base sm:text-lg">Rationale
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">
                    {ProjectData.p1.prototype.rationale}
                </p>

                {/*Final Prototype Images*/}
                <div classname='gap-4'>
                    <img src={ProjectData.p1.ideate.finalImage1} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage2} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage3} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage4} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage5} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage6} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage7} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                    <img src={ProjectData.p1.ideate.finalImage8} alt="Bledger Final Prototype" className='w-1/2 h-auto rounded-lg mb-10 mx-auto'/>
                </div>
            </div>

            {/*Test*/}
            <div classname='gap-4'>
                <h1 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Test
                </h1>
                <h2 className="text-start text-slate-400 text-base sm:text-lg">Testing Methods
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testMethod}
                </p>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testDescription}
                </p>
                <h2 className="text-start text-slate-400 text-base sm:text-lg">Test Results
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testResults}
                </p>
                <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Data Insights
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.dataInsights}
                </p>
                <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Results Insights
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.resultInsights}
                </p>
                <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Test Summary
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testSummary}
                </p>
                <h2 className="text-start text-slate-500 font-semibold text-lg sm:text-xl">Conclusion
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.conclusion}
                </p>
            </div>
        </>
    );
}
