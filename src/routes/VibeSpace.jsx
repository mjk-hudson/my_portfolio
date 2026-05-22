import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';
import vibeSpaceHero from '../assets/Vibe-Space-Hero.png';
import ProjectData from '../data/ProjectData';


export default function VibeSpace ()
{
    return (
        <>
            <div>   
                {/*Vibe Space Hero Image*/}
                <img src={vibeSpaceHero} alt="Vibe Space Hero" />

                {/*Vibe Space Intro*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.intro.title}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.intro.technologies}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.intro.studydescription}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.intro.image} alt="Vibe Space Study" />
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.intro.productdescription}
                </div>

                {/*Vibe Empathy*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.title}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.methods}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.studydescription}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.empathy.image} alt="Vibe Space Empathy" />
                </div>

                {/*Personas*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.personaIntro}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.persona1}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden"><img src={ProjectData.p2.empathy.personaImage1} alt="Vibe Space Persona Image 1" />
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.empathyImage1}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.persona2}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden"><img src={ProjectData.p2.empathy.personaImage2} alt="Vibe Space Persona Image 2" />
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.empathyImage2}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.persona3}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden"><img src={ProjectData.p2.empathy.personaImage3} alt="Vibe Space Persona Image 3" />
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.empathyImage3}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.insights}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.empathy.summary}
                </div>

                {/*Define*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.define.problemStatement}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.define.hypothesisStatement}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.define.designPrinciples}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.define.valueProposition}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.define.informationArchitecture} alt="Information Architecture"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.define.userFlows} alt="User Flows"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.define.wireframes} alt="Wireframes"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.define.defineSummary}

                {/*Design*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.ideationMethods}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.designChallenge}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Ideate.crazy8s} alt="Crazy 8s"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Ideate.earlySketches} alt="Early Sketches"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.conceptDevelopment}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Ideate.crazy8Images1} alt="Crazy 8s Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Ideate.crazy8Images2} alt="Crazy 8s Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Ideate.crazy8Images3} alt="Crazy 8s Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.ideationSummary}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.iterationDescription}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Ideate.iterationDescription}
                </div>

                {/*Prototype*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Prototype.prototypeIntro}
                </div>

                {/*Iteration Images and Rationale*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Prototype.iterationImage1} alt="Iteration Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Prototype.iterationImage2} alt="Iteration Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Prototype.iterationImage3} alt="Iteration Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Prototype.rationale}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Prototype.finalImage1} alt="Final Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Prototype.finalImage2} alt="Final Images"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Prototype.finalImage3} alt="Final Images"/>
                </div>

                {/*Testing*/}
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Test.testMethods}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Test.testDescription}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Test.competitiveAudit} alt="Competitive Audit"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">
                <img src={ProjectData.p2.Test.competitiveAuditImage} alt="Test Findings"/>
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Test.testResults}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Test.resultInsights}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Test.testSummary}
                </div>
                <div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">{ProjectData.p2.Test.conclusion}
                </div>
            </div>
        </>
    );
}