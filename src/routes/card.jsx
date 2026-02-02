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
import ProjectDetails from "./ProjectDetails.jsx";
import "./card.css";

export default function Card()
{	const [isExpanded, setIsExpanded] = useState(false);
	
	const toggleExpand = () => {
		setIsExpanded(prev => !prev);
	};

	return( 	
		<div className="p-10 gap-x-16 gap-y-6 bg-neutral-100 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] outline outline-2px outline-zinc-500/40 mt-12 overflow-hidden">

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Neighborgood Platform image"
				className="w-full h-auto rounded-lg"/>

    		<div>      			
						{/*--project Title --*/}
						<h1 className='text-gray-800 text-left text-2xl font-bold'>Case Study: Neighborgood
						</h1>
							{/* Project description */}
            				<p>Neighborgood helps you make a mark in your community even if you're not sure where to start? Our new webservice makes it easy to find local areas perfect for creating community hubs, hosting outreach events, and volunteering. With just a few clicks, you'll be able to discover the best spots in your area to bring people together and make a positive impact on your community. ➡️
							</p>      			
			</div>

			{/*--Platform info graphic "info"--*/}
			<div className=" p-4 justify-center flex row-span-1 gap-2 bg-orange-500 rounded-lg">

				<div className="">
					<h2 className=" text-neutral-100 text-base">Platforms</h2>
				</div>
				
				{/*-- Icons --*/}
				<div className="flex row-span-1 gap-2">
					<img src={desktopIcon}
					alt="Desktop"/>
					<p className="text-neutral-100 mt-2 text-xs">Desktop</p>
				</div>

				<div className="flex row-span-1 gap-2">
					<img src={tabletIcon}
					alt="Tablet"/>
					<p className="text-neutral-100 mt-2 text-xs">Tablet</p>
				</div>

				<div className="flex row-span-1 gap-2">
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
	);
}
