import React from "react";
import heroImage from '../assets/V2Mockup.png'
import openIcon from '../assets/fluent_open-24-filled.svg';
import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { useState } from 'react';

//images imports
import desktopIcon from '../assets/meteor-icons_desktop.svg';
import tabletIcon from '../assets/solar_tablet-outline.svg';
import phoneIcon from '../assets/proicons_phone.svg';
import ProjectDetails from "../routes/ProjectDetails.jsx";
import "./card.css";
import bledgerBoard from '../assets/Bledger-board.png';
import vibeSpaceHero from '../assets/Vibe-Space-Hero.png';
import Bledger from './Bledger.jsx';
import VibeSpace from './VibeSpace.jsx';

export default function Card()
{	const [expandedProject, setExpandedProject] = useState(null);
	
	const toggleExpand = (projectName) => {
		setExpandedProject(prev => prev === projectName ? null : projectName);
	};

	return( 
		<>
		{/*--Neighborgood First card--*/}	
		<div className="w-full gap-x-8 space-y-12 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Neighborgood Platform image"
				className="w-3/4 h-auto rounded-lg"/>

			{/*--project Title --*/}
    		<div className="space-y-3">      			
							{/* Project description */}
            				<p className="text-neutral-600">Navigating complex municipal zoning data to build local community hubs is often confusing and time-consuming. Neighborgood translates complex urban spatial data into an intuitive web service, enabling community leaders, volunteers, and organizers to effortlessly identify, vet, and activate underutilized local spaces for outreach events and neighborhood hubs.
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" px-2 py-2 justify-between items-center gap-8 sm:gap-4 flex row-span-1 bg-orange-500 rounded-lg">

				<div className="">
					<h2 className=" text-neutral-100 text-base">Platforms</h2>
				</div>
				
				{/*-- Icons --*/}
				<div className=" justify-items-center gap-2">
					<img src={desktopIcon}
					alt="Desktop"/>
					<p className="text-neutral-100 mt-2 text-xs">Desktop</p>
				</div>

				<div className="justify-items-center gap-2">
					<img src={tabletIcon}
					alt="Tablet"/>
					<p className="text-neutral-100 mt-2 text-xs">Tablet</p>
				</div>

				<div className="justify-items-center gap-2">
					<img src={phoneIcon}
					alt="Mobile"/>
					<p className="text-neutral-100 mt-2 text-xs">Mobile</p>
				</div>

			</div>

		{/* Expand / Collapse button */}
		<button
			onClick={() => toggleExpand("Neighborgood")}
			className="mt-6 flex items-center gap-3 text-orange-600 hover:text-orange-800 transition-colors focus:outline-none">
			<span className="font-medium">
			{expandedProject === "Neighborgood" ? "Close Case Study" : "Open Case Study"}
			</span>
		</button>

		{/* Animated details section */}
		<AnimatePresence>
			{expandedProject === "Neighborgood" && (
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: "auto", opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
				className="overflow-hidden">
				<div className="pt-8 border-t border-gray-200">
				<ProjectDetails />
				</div>
			</motion.div>
			)}
		</AnimatePresence>
		</div>

		{/*--Bledger Second card--*/}
		<div className="p-10 gap-x-16 space-y-12 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">

			{/*--Hero image--*/}
			<img src={bledgerBoard} 
				alt="Bledger Platform image"
				className="w-3/4 h-auto rounded-lg"/>

			{/*--project Title --*/}
    		<div className="space-y-3">      			
							{/* Project description */}
            				<p className="text-neutral-600">Traditional budgeting tools only track where your money went; Bledger ensures it stays where you need it. Purpose-built to navigate the volatile income streams of gig-economy workers, Bledger is an AI-driven personal finance platform that unifies fragmented tracking by pairing secure bank API integrations with agentic AI. By predicting cash-flow gaps, automating scheduled bill coverage, and delivering real-time gamified micro-nudges, Bledger proactively safeguards user liquidity and prevents overspending before it happens.
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" px-2 py-2 justify-between items-center gap-8 flex row-span-1 bg-cyan-500 rounded-lg">

				<div className="">
					<h2 className=" text-neutral-100 text-base">Platforms</h2>
				</div>
				
				{/*-- Icons --*/}
				<div className="justify-items-center gap-2">
					<img src={phoneIcon}
					alt="Mobile"/>
					<p className="text-neutral-100 mt-2 text-xs">Mobile</p>
				</div>
			</div>

		{/* Expand / Collapse button */}
		<button
			onClick={() => toggleExpand("Bledger")}
			className="mt-6 flex items-center gap-3 text-cyan-600 hover:text-cyan-800 transition-colors focus:outline-none">
			<span className="font-medium">
			{expandedProject === "Bledger" ? "Close Case Study" : "Open Case Study"}
			</span>
		</button>

		{/* Animated details section */}
		<AnimatePresence>
			{expandedProject === "Bledger" && (
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: "auto", opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
				className="overflow-hidden">
				<div className="pt-8 border-t border-gray-200">
				<Bledger />
				</div>
			</motion.div>
			)}
		</AnimatePresence>
		</div>

		{/*Vibe Space Third card--*/}
		<div className="p-10 gap-x-16 space-y-12 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">

			{/*--Hero image--*/}
			<img src={vibeSpaceHero} 
				alt="Vibe Space Platform image"
				className="w-3/4 h-auto rounded-lg"/>

			{/*--project Title --*/}
    		<div className="space-y-3">      			
							{/* Project description */}
            				<p className="text-neutral-600">Generic event directories only show you where to go; Vibe Space ensures you find the right community to go with. Purpose-built to eliminate the friction of modern local discovery, Vibe Space is an AI-driven responsive networking platform that pairs intelligent interest-matching algorithms with user-generated content to connect people through shared passions. By streamlining hyper-local activity discovery and state-based event queuing, Vibe Space transforms social barriers into meaningful interactions—helping users effortlessly build local connections, find hobby partners, and foster genuine belonging in their communities.
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" px-2 gap-8 py-2 flex justify-between items-center flex-row-span-full bg-rose-500 rounded-lg">

				<div className="flex row-span-1">
					<h2 className=" text-neutral-100 text-base">Platforms</h2>
				</div>
				
				{/*-- Icons --*/}
				<div className=" justify-items-center gap-2">
					<img src={desktopIcon}
					alt="Desktop"/>
					<p className="text-neutral-100 mt-2 text-xs">Desktop</p>
				</div>

				<div className="justify-items-center gap-2">
					<img src={tabletIcon}
					alt="Tablet"/>
					<p className="text-neutral-100 mt-2 text-xs">Tablet</p>
				</div>

				<div className="justify-items-center gap-2">
					<img src={phoneIcon}
					alt="Mobile"/>
					<p className="text-neutral-100 mt-2 text-xs">Mobile</p>
				</div>

			</div>

		{/* Expand / Collapse button */}
		<button
			onClick={() => toggleExpand("vibespace")}
			className="mt-6 flex items-center gap-3 text-rose-600 hover:text-rose-800 transition-colors focus:outline-none">
			<span className="font-medium">
			{expandedProject === "vibespace" ? "Close Case Study" : "Open Case Study"}
			</span>
		</button>

		{/* Animated details section */}
		<AnimatePresence>
			{expandedProject === "vibespace" && (
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{ height: "auto", opacity: 1 }}
				exit={{ height: 0, opacity: 0 }}
				transition={{ duration: 0.7, ease: "easeInOut" }}
				className="overflow-hidden">
				<div className="pt-8 border-t border-gray-200">
				<VibeSpace />
				</div>
			</motion.div>
			)}
		</AnimatePresence>
		</div>
		</>
	);
}
