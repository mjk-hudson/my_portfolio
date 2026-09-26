import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import vibeSpaceHero from '../assets/Vibe-Space-Hero.png';
import {ProjectData} from '../components/ProjectData.jsx';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PreMeet from '../components/PreMeetScreen.jsx?raw';

{/*Images*/}
import VibeJourneyMap from '../assets/vibe_space_initial_journey_map.png';
import VibeIA from '../assets/vibe_space_IA.png';
import VibeIA2 from '../assets/Vibe_IA2.png';
import PreMeetLobby from '../assets/vibespace/lobby-ready-mobile.png';


export default function VibeSpace ()
{
    return (
        <>
            <div classname="w-full p-6 md:p-4 gap-6 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">
                  
                {/*Vibe Space Hero Image*/}
                <img src={vibeSpaceHero} alt="Vibe Space Hero" />

                {/*Vibe Space Intro*/}
                <h2 className="mt-6 text-start text-2xl font-bold text-slate-700">Executive Summary
                </h2>
                <p className='text-start text-lg text-slate-600'>{ProjectData.p2.intro.technologies}
                </p>
                <h2 className="mt-2 text-start text-2xl font-bold text-slate-700">The Category
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.intro.studyDescription}
                </p>
                <div className="gap-4 ">
                </div>
                <h1 className="mt-6 text-start text-2xl font-bold text-slate-700">The Problem
                </h1>
                <p className="text-start text-slate-600 text-small sm:text-base mb-4">{ProjectData.p2.intro.productDescription}
                </p>

                {/*Vibe Empathy*/}
                <h2 className="mt-4 text-start text-2xl font-bold text-slate-700">The Methodology:
                </h2>
                <h3 className="mt-4 text-start font-bold text-slate-700">{ProjectData.p2.empathy.title}
                </h3>
                <p className="mt-2 text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.empathy.studyDescription}
                </p>

                {/*Personas*/}
                <h2 className='mt-4 text-left text-slate-700'>Intial User Journey Map</h2>
                <div className="">
                    <img src={VibeJourneyMap} alt="Vibe Space Empathy Image 3" />
                </div>

                <h2 className="mt-4 text-start text-2xl font-bold text-slate-700">Persona 1
                </h2>
                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.empathyMapImage1} alt="Vibe Space Empathy Image 1"/>
                </div>
                
                <h2 className="mt-4 text-start text-2xl font-bold text-slate-700">Persona 2
                </h2>
                <img src={ProjectData.p2.empathy.empathyMapImage2} alt="Vibe Space Empathy Image 2" />
                <h2 className="mt-4 text-start text-2xl font-bold text-slate-700">Persona 3
                </h2>


                <div className="gap-4">
                    <img src={ProjectData.p2.empathy.empathyMapImage3} alt="Vibe Space Empathy Image 3" />
                </div>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.empathy.insights}
                </p>
                <p className="text-start text-slate-600 text-small sm:text-base mb-4">
                {ProjectData.p2.empathy.summary}
                </p>

                {/*Define*/}
                <h3 className="text-start font-bold text-slate-700">Define Phase
                </h3>
                <p className="text-start text-slate-600 text-small sm:text-base mb-2">
                {ProjectData.p2.define.problemStatement}
                </p>
                <h3 className="mt-4 text-start font-bold text-slate-700">Value Proposition:
                </h3>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.define.valueProposition}
                </p>
                <div className="mt-4 mb-4">
                    <img src={ProjectData.p2.define.informationArchitecture} alt="Information Architecture"/>
                </div>
                <div className="mt-4">
                    <img src={ProjectData.p2.define.userFlows} alt="User Flows"/>
                </div>

                {/*Design*/}
                <h1 className="mt-6 text-start text-3xl font-bold text-slate-800">The Execution
                </h1>
                <h2 className="text-start text-2xl font-bold text-slate-700 mt-4">Design & Strategy:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Ideate.designChallenge}
                </p>
                <div className="gap-4">
                <p className="text-start text-slate-600 text-small sm:text-base">{ProjectData.p2.Ideate.earlySketches}</p>
                </div>
                <h3 className="mt-8 text-start text-slate-600 mt-1">Information Architecture:Mobile Breakpoints.
                </h3>
                <div className="mt-2">
                    <img className="rounded-xl" src={VibeIA} alt="Information Architecture"/>
                </div>
                {/*Mobile wireframes*/}
                <div className="mt-6">
                    <h2 className='text-start text-slate-700'>Mobile Breakpoint Wireframes
                    </h2>
                    <img className="rounded-xl my-4" src={ProjectData.p2.Ideate.crazy8Images3} alt="Crazy 8s Images"/>
                    <img className="rounded-xl" src={ProjectData.p2.Ideate.crazy8Images2} alt="Crazy 8s Images"/>
                </div>

                {/*Desktop IA*/}
                <div className="mt-14">
                    <h2 className='text-start text-slate-700'>Information Architecture: Desktop- Tablet Breakpoints.
                    </h2>
                    <img className="mt-4 rounded-xl" src={VibeIA2} alt="Information Architecture"/>
                </div>

                {/*Desktop Breakpoint wireframes*/}
                <h2 className='mt-12 text-start text-slate-700'>Desktop Breakpoint Wireframes (Dark Mode)
                </h2>
                <div className="gap-4 grid grid-cols-2 place-items-center">
                    <img className="rounded-xl mt-4" src={ProjectData.p2.Ideate.crazy8Images4} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-4" src={ProjectData.p2.Ideate.crazy8Images5} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-4" src={ProjectData.p2.Ideate.crazy8Images6} alt="Crazy 8s Images"/>
                    <img className="rounded-xl mt-4" src={ProjectData.p2.Ideate.crazy8Images7} alt="Crazy 8s Images"/>
                </div>

                {/*Final Designs*/}
                <h2 className='mt-18 text-start text-2xl text-slate-700'>Final Designs
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base">
                {ProjectData.p2.Prototype.rationale}
                </p>

                {/*Mobile final designs*/}
                <h2 className='mt-12 text-start text-slate-700'>Mobile Breakpoint Final Design
                </h2>
                <div className="gap-4 mt-2">
                    <img className="w-full mt-6" src={ProjectData.p2.Prototype.iterationImage2} alt="Iteration Images"/>
                </div>

                <div className="mt-14 gap-4">
                    <h2 className='mt-2 text-start text-slate-700'>Tablet/Desktop Breakpoints Final Design
                    </h2>
                    <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.ideation2} alt="Early Sketches"/>
                    <img className="rounded-xl mt-6" src={ProjectData.p2.Ideate.ideation3} alt="Early Sketches"/>
                    <img className="w-full place-items-center mt-6" src={ProjectData.p2.Prototype.iterationImage5} alt="Iteration Images"/>
                </div>


                {/*Hi-Fi Mocks*/}
                <h2 className="text-start text-2xl font-bold text-slate-800 mt-22">Hi-Fidelity Mock-Ups
                </h2>


                {/*Hi-Fi Mock Breakpoints*/}
                <div className="gap-4 grid grid-cols-2 place-items-center">
                    <img className="w-1/2 h-auto" src={ProjectData.p2.Prototype.finalImage1} alt="Final Images"/>

                    <img className="w-full h-auto mt-6 place-items-center" src={ProjectData.p2.Prototype.finalImage4} alt="Final Images"/>

                    <img className="w-1/2 h-auto" src={ProjectData.p2.Prototype.finalImage2} alt="Final Images"/>

                    <img className="w-full h-auto mt-6 place-items-center" src={ProjectData.p2.Prototype.finalImage5} alt="Final Images"/>

                    <img className="w-1/2 h-auto" src={ProjectData.p2.Prototype.finalImage3} alt="Final Images"/>
                    
                    <img className="w-full h-auto mt-6 place-items-center" src={ProjectData.p2.Prototype.finalImage6} alt="Final Images"/>
                </div>

                {/*Technical Architecture*/}
                <h2 className="text-start text-2xl font-bold text-slate-700 mt-24">Technical Architecture:
                </h2>
                <p className="text-start text-slate-600 text-small sm:text-base mt-2">
                Engineered the responsive web platform using pure JavaScript and React via Vite. This strictly bypassed TypeScript to maintain a lightweight, agile development environment while proving robust front-end structural competency in managing complex state.
                </p>

                {/*Code Snippet*/}
                    <div className="w-full max-w-full min-w-0 mt-6 bg-slate-800 rounded-lg border-gray-600 shadow-xl h-full max-h-[500px] scrollbar-thin scrollbar-thumb-slate-700 overflow-hidden">
                        <SyntaxHighlighter 
                        language="jsx"
                        style={vscDarkPlus}
                        wrapLongLines={true}
                        customStyle={{
                            margin:0,
                            padding:'1rem',
                            maxHeight:'500px',
                            fontSize:'.875rem',
                            lineHeight:'1.5',
                            backgroundColor:'#1e293b',
                            overflowX:'auto',
                        }}
                        codeTagProps={{
                            style:{
                                wordBreak: 'break-word',
                                whiteSpace: 'pre-wrap',
                            }
                        }}>
                            {PreMeet}
                        </SyntaxHighlighter>
                    </div>

                {/*Rendered UI*/}
                <h2 className='mt-10 text-start text-slate-700 text-xl'>Rendered UI</h2>
                <div className='grid grid-cols-1 place-items-center mt-2'>
                    <img className="w-1/3 h-auto mt-6" src={PreMeetLobby} alt="Pre-Meet Lobby"/>
                </div>
                    
                
                {/*Interaction Design*/}
                <h2 className="text-start text-2xl font-bold text-slate-700 mt-24">Interaction Design:</h2>
                <p className="text-start text-slate-600 text-small sm:text-base mt-2">
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
                <h1 className="mt-26 text-start text-2xl font-bold text-slate-800">The Outcome
                </h1>
                <h3 className="mt-8 text-start text-l font-semibold text-slate-500">Delivered a scalable, state-based networking architecture that effectively leverages AI to foster local belonging, streamline event discovery, and actively reduce event no-shows through intelligent queuing mechanics.
                </h3>
            </div>
        </>
    );
}