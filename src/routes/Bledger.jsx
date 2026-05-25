import React from 'react';
import { Link, Outlet} from 'react-router-dom';
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import {ProjectData} from '../components/ProjectData.js';


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
                        <img src={ProjectData.p1.empathy.personaImage} alt="Bledger User Persona" className='w-full h-auto rounded-lg mb-10'/>

                        {/*Second Persona*/}
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Jamal Johnson</h2>
                        <p className="text-left text-slate-400 text-small sm:text-base">{ProjectData.p1.empathy.persona2}
                        </p>
                        <img src={ProjectData.p1.empathy.persona2Image} alt="Bledger User Persona" className='w-full h-auto rounded-lg mb-10'/>
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
                        <img src={ProjectData.p1.define.wireframes} alt="Bledger Wireframes" className='w-full h-auto rounded-lg mb-10'/>
                        <h2 className="text-start text-slate-300 text-base sm:text-lg">Define Summary
                        </h2>
                        <p className='text-left text-slate-'>{ProjectData.p1.define.defineSummary}
                        </p>
                    </div>
                {/*Ideation*/}
                <div classname='gap-4'>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideate.ideationMethods}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideate.designChallenge}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideate.crazy8s}
                    </div>
                    <div classname='gap-4'>
                        <img src={ProjectData.p1.ideate.earlySketches} alt="Bledger Early Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideate.conceptDevelopment}
                    </div>

                    {/*Crazy 8 Images*/}
                    <div>
                        <img src={ProjectData.p1.ideate.crazy8Images1} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.crazy8Images2} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.crazy8Images3} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    </div>

                    {/*ideate Summary*/}
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideate.ideationSummary}
                    </div>

                    {/*Iteration Images*/}
                    <div>
                        <img src={ProjectData.p1.ideate.iterationImage1} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.iterationImage2} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.iterationImage3} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.iterationImage4} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    </div>

                    {/*Iteration description*/}
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideate.iterationDescription}
                    </div>

                    {/*Final Iteration Images*/}
                    <div>
                        <img src={ProjectData.p1.ideate.finalImage1} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.finalImage2} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.finalImage3} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.ideate.finalImage4} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                </div>

                {/*Prototype*/}
                <div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.prototype.prototypeIntro}
                    </div>

                    {/*Prototype Images*/}
                    <div>
                        <img src={ProjectData.p1.prototype.prototypeImage1} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.prototype.prototypeImage2} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.prototype.prototypeImage3} alt="Bledger Prototype Iterations" className='w-full h-auto rounded-lg mb-10'/>
                    </div>

                    {/*Rationale*/}
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.prototype.rationale}
                    </div>

                    {/*Final Prototype Images*/}
                    <div>
                        <img src={ProjectData.p1.prototype.finalImage1} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.prototype.finalImage2} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.prototype.finalImage3} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                        <img src={ProjectData.p1.prototype.finalImage4} alt="Bledger Final Prototype" className='w-full h-auto rounded-lg mb-10'/>
                    </div>
                </div>

                {/*Test*/}
                <div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.testMethod}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.testDescription}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.testResults}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.dataInsights}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.resultsInsights}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.testSummary}
                    </div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.test.conclusion}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
