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
            <div classname="w-full p-6 md:p-4 gap-6 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">
                  
                {/*Vibe Space Hero Image*/}
                <img src={vibeSpaceHero} alt="Vibe Space Hero" />

                {/*Vibe Space Intro*/}
                <h1 className="text-start text-3xl font-bold text-slate-800 mb-4">{ProjectData.p2.intro.title}
                </h1>
                <h2 className="text-start text-2xl font-bold text-slate-700">Technologies and Platforms:
                </h2>
                <p className='text-start text-lg text-slate-600'>{ProjectData.p2.intro.technologies}
                </p>
                <h2 className="text-start text-2xl font-bold text-slate-700">Study description:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.intro.studyDescription}
                </p>
                <div className="gap-4 ">
                </div>
                <h2 className="text-start text-2xl font-bold text-slate-700">Product description:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base mb-4">{ProjectData.p2.intro.productDescription}
                </p>

                {/*Vibe Empathy*/}
                <h1 className="text-start text-3xl font-bold text-slate-800">{ProjectData.p2.empathy.title}
                </h1>
                <h2 className="text-start text-2xl font-bold text-slate-700">Method: Usability Study
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.empathy.studyDescription}
                </p>
                <div className="gap-4 ">
                <img src={ProjectData.p2.empathy.VibeStudyImage} alt="Vibe Space Empathy" />
                </div>

                {/*Personas*/}
                <h2 className="text-start text-2xl font-bold text-slate-700">Personas:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.empathy.personaIntro}
                </p>
                <h2 className="text-start text-2xl font-bold text-slate-700">Maya Chen:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.empathy.persona1}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.personaImage1} alt="Vibe Space Persona Image 1" />
                    <img src={ProjectData.p2.empathy.empathyMapImage1} alt="Vibe Space Empathy Image 1"/>
                </div>
                
                <h2 className="text-start text-2xl font-bold text-slate-700">Marcus Vance:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.empathy.persona2}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.personaImage2} alt="Vibe Space Persona Image 2" />
                </div>
                <img src={ProjectData.p2.empathy.empathyMapImage2} alt="Vibe Space Empathy Image 2" />
                <h2 className="text-start text-2xl font-bold text-slate-700">Elena Rostova:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.empathy.persona3}
                </p>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.personaImage3} alt="Vibe Space Persona Image 3" />
                </div>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.empathyMapImage3} alt="Vibe Space Empathy Image 3" />
                </div>
                <h2 className="text-start text-2xl font-bold text-slate-700">Key Insights and Summary:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.empathy.insights}
                </p>
                <p className="text-start text-slate-600 text-small sm:text-base mb-4">
                {ProjectData.p2.empathy.summary}
                </p>

                {/*Define*/}
                <h1 className="text-start text-3xl font-bold text-slate-800">Define
                </h1>
                <p className="text-start text-slate-600 text-small sm:text-base mb-2">
                {ProjectData.p2.define.problemStatement}
                </p>
                <h2 className="text-start text-2xl font-bold text-slate-700">Hypothesis Statement:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.define.hypothesisStatement}
                </p>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.define.designPrinciples}
                </p>
                <h2 className="text-start text-2xl font-bold text-slate-700">Value Proposition:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.define.valueProposition}
                </p>
                <div className="gap-4 mb-4">
                    <img src={ProjectData.p2.define.informationArchitecture} alt="Information Architecture"/>
                </div>
                <div className="gap-4">
                    <img src={ProjectData.p2.define.userFlows} alt="User Flows"/>
                </div>
                <h2 className="mt-4 text-start text-2xl font-bold text-slate-700">Define Summary:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base mb-4">
                {ProjectData.p2.define.defineSummary}
                </p>

                {/*Design*/}
                <h1 className="text-start text-3xl font-bold text-slate-800">Ideation
                </h1>
                <h2 className="text-start text-2xl font-bold text-slate-700 mt-4">Ideation Methods:
                </h2>
                <h3 className="text-start text-slate-600 mt-1">{ProjectData.p2.Ideate.ideationMethods}
                </h3>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Ideate.designChallenge}
                </p>
                <div className="gap-4">
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.Ideate.crazy8s}</p>
                </div>
                <div className="gap-4">
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.Ideate.earlySketches}</p>
                </div>
                <h3 className="text-start text-slate-600 mt-1">Concept Development:
                </h3>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Ideate.conceptDevelopment}
                </p>
                <div className="gap-4 mt-6">
                <img className="rounded-xl" src={ProjectData.p2.Ideate.crazy8Images1} alt="Crazy 8s Images"/>
                </div>
                <div className="gap-4 mt-6">
                <img className="rounded-xl" src={ProjectData.p2.Ideate.crazy8Images2} alt="Crazy 8s Images"/>
                </div>
                <div className="gap-4 mt-6">
                    <img className="rounded-xl" src={ProjectData.p2.Ideate.crazy8Images3} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.crazy8Images4} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.crazy8Images5} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.crazy8Images6} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.crazy8Images7} alt="Crazy 8s Images"/>
                </div>
                <p className="my-5 text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Ideate.ideationSummary}
                </p>
                <div className="gap-4">
                <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.ideation1} alt="Early Sketches"/>
                <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.ideation2} alt="Early Sketches"/>
                <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.ideation3} alt="Early Sketches"/>
                </div>

                <div className="gap-4 mt-6">
                </div>
                <div className="gap-4 mt-6 place-items-center">
                <img className="w-1/2" src={ProjectData.p2.Prototype.iterationImage1} alt="Iteration Images"/>
                <img className="w-full mt-6" src={ProjectData.p2.Prototype.iterationImage2} alt="Iteration Images"/>
                </div>
                <div className="gap-4 mt-6">
                <img src={ProjectData.p2.Prototype.iterationImage3} alt="Iteration Images"/>
                <img className="w-full place-items-center mt-6" src={ProjectData.p2.Prototype.iterationImage4} alt="Iteration Images"/>
                <img className="w-full place-items-center mt-6" src={ProjectData.p2.Prototype.iterationImage5} alt="Iteration Images"/>
                <img className="w-full place-items-center mt-6" src={ProjectData.p2.Prototype.iterationImage6} alt="Iteration Images"/>
                </div>

                {/*Prototype*/}
                <h1 className="text-start text-3xl font-bold text-slate-800 mt-6">Prototype
                </h1>
                <p className="mt-4 text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Prototype.prototypeIntro}
                </p>

                {/*Iteration Images and Rationale*/}

                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Prototype.rationale}
                </p>

                <div className="gap-4 mt-6 place-items-center">
                    <img className="w-1/2 h-auto" src={ProjectData.p2.Prototype.finalImage1} alt="Final Images"/>
                </div>
                <div className="gap-4 mt-6 place-items-center">
                    <img className="w-1/2 h-auto" src={ProjectData.p2.Prototype.finalImage2} alt="Final Images"/>
                </div>
                <div className="gap-4 mt-6 place-items-center">
                    <img className="w-1/2 h-auto" src={ProjectData.p2.Prototype.finalImage3} alt="Final Images"/>

                    <img className="w-1/2 h-auto mt-6 place-items-center" src={ProjectData.p2.Prototype.finalImage4} alt="Final Images"/>

                    <img className="w-1/2 h-auto mt-6 place-items-center" src={ProjectData.p2.Prototype.finalImage5} alt="Final Images"/>

                    <img className="w-1/2 h-auto mt-6 place-items-center" src={ProjectData.p2.Prototype.finalImage6} alt="Final Images"/>
                </div>

                {/*Mock-Ups*/}
                <h1 className="text-start text-3xl font-bold text-slate-800">Mock-Ups
                </h1>
                <div className="gap-4 grid grid-cols-2">
                    <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mock1} alt="Mock-Ups"/>
                    <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mock2} alt="Mock-Ups"/>
                </div>
                <div className="gap-4 grid grid-cols-2 palce-items-center">
                    <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mock3} alt="Mock-Ups"/>
                    <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mock4} alt="Mock-Ups"/>
                </div>
                <div className="gap-4 grid grid-cols-2 place-items-center">
                    <img className="w-3/4 h-auto" src={ProjectData.p2.Prototype.Mock5} alt="Mock-Ups"/>
                </div>
                    <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mock6} alt="Mock-Ups"/>
                
                {/*Darkmode Mock-Ups*/}
                <p className="text-start text-slate-600 text-small sm:text-base my-4">
                {ProjectData.p2.Prototype.darkmode}

                </p>
                    <img className="w-1/2" src={ProjectData.p2.Prototype.Mock7} alt="Mock-Ups"/>

                    <img className="w-full" src={ProjectData.p2.Prototype.Mock8} alt="Mock-Ups"/>

                    <img className="w-1/2" src={ProjectData.p2.Prototype.Mock9} alt="Mock-Ups"/>

                    <img className="w-full" src={ProjectData.p2.Prototype.Mock10} alt="Mock-Ups"/>

                    <img className="w-1/2" src={ProjectData.p2.Prototype.Mock11} alt="Mock-Ups"/>

                    <img className="w-full" src={ProjectData.p2.Prototype.Mock12} alt="Mock-Ups"/>

                {/*Vibe Space GIFs*/}
                <h2 className="text-start text-2xl font-bold text-slate-700 mt-4">Prototype user flow animations:</h2>
                <p className="text-start text-slate-600 text-small sm:text-base my-4">
                {ProjectData.p2.Prototype.Mockgifs}
                </p>
                <div className="gap-4 grid grid-cols-2 my-4">
                    <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mockgif1} alt="Mock-Ups"/>
                    <img className="w-3/4 h-auto" src={ProjectData.p2.Prototype.Mockgif2} alt="Mock-Ups"/>
                    <img className="w-3/4 h-auto" src={ProjectData.p2.Prototype.Mockgif3} alt="Mock-Ups"/>
                    <div className="gap-4 grid grid-cols-1 place-items-center">
                        <img className="w-full h-auto" src={ProjectData.p2.Prototype.Mockgif4} alt="Mock-Ups"/>
                    </div>
                </div>

                {/*Testing*/}
                <h1 className="text-start text-3xl font-bold text-slate-800">Testing
                </h1>
                <h2 className="text-start text-2xl font-bold text-slate-700">
                {ProjectData.p2.Test.testMethod}
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Test.testDescription}
                </p>
                <h3 className="text-start text-2xl font-bold text-slate-600">Test Results:
                </h3>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Test.testResults}
                </p>
                <h3 className="text-start text-2xl font-bold text-slate-600">Key Insights:
                </h3>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Test.resultInsights}
                </p>
                <h3 className="text-start text-2xl font-bold text-slate-600">Test Summary:
                </h3>
                <div className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Test.testSummary}
                </div>
                <h3 className="text-start text-2xl font-bold text-slate-600">Conclusion:
                </h3>
                <div className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Test.conclusion}
                </div>
            </div>
        </>
    );
}