import React from "react";
import polygonSVG from '../assets/Polygon 1.svg';
import heroImage from '../assets/source/tesla-model-s-2019.jpg'
import openIcon from '../assets/fluent_open-24-filled.svg';
import "./card.css";
function Card()
{
	return( 	
		<div className="w-2xl h-full p-4 gap-4 grid grid-cols-[3fr_1fr] rows-2 bg-neutral-100 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] outline outline-offset-1px outline-zinc-500/40">

			{/*--Hero Container--*/}
    		<div className="rounded-lg font-[Jetbrains Mono] text-left text-gray-700 relative overflow-visible">
				<div className="absolute inset-0 rounded-lg shadow-[inset_4px_4px_7px_-2px_rgba(0,0,0,0.25)] bg-transparent pointer-events-none" />

			{/*--project number --*/}
			<p className="z-10 absolute top-2 left-2 font-[Jetbrains Mono] text-left text-gray-800">01</p>

			{/*--Hero image--*/}
			<img src={heroImage} 
				alt="Tesla Model S 2019"
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
    		<div className= "flex items-stretch">
      			<div className="self-end">
        			<div className="">
          				<ul className="m-2 text-left list-disc text-sm text-gray-600">
            				<li>Project Chimera enhances engagement with a simpler interface, targeting 20% higher satisfaction and 15% faster task completion. See research and design details.</li>
          				</ul>
        			</div>
      			</div>
			</div>
			{/*button */}
            <div className="relative hover:scale-105">
				<img src={openIcon} className="w-8 h-8 absolute bottom-6 right-4 animate-pulse" 
				alt="Open button"/>
				<img src={polygonSVG} className="w-full h-full" 
				alt="Open button"/>
			</div>
		</div>
    );
}
export default Card;