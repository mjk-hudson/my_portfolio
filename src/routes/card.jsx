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
import bledgerBoard from '../assets/bledger/mockups/iPhone-3q-view3.png';
import vibeSpaceHero from '../assets/vibespace/mockups/match-tablet-dark-full.png';
import Bledger from './Bledger.jsx';
import VibeSpace from './VibeSpace.jsx';
import PazeBofa from './PazeBofa.jsx';
import PazeLogo from '../assets/Paze_Logo.jpg';

export default function Card()
{	const [expandedProject, setExpandedProject] = useState(null);
	
	const toggleExpand = (projectName) => {
		setExpandedProject(prev => prev === projectName ? null : projectName);
	};

	return( 
		<>

		{/*--Paze--*/}
		<div className="p-10 gap-x-16 space-y-4 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">

			{/*--Hero image--*/}
			<img src={PazeLogo} 
				alt="Bank of America, Paze Digital wallet platform image"
				className="w-1/2 h-auto rounded-lg"/>
				
				{/*--project Title --*/}
				<div className="space-y-3">
					<h1 className="text-2xl font-semibold text-neutral-800">
						Paze
					</h1> 

					{/* Project description */}
					<p className="text-neutral-600">In a crowded digital wallet landscape, Bank of America needed to introduce Paze to millions of customers without adding checkout friction or eroding trust. As Senior Experience Designer, I led the end-to-end UX strategy for key enrollment and payment flows—translating user research and strict financial compliance requirements into a cohesive, scalable interface. By validating complex state transitions through interactive prototypes early, I aligned product, legal, and engineering teams around a seamless experience built for enterprise-scale adoption.
					</p>      			
				</div>
				
				{/*--Platform info graphic "info"--*/}
				<div className=" px-2 py-2 justify-between items-center gap-8 flex row-span-1 bg-blue-700 rounded-lg">
				
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
				onClick={() => toggleExpand("Paze")}
				className="mt-6 flex items-center gap-3 text-cyan-600 hover:text-cyan-800 transition-colors focus:outline-none">
				<span className="font-medium">
				{expandedProject === "Paze" ? "Close Case Study" : "Open Case Study"}
				</span>
				</button>
				
				{/* Animated details section */}
				<AnimatePresence>
				{expandedProject === "Paze" && (
					<motion.div
					initial={{ height: 0, opacity: 0 }}
					animate={{ height: "auto", opacity: 1 }}
					exit={{ height: 0, opacity: 0 }}
					transition={{ duration: 0.7, ease: "easeInOut" }}
					className="overflow-hidden">
					<div className="pt-8 border-t border-gray-200">
					<PazeBofa />
					</div>
					</motion.div>
				)}
				</AnimatePresence>
				
				
		</div>

		{/*--Bledger--*/}
		<div className="p-10 gap-x-16 space-y-4 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">

			{/*--Hero image--*/}
			<img src={bledgerBoard} 
				alt="Bledger Platform image"
				className="w-1/2 h-auto rounded-lg"/>
				
				{/*--project Title --*/}
				<div className="space-y-3">
					<h1 className="text-2xl font-semibold text-neutral-800">
						Bledger
					</h1>      			
					{/* Project description */}
					<p className="text-neutral-600">Traditional budgeting apps fail gig-economy workers whose income fluctuates week to week, leading to high churn and financial anxiety. I designed Bledger from 0 to 1 as an AI-driven personal finance platform tailored to variable cash flow—owning the product strategy, information architecture, and modular design system. By pairing predictive insights with interactive motion and functional prototypes, I transformed complex financial forecasting into an intuitive, low-friction daily habit.
					</p>      			
				</div>
				
				{/*--Platform info graphic "info"--*/}
				<div className=" px-2 py-2 justify-between items-center gap-8 flex row-span-1 bg-lime-400 rounded-lg">
				
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

		{/*Vibe Space--*/}
		<div className="p-10 gap-x-16 space-y-12 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">
				{/*--Hero image--*/}
				<img src={vibeSpaceHero} 
				alt="Vibe Space Platform image"
				className="w-3/4 h-auto rounded-lg"/>
				
				{/*--project Title --*/}
				<h1 className="text-start text-2xl font-semibold text-neutral-800">
					Vibe Space
				</h1>
				<div className="space-y-3">      			
				{/* Project description */}
					<p className="text-neutral-600">Event discovery platforms often suffer from high RSVP-to-attendance drop-off, leaving organizers with empty rooms and users with fragmented social experiences. I designed Vibe Space to close that gap through a just-in-time check-in and dynamic rerouting system that adapts to real-world user behavior. Leading the responsive web architecture and interactive state choreography, I created a resilient platform that keeps attendees engaged from discovery through arrival.
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
		
		{/*--Neighborgood--*/}	
		<div className="p-10 w-full gap-x-8 space-y-12 rounded-xl outline-zinc-500/40 overflow-hidden place-items-center">

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Neighborgood Platform image"
				className="w-3/4 h-auto rounded-lg"/>

			{/*--project Title --*/}
			<div className="space-y-3">
				<h1 className="text-2xl font-semibold text-neutral-800">
					Neighborgood
				</h1>      			
				{/* Project description */}
				<p className="text-neutral-600">Local community spaces are vital neighborhood assets, yet discovering and booking them is often buried behind outdated, fragmented processes. For Neighborgood, I led end-to-end service and product design—synthesizing user interviews and journey maps into a streamlined, WCAG-accessible reservation platform. Through rapid wireframing and high-fidelity interactive prototyping, I simplified multi-step scheduling for both residents and space organizers.
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
		
		</>
	);
}
