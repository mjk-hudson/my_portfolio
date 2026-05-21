import React from 'react';
import { Link, Outlet, uselocation } from 'react-router-dom';
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import ProjectData from '../components/ProjectData.js';


export default function Bledger()
{
    return(
        <>
            {/*--Intro--*/}
            <div>

            {/*--Hero Image--*/}
            <img src={ProjectData.p1.intro.image} alt="Bledger App" className='w-full h-auto rounded-lg mb-10'/>

            {/*--Project Overview--*/}
            <div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.intro.title}</div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.intro.technologies}</div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.intro.studyDescription}</div>
                    <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.intro.productDescription}</div>
            </div>

            {/*--Empathy and User Research--*/}
            <div>
                {/*--Empathy--*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.title}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.methods}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.StudyDescription}</div>
                {/*User Research*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.userResearch}</div>
            </div>

            {/*Personas*/}
            <div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.personaIntro}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.persona1}</div>
                <img src={ProjectData.p1.empathy.personaImage} alt="Bledger User Persona" className='w-full h-auto rounded-lg mb-10'/>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.persona2}</div>
                <img src={ProjectData.p1.empathy.persona2Image} alt="Bledger User Persona" className='w-full h-auto rounded-lg mb-10'/>
            </div>
            
            {/*User Journey Mapping*/}
            <div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.journeyMapping}</div>
                <img src={ProjectData.p1.empathy.journeyMapImage} alt="Bledger User Journey Map" className='w-full h-auto rounded-lg mb-10'/>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.painsGains}</div>
                {/*Empathy Map*/}
                <img src={ProjectData.p1.empathy.empathyMapImage} alt="Bledger User Pains and Gains" className='w-full h-auto rounded-lg mb-10'/>
                {/*Insights and Summary*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.insights}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.empathy.summary}</div>
            </div>

            {/*Define*/} 
            <div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.problemStatement}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.HypothesisStatement}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.designPrinciples}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.valueProposition}</div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.competitiveAudit}</div>
                <img src={ProjectData.p1.define.competitiveAuditImage} alt="Bledger Competitive Audit" className='w-full h-auto rounded-lg mb-10'/>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.informationArchitecture}</div>
                <img src={ProjectData.p1.define.userFlows} alt="Bledger User Flows" className='w-full h-auto rounded-lg mb-10'/>
                <img src={ProjectData.p1.define.wireframes} alt="Bledger Wireframes" className='w-full h-auto rounded-lg mb-10'/>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.define.defineSummary}</div>
            </div>

            {/*Ideation*/}
            <div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideation.ideationMethods}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideation.designChallenge}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideation.crazy8s}
                </div>
                <div>
                    <img src={ProjectData.p1.ideation.earlySketches} alt="Bledger Early Sketches" className='w-full h-auto rounded-lg mb-10'/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideation.conceptDevelopment}
                </div>

                {/*Crazy 8 Images*/}
                <div>
                    <img src={ProjectData.p1.ideation.crazy8Images1} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.crazy8Images2} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.crazy8Images3} alt="Bledger Concept Sketches" className='w-full h-auto rounded-lg mb-10'/>
                </div>

                {/*Ideation Summary*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideation.ideationSummary}
                </div>

                {/*Iteration Images*/}
                <div>
                    <img src={ProjectData.p1.ideation.iterationImage1} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.iterationImage2} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.iterationImage3} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.iterationImage4} alt="Bledger Selected Concept" className='w-full h-auto rounded-lg mb-10'/>
                </div>

                {/*Iteration description*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p1.ideation.iterationDescription}
                </div>

                {/*Final Iteration Images*/}
                <div>
                    <img src={ProjectData.p1.ideation.finalImage1} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.finalImage2} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.finalImage3} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
                    <img src={ProjectData.p1.ideation.finalImage4} alt="Bledger Iteration Sketches" className='w-full h-auto rounded-lg mb-10'/>
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
        </>
    );
}
