import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import vibeSpaceHero from '../assets/Vibe-Space-Hero.png';
import {ProjectData} from '../components/ProjectData.jsx';


export default function VibeSpace ()
{
    return (
        <>
            <div classname="w-full p-6 md:p-4 gap-6 bg-slate-900/50 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">   
                {/*Vibe Space Hero Image*/}
                <img src={vibeSpaceHero} alt="Vibe Space Hero" />

                {/*Vibe Space Intro*/}
                <h1 className="text-start text-3xl font-bold text-white mb-4">{ProjectData.p2.intro.title}
                </h1>
                <h2 className="text-start text-2xl font-bold text-white">Technologies and Platforms:
                </h2>
                <p className='text-start text-lg text-gray-300'>{ProjectData.p2.intro.technologies}
                </p>
                <h2 className="text-start text-2xl font-bold text-white">Study description:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.intro.studyDescription}
                </p>
                <div className="gap-4 ">
                <img src={ProjectData.p2.intro.image} alt="Vibe Space Study" />
                </div>
                <h2 className="text-start text-2xl font-bold text-white">Product description:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base mb-4">{ProjectData.p2.intro.productDescription}
                </p>

                {/*Vibe Empathy*/}
                <h1 className="text-start text-3xl font-bold text-white">{ProjectData.p2.empathy.title}
                </h1>
                <h2 className="text-start text-2xl font-bold text-white">Method: Usability Study
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.empathy.studyDescription}
                </p>
                <div className="gap-4 ">
                <img src={ProjectData.p2.empathy.image} alt="Vibe Space Empathy" />
                </div>

                {/*Personas*/}
                <h2 className="text-start text-2xl font-bold text-white">Personas:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.empathy.personaIntro}
                </p>
                <h2 className="text-start text-2xl font-bold text-white">Maya Chen: {ProjectData.p2.empathy.persona1Title}
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.empathy.persona1}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.personaImage1} alt="Vibe Space Persona Image 1" />
                </div>
                <img src={ProjectData.p2.empathy.VibeEmpathyMap1} alt="Vibe Space Empathy Image 1" />
                
                <h2 className="text-start text-2xl font-bold text-white">Marcus Vance:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.empathy.persona2}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.personaImage2} alt="Vibe Space Persona Image 2" />
                </div>
                <img src={ProjectData.p2.empathy.VibeEmpathyMap2} alt="Vibe Space Empathy Image 2" />
                <h2 className="text-start text-2xl font-bold text-white">Elena Rostova:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.empathy.persona3}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.personaImage3} alt="Vibe Space Persona Image 3" />
                </div>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.VibeEmpathyMap3} alt="Vibe Space Empathy Image 3" />
                </div>
                <h2 className="text-start text-2xl font-bold text-white">Key Insights and Summary:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.empathy.insights}
                </p>
                <p className="text-start text-slate-400 text-small sm:text-base mb-4">
                {ProjectData.p2.empathy.summary}
                </p>

                {/*Define*/}
                <h1 className="text-start text-3xl font-bold text-white">Define
                </h1>
                <p className="text-start text-slate-400 text-small sm:text-base mb-2">
                {ProjectData.p2.define.problemStatement}
                </p>
                <h2 className="text-start text-2xl font-bold text-white">Hypothesis Statement:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.define.hypothesisStatement}
                </p>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.define.designPrinciples}
                </p>
                <h2 className="text-start text-2xl font-bold text-white">Value Proposition:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.define.valueProposition}
                </p>
                <div className="gap-4 mb-4">
                <img src={ProjectData.p2.define.informationArchitecture} alt="Information Architecture"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.define.userFlows} alt="User Flows"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.define.wireframes} alt="Wireframes"/>
                </div>
                <h2 className="text-start text-2xl font-bold text-white">Define Summary:
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base mb-4">
                {ProjectData.p2.define.defineSummary}
                </p>

                {/*Design*/}
                <h1 className="text-start text-3xl font-bold text-white">Ideation
                </h1>
                <h2 className="text-start text-2xl font-bold text-white">Ideation Methods:
                </h2>
                <h3 className="text-start text-white">{ProjectData.p2.Ideate.ideationMethods}
                </h3>
                <p className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.designChallenge}
                </p>
                <div className="gap-4">
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.Ideate.crazy8s}</p>
                </div>
                <div className="gap-4">
                <p className="text-start text-slate-400 text-small sm:text-base">{ProjectData.p2.Ideate.earlySketches}</p>
                </div>
                <h3 className="text-start text-white">Concept Development:
                </h3>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Ideate.conceptDevelopment}
                </p>
                <div className="gap-4">
                <img src={ProjectData.p2.Ideate.crazy8Images1} alt="Crazy 8s Images"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Ideate.crazy8Images2} alt="Crazy 8s Images"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Ideate.crazy8Images3} alt="Crazy 8s Images"/>
                <img src={ProjectData.p2.Ideate.crazy8Images4} alt="Crazy 8s Images"/>
                <img src={ProjectData.p2.Ideate.crazy8Images5} alt="Crazy 8s Images"/>
                <img src={ProjectData.p2.Ideate.crazy8Images6} alt="Crazy 8s Images"/>
                <img src={ProjectData.p2.Ideate.crazy8Images7} alt="Crazy 8s Images"/>
                </div>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Ideate.ideationSummary}
                </p>
                <div className="gap-4">
                <img src={ProjectData.p2.Ideate.ideation1} alt="Early Sketches"/>
                <img src={ProjectData.p2.Ideate.ideation2} alt="Early Sketches"/>
                <img src={ProjectData.p2.Ideate.ideation3} alt="Early Sketches"/>
                </div>
                <p className="text-start text-slate-400 text-small sm:text-base mb-4">
                {ProjectData.p2.Ideate.iterationDescription}
                </p>

                {/*Prototype*/}
                <h1 className="text-start text-3xl font-bold text-white">Prototype
                </h1>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Prototype.prototypeIntro}
                </p>

                {/*Iteration Images and Rationale*/}
                <div className="gap-4">
                <img src={ProjectData.p2.Prototype.iterationImage1} alt="Iteration Images"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Prototype.iterationImage2} alt="Iteration Images"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Prototype.iterationImage3} alt="Iteration Images"/>
                <img src={ProjectData.p2.Prototype.iterationImage4} alt="Iteration Images"/>
                <img src={ProjectData.p2.Prototype.iterationImage5} alt="Iteration Images"/>
                <img src={ProjectData.p2.Prototype.iterationImage6} alt="Iteration Images"/>
                </div>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Prototype.rationale}
                </p>
                <div className="gap-4">
                <img src={ProjectData.p2.Prototype.finalImage1} alt="Final Images"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Prototype.finalImage2} alt="Final Images"/>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Prototype.finalImage3} alt="Final Images"/>

                <img src={ProjectData.p2.Prototype.finalImage4} alt="Final Images"/>

                <img src={ProjectData.p2.Prototype.finalImage5} alt="Final Images"/>

                <img src={ProjectData.p2.Prototype.finalImage6} alt="Final Images"/>
                </div>

                //Mock-Ups
                <h1 className="text-start text-3xl font-bold text-white">Mock-Ups
                </h1>
                <div className="gap-4">
                    <img src={ProjectData.p2.Prototype.Mock1} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock2} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock3} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock4} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock5} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock6} alt="Mock-Ups"/>
                </div>
                <p className="text-start text-slate-400 text-small sm:text-base mb-4">
                {ProjectData.p2.Prototype.darkmode}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.Prototype.Mock7} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock8} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock9} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock10} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock11} alt="Mock-Ups"/>
                    <img src={ProjectData.p2.Prototype.Mock12} alt="Mock-Ups"/>
                </div>

                {/*Testing*/}
                <h1 className="text-start text-3xl font-bold text-white">Testing
                </h1>
                <h2 className="text-start text-2xl font-bold text-white">
                {ProjectData.p2.Test.testMethod}
                </h2>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Test.testDescription}
                </p>
                <div className="gap-4">
                    <p className="text-start text-slate-400 text-small sm:text-base">
                    {ProjectData.p2.Test.competitiveAudit}
                    </p>
                </div>
                <div className="gap-4">
                <img src={ProjectData.p2.Test.competitiveAuditImage} alt="Test Findings"/>
                </div>
                <h3 className="text-start text-2xl font-bold text-white">Test Results:
                </h3>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Test.testResults}
                </p>
                <h3 className="text-start text-2xl font-bold text-white">Key Insights:
                </h3>
                <p className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Test.resultInsights}
                </p>
                <h3 className="text-start text-2xl font-bold text-white">Test Summary:
                </h3>
                <div className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Test.testSummary}
                </div>
                <h3 className="text-start text-2xl font-bold text-white">Conclusion:
                </h3>
                <div className="text-start text-slate-400 text-small sm:text-base">
                {ProjectData.p2.Test.conclusion}
                </div>
            </div>
        </>
    );
}