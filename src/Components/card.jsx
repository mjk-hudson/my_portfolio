import React from "react";
import polygonSVG from '../assets/Polygon 1.svg';
import heroImage from '../assets/V2Mockup.png'
import openIcon from '../assets/fluent_open-24-filled.svg';
import "./card.css";
function Card()
{
	return( 	
		<div className="w-4xl h-2xl p-8 gap-x-16 gap-y-4 grid grid-cols-[3fr_1fr] rows-2 bg-neutral-100 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] outline outline-offset-1px outline-zinc-500/40">

			{/*--Hero Container--*/}
    		<div className="rounded-lg font-[Jetbrains Mono] text-left text-gray-700 relative overflow-visible">
				<div className="absolute inset-0 rounded-lg shadow-[inset_4px_4px_7px_-2px_rgba(0,0,0,0.25)] bg-transparent pointer-events-none" />

			{/*--project number --*/}
			<p className="z-10 absolute top-2 left-2 font-[Jetbrains Mono] text-left text-gray-600 text-xl">01.</p>

			{/*--project Title --*/}

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Neighborgood Platforms image"
				className="w-full h-full block rounded-lg"/>

			</div>

			{/*--Platform info div "info"--*/}
			<div className="p-8 bg-blue-500 rounded-lg flex flex-col items-center">
					<img src='src/assets/meteor-icons_desktop.svg' className ="" alt=""/>
					<p className="text-neutral-100 mt-2 text-xs">Desktop</p>
					<img src='src/assets/solar_tablet-outline.svg'className="" alt=""/>
					<p className="text-neutral-100 mt-2 text-xs">Tablet</p>
					<img src='src/assets/proicons_phone.svg'className="" alt=""/>
					<p className="text-neutral-100 mt-2 text-xs">Mobile</p>
					<h2 className="text-neutral-100 mt-8 text-base">Platforms</h2>
			</div>
				{/* Project description */}
    		<div className= "flex items-start">
      			<div className="self-end">
        			<div className="justify-items-start font-medium">
						<p className='text-gray-800 text-2xl'>Case Study: Neighborgood</p>
          				<ul className="m-2 text-left list-disc text-sm text-gray-600">
            				<li>Neighborgood helps you make a mark in your community even if you're not sure where to start? Our new webservice makes it easy to find local areas perfect for creating community hubs, hosting outreach events, and volunteering. With just a few clicks, you'll be able to discover the best spots in your area to bring people together and make a positive impact on your community. ➡️</li>
          				</ul>
        			</div>
      			</div>
			</div>
			{/*button */}
            <div className="relative hover:scale-105">
				<img src={openIcon} className="w-8 h-8 absolute bottom-6 right-6 animate-bounce z-1" 
				alt="Open button"/>
				<img src={polygonSVG} className="size-28 absolute right-0 bottom-0" 
				alt="Open button"/>
			</div>
		</div>
    );
}
export default Card;