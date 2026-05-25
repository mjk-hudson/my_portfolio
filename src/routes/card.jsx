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
{	const [isExpanded, setIsExpanded] = useState(false);
	
	const toggleExpand = () => {
		setIsExpanded(prev => !prev);
	};

	return( 
		<>
		{/*--Neighborgood First card--*/}	
		<div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Neighborgood Platform image"
				className="w-full h-auto rounded-lg"/>

			{/*--project Title --*/}
    		<div className="space-y-3">      			
						<h1 className=' text-neutral-200 text-left text-2xl font-bold'>Neighborgood
						</h1>
							{/* Project description */}
            				<p className="text-neutral-300">Neighborgood helps you make a mark in your community even if you're not sure where to start? Our new webservice makes it easy to find local areas perfect for creating community hubs, hosting outreach events, and volunteering. With just a few clicks, you'll be able to discover the best spots in your area to bring people together and make a positive impact on your community. ➡️
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" px-12 py-4 justify-between items-center flex row-span-1 bg-orange-500 rounded-lg">

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
			onClick={toggleExpand}
			className="mt-6 flex items-center gap-3 text-orange-600 hover:text-orange-800 transition-colors focus:outline-none">
			<img 
			src={openIcon} 
			className={`w-8 h-8 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
			alt={isExpanded ? "Collapse case study" : "Expand case study"}
			/>
			<span className="font-medium">
			{isExpanded ? "Collapse Case Study" : "View Full Case Study"}
			</span>
		</button>

		{/* Animated details section */}
		<AnimatePresence>
			{isExpanded && (
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
		<div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">

			{/*--Hero image--*/}
			<img src={bledgerBoard} 
				alt="Bledger Platform image"
				className="w-full h-auto rounded-lg"/>

			{/*--project Title --*/}
    		<div className="space-y-3">      			
						<h1 className=' text-neutral-200 text-left text-2xl font-bold'>Bledger
						</h1>
							{/* Project description */}
            				<p className="text-neutral-300">Bledger is a mobile budgeting application that uses AI to predict and prevent overspending, targeting millennials and Gen Z in gig economies. It solves the pain of fragmented financial tracking by integrating bank APIs and offering "nudges" via gamified micro-challenges. Also keeps tracks of bills, rent other important scheduled payments and either (using agentic A.I.) makes sure there is enough money in the account to cover the expenses, or sends alerts.
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" px-12 py-4 justify-between items-center flex row-span-1 bg-cyan-500 rounded-lg">

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
			onClick={toggleExpand}
			className="mt-6 flex items-center gap-3 text-cyan-600 hover:text-cyan-800 transition-colors focus:outline-none">
			<img 
			src={openIcon} 
			className={`w-8 h-8 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
			alt={isExpanded ? "Collapse case study" : "Expand case study"}
			/>
			<span className="font-medium">
			{isExpanded ? "Collapse Case Study" : "View Full Case Study"}
			</span>
		</button>

		{/* Animated details section */}
		<AnimatePresence>
			{isExpanded && (
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
		<div className="p-10 gap-x-16 space-y-12 bg-slate-950/50 rounded-xl outline-zinc-500/40 overflow-hidden">

			{/*--Hero image--*/}
			<img src={vibeSpaceHero} 
				alt="Vibe Space Platform image"
				className="w-full h-auto rounded-lg"/>

			{/*--project Title --*/}
    		<div className="space-y-3">      			
						<h1 className=' text-neutral-200 text-left text-2xl font-bold'>Vibe Space
						</h1>
							{/* Project description */}
            				<p className="text-neutral-300">Vibe Space is a responsive web based event matching-networking platform that connects people with similar interests and creates opportunities for meaningful interactions in local communities. By leveraging AI and user-generated content, Vibe Space helps users discover and join local events, activities, and groups that align with their passions. Whether you're looking to meet new friends, find a workout buddy, or explore new hobbies, Vibe Space is your go-to platform for building connections and fostering a sense of belonging in your community.
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" px-12 py-4 justify-between items-center flex row-span-1 bg-rose-500 rounded-lg">

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
			onClick={toggleExpand}
			className="mt-6 flex items-center gap-3 text-rose-600 hover:text-rose-800 transition-colors focus:outline-none">
			<img 
			src={openIcon} 
			className={`w-8 h-8 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
			alt={isExpanded ? "Collapse case study" : "Expand case study"}
			/>
			<span className="font-medium">
			{isExpanded ? "Collapse Case Study" : "View Full Case Study"}
			</span>
		</button>

		{/* Animated details section */}
		<AnimatePresence>
			{isExpanded && (
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
