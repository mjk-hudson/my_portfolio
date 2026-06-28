import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import {ProjectData} from '../components/ProjectData.jsx';


export default function Bledger()
{
    
    return(
        <>
            {/*--Bledger Intro--*/}
            <div className="w-full p-6 md:p-4 gap-6 bg-slate-900/50 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">

                {/*--Hero Image--*/}
                <img src={ProjectData.p1.intro.image} alt="Bledger App" className='w-full h-auto rounded-lg mb-10'/>

                {/*--Project Overview--*/}
                <div className="gap-4">
                    <h1 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">{ProjectData.p1.intro.title}</h1>
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">{ProjectData.p1.intro.technologies}</h2>
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Study Description</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.intro.studyDescription}</p>
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Product Description</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.intro.productDescription}</p>
                </div>

                {/*--Empathy and User Research--*/}
                <div classname='gap-4'>

                    {/*--Empathy--*/}
                    <h1 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">{ProjectData.p1.empathy.title}</h1>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">{ProjectData.p1.empathy.methods}</h2>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Study Description</h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.StudyDescription}</p>

                    {/*User Research*/}
                    <div classname='gap-4'>
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">User Research</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.userResearch}</p>
                    </div>

                    {/*Personas*/}
                    <div classname='gap-4'>
                        <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Personas
                        </h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.personaIntro}
                        </p>

                        {/*First Persona*/}
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Mya Rodriguez</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.persona1}</p>
                        <img src={ProjectData.p1.empathy.personaImage1} alt="Bledger User Persona" className='w-full h-auto rounded-lg mb-10'/>

                        {/*Second Persona*/}
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Jamal Johnson</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.persona2}
                        </p>
                        <img src={ProjectData.p1.empathy.personaImage2} alt="Bledger User Persona" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                    
                    {/*User Journey Mapping*/}
                    <div classname='gap-4'>
                        <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">User Journey Mapping
                        </h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.journeyMapping}
                        </p>
                        <img src={ProjectData.p1.empathy.journeyMapImage} alt="Bledger User Journey Map" className='w-full h-auto rounded-lg mb-10'/>
                        <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Pains and Gains
                        </h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.painGains}
                        </p>

                        {/*Empathy Map*/}
                        <img src={ProjectData.p1.empathy.empathyMapImage} alt="Bledger User Pains and Gains" className='w-full h-auto rounded-lg mb-10'/>

                        {/*Insights and Summary*/}
                        <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Insights
                        </h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.insights}
                        </p>
                        <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Summary
                        </h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.summary}
                        </p>
                    </div>

                </div>

                {/*Define*/} 
                <div classname='gap-4'>
                    <h1 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Define
                    </h1>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Problem Statement
                    </h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.define.problemStatement}
                    </p>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Hypothesis Statement
                    </h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.define.HypothesisStatement}
                    </p>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Value Proposition
                    </h2>
                    <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.define.valueProposition}
                    </p>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.define.competitiveAudit}
                    </p>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.define.competitiveAuditImage} alt="Bledger Competitive Audit" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.define.informationArchitecture} alt="Bledger Information Architecture" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.define.userFlows} alt="Bledger User Flows" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.define.wireframe1} alt="Bledger Wireframes" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.define.wireframe2} alt="Bledger Wireframes" className='w-full h-auto rounded-lg mb-10'/>
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Define Summary
                        </h2>
                        <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.define.defineSummary}
                        </p>
                    </div>
                </div>
                {/*Ideation*/}
                <div classname='gap-4'>
                    <h1 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Ideation
                    </h1>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.ideationMethods}
                    </p>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Design Challenge
                    </h2>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.designChallenge}
                    </p>
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Crazy 8s
                    </h2>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.crazy8s}
                    </p>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.ideate.earlySketches} alt="Bledger Early Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.conceptDevelopment}
                    </p>
                </div>

                    {/*Crazy 8 Images*/}
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.ideate.crazy8Image1} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.crazy8Image2} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.crazy8Image3} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    </div>

                    {/*ideate Summary*/}
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Ideation Summary
                    </h2>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.ideationSummary}
                    </p>

                    {/*Iteration Images*/}
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Iterations
                    </h2>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.ideate.iterationImage1} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.iterationImage2} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.iterationImage3} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.iterationImage4} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    </div>

                    {/*Iteration description*/}
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Iteration Description
                    </h2>
                    <p className='text-left text-slate-400 text-small sm:text-base'>{ProjectData.p1.ideate.iterationDescription}
                    </p>
                    {/*Final Iteration Images*/}
                    <h2 className="text-start text-slate-300 text-base sm:text-lg">Final Iteration Images
                    </h2>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.ideate.finalImage1} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.finalImage2} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.finalImage3} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.finalImage4} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
            </div>
            {/*Prototype*/}
            <div classname='gap-4'>
                <h1 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Prototype
                </h1>
                <p className="text-left text-slate-400 text-small sm:text-base ">{ProjectData.p1.prototype.prototypeIntro}
                </p>

                {/*Prototype Images*/}
                <div classname='gap-4'>
                    <img src={ProjectData.p1.prototype.prototypeImage1} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.prototypeImage2} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.prototypeImage3} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.prototypeImage4} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                </div>

                {/*Rationale*/}
                <h2 className="text-start text-slate-300 text-base sm:text-lg">Rationale
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">
                    {ProjectData.p1.prototype.rationale}
                </p>

                {/*Final Prototype Images*/}
                <div classname='gap-4'>
                    <img src={ProjectData.p1.prototype.finalImage1} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage2} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage3} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage4} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage5} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage6} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage7} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.prototype.finalImage8} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                </div>
            </div>

            {/*Test*/}
            <div classname='gap-4'>
                <h1 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Test
                </h1>
                <h2 className="text-start text-slate-300 text-base sm:text-lg">Testing Methods
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testMethod}
                </p>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testDescription}
                </p>
                <h2 className="text-start text-slate-300 text-base sm:text-lg">Test Results
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testResults}
                </p>
                <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Data Insights
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.dataInsights}
                </p>
                <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Results Insights
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.resultInsights}
                </p>
                <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Test Summary
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.testSummary}
                </p>
                <h2 className="text-start text-slate-200 font-semibold text-lg sm:text-xl">Conclusion
                </h2>
                <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.test.conclusion}
                </p>
            </div>
        </>
    );
}
