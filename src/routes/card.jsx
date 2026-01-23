import React from "react";
import heroImage from '../assets/V2Mockup.png'
import openIcon from '../assets/fluent_open-24-filled.svg';
import { Link, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
//images imports
import desktopIcon from '../assets/meteor-icons_desktop.svg';
import tabletIcon from '../assets/solar_tablet-outline.svg';
import phoneIcon from '../assets/proicons_phone.svg';
import "./card.css";

export default function Card()
{	const location = useLocation();

	return( 	
		<div className="p-10 gap-x-16 gap-y-6 bg-neutral-100/75 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] outline outline-2px outline-zinc-500/40 mt-12">

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Neighborgood Platform image"
				className="w-full h-auto rounded-lg"/>

    		<div className= "">
      			<div className="">
        			<div className="font-medium">

						{/*--project Title --*/}
						<h1 className='text-gray-800 text-2xl font-bold'>Case Study: Neighborgood
						</h1>
							{/* Project description */}
            				<p>Neighborgood helps you make a mark in your community even if you're not sure where to start? Our new webservice makes it easy to find local areas perfect for creating community hubs, hosting outreach events, and volunteering. With just a few clicks, you'll be able to discover the best spots in your area to bring people together and make a positive impact on your community. ➡️
							</p>
        			</div>
      			</div>
			</div>

			{/*--Platform info div "info"--*/}
			<div className="mt-8 p-6 bg-orange-500 rounded-lg">

				<h2 className="mb-6 text-neutral-100 text-base">Platforms</h2>
				{/*-- Icons --*/}
					<img src={desktopIcon}
					className ="block mx-auto"
					alt="Desktop"/>
					<p className="text-neutral-100 mt-2 text-xs">Desktop</p>

					<img src={tabletIcon}
					className="block mx-auto"
					alt="Tablet"/>
					<p className="text-neutral-100 mt-2 text-xs">Tablet</p>

					<img src={phoneIcon}
					className="block mx-auto"
					alt="Mobile"/>
					<p className="text-neutral-100 mt-2 text-xs">Mobile</p>

			</div>

			{/*button */}
			<div className="">
				<Link 
				to="FirstProjectComponent">
				
				<img 
				src={openIcon} 
				className="animate-pulse" 
				alt="Open Case Study"
				/>

				</Link>
			</div>
			{/*-- Nested route for project component --*/}
			<div key={location.pathname}>
					{/*-- Outlet for nested routes --*/}
					<Outlet />
			</div>
		</div>
    );
}
