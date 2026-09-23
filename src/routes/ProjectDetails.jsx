import React from "react";
import './projectDetails.css';
import { Link } from "react-router-dom";
import Nbgca from '../assets/nbgca.html?raw';

import Barbjourney from '../assets/Barbara-Journey-Map.jpg';
import Andresjourney from '../assets/Andres-Journey-Map.jpg';
import { motion } from 'motion/react';
import { useLocation } from "react-router-dom";
import storyboard from '../assets/Neighborgood_storyboard.png';
import coreProblems from '../assets/Neighborgood_core_problem.png';
import userPainPoints from '../assets/Neighborgood_user_pain_points.png';
import howMightWe from '../assets/Neighborgood_how_mw.png';
import MobileCodeString from '../components/MobileCodeString.jsx?raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

//Rendered UI components
import MobileCode from '../components/MobileCodeString.jsx';


//Sketches imports
import MobileSketch from '../assets/neighborgood_sketches/PXL_20220801_174421456.MP.webp';
import MobileSketch2 from '../assets/neighborgood_sketches/PXL_20220801_174609290.webp'
import MobileSketch3 from '../assets/neighborgood_sketches/PXL_20220801_174621091.webp'
import DesignSketchMobile from '../assets/neighborgood_sketches/mobile sketch.png'
import DesignSketchTablet from '../assets/Tablet_Sketch.png'
import DesignSketchDesktop from '../assets/neighborgood_sketches/wireframes/Desktop_Sketch.png'

//Wireframe Image imports
import MobileWireframe from '../assets/mobile_wireframe-Amenity_Taggin.png';
import TabletWireframe from '../assets/Tablet_Wireframe.png';
import DesktopWireframe from '../assets/neighborgood_sketches/wireframes/Desktop_Wireframe.png';

//Breakpoint Image imports
import MobileBreakpoint from '../assets/neighborgood_prototypes/home_mobile.webp';
import TabletBreakpoint from '../assets/neighborgood_prototypes/home_Tablet.webp';
import DesktopBreakpoint from '../assets/neighborgood_prototypes/home_Desktop.webp';

//Final Design Image imports
import DesktopFinal from '../assets/Directory-Leaders.gif'; 
import TabletFinal from '../assets/Tablet-Recommendations.gif';
import MobileFinal from '../assets/Events-Mobile-Final.gif';


export default function ProjectDetails() {
    return (
        <>
        <div className="p-6 md:p-4 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">
            <div className="w-full gap-4">
                <div className="gap-4">
                    <h1 className="text-slate-800 text-left font-semibold text-xl sm:text-lg">Neighborgood.
                    </h1>
                    <h2 className="text-left text-slate-700 font-semibold sm:text-xl">
                    The Category
                    </h2>
                    <p className="text-left text-slate-600 text-sm sm:text-base">
                        Civic Technology & Urban Community Space Sourcing.
                    </p>
                </div>
                <div className="gap-4">
                </div>
                    {/* Problem Statement */}
                    <div className="gap-4 p-0">
                    <h2 className="my-1 text-slate-700 font-semibold text-left text-lg sm:text-xl">
                        The Problem
                    </h2>
                    <p className="text-sm sm:text-base p-0 text-slate-600">
                        Local residents and community organizers struggle to navigate complex, fragmented municipal zoning data to identify usable locations for community hubs, leaving urban spaces underutilized and neighborhood initiatives stalled.
                    </p>
                    </div>
            
                    {/* The Methodology */}
                    <div className="gap-4 text-left">
                        <h2  className="my-1 text-slate-700 font-semibold sm:text-xl">
                            The Methodology
                        </h2>
                        <h3 className="text-left font-semibold text-slate-700">
                            The Empathy Phase
                        </h3>
                        <p className="text-sm sm:text-base text-slate-600">
                         Conducted storyboarding to understand the friction surrounding open-space location discovery. Used competitive analysis to identify gaps in existing solutions.Uncovered that community leaders needed direct, transparent access to zoning parameters without the bloat of traditional municipal databases.
                        </p>
                        <h3 className="mt-3 text-sm sm:text-base text-slate-700">
                            User Storyboard
                        </h3>
                        <div>
                            <img src={storyboard} alt="Neighborgood Storyboard" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                        </div>
                        <h2 className="mt-3 text-sm sm:text-base text-slate-700">
                            Competitive Analysis: Features & Differentiators
                        </h2>
                        <ul className="list-disc mt-1 text-sm sm:text-base">
            
                            <li>
                                Search Posting for Spaces: Ability to find topost events with venue info (e.g., free public spaces).
                            </li>
                            <li>
                                Free Usage:No cost for core features like searching/posting free events.
                            </li>
                            <li>
                                User-Friendliness: Simple navigation, mobile support, quick setup.
                            </li>
                            <li>
                            National Coverage: U.S.-wide availability.
                            </li>
                            <li>
                                Social Elements:Profiles, groups, sharing for networking.
                            </li>
                            <li>
                                Social Good Fit:Emphasis on outreach, volunteering, activism.
                            </li>
                            <li>
                                Pros/Cons: High-level strengths/weaknesses for competitive edge.
                            </li>
                        </ul>
                        {/*Competitive Analysis Spreadsheet*/}
                        <div className="my-8 w-full border border-gray-300 rounded-xl shadow-lg overflow-hidden">
                            <div className="relative w-full pt-[56.25%]"> {/* 16:9 – adjust ratio as needed */}
                                <iframe
                                srcDoc={Nbgca}           // ← use srcDoc instead of dangerouslySetInnerHTML
                                title="Embedded content"
                                className="absolute inset-0 w-full h-full border-0"
                                sandbox="allow-scripts allow-same-origin" // adjust sandbox carefully
                                loading="lazy"
                                />
                            </div>
                        </div>
                    </div>            
                    <div className="my-4 p-0">
                    <h2 className="text-left text-slate-700 font-semibold text-base sm:text-lg">
                        Competitive Analysis Insights
                    </h2>
                    <p className="text-sm sm:text-base text-left text-slate-600">
                        After conducting a competitive analysis of existing platforms that facilitate community engagement and event planning, it was evident that there was a gap in the market for a user-friendly platform specifically focused on helping users find and reserve spaces for community outreach activities. Many existing solutions were either too complex or lacked the necessary features to effectively serve this purpose.
                    </p>
                    </div>
                    <div>
                        <h2 className="text-left text-slate-700 font-semibold text-base sm:text-lg">
                            The Define Phase
                        </h2>
                        <p className="text-sm sm:text-base text-left text-slate-600">
                            I Managed the project using the Lean UX Framework to explore the core problem even further and rapidly translate user pain points into strict architectural requirements within a 3-month timeline, prioritizing open-space mapping and zoning clarity solutions using how might we scenarios before visual design began.
                        </p>
                    </div>
                    <div className="my-4 p-0">
                        <h3 className="text-left text-slate-700 font-semibold text-base sm:text-lg">
                            The Core Problem
                        </h3>
                        <img src={coreProblems} alt="Core Problem" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    </div>

                    <div className="my-4 p-0">
                        <h3 className="text-left text-slate-700 font-semibold text-base sm:text-lg">
                            User Pain Points
                        </h3>
                        <img src={userPainPoints} alt="User Pain Points" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    </div>

                    <div className="my-4 p-0">
                        <h3 className="text-left text-slate-700 font-semibold text-base sm:text-lg">
                            How Might We...?
                        </h3>
                        <img src={howMightWe} alt="How Might We" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    </div>

                    <div className="my-4 text-left text-slate-700 text-base sm:text-lg">
                        <h1 className="mt-6 text-left text-slate-700 font-semibold text-base sm:text-lg">The Execution Phase</h1>
                        <h2 className="text-left text-slate-700 font-semibold text-base sm:text-xl">Design Ideation & Strategy</h2>
                        <p className="text-sm sm:text-base text-slate-600">
                            I completed user journeys and transformed pain points and civic data into an approachable interface. Constructed wireframes and high-fidelity prototypes in Figma to simplify complex spatial information.
                        </p>
                        <h3>User Journeys</h3>
                        <div className="mt-4 w-full max-h-[70vh] overflow-y-auto border border-gray-600 rounded-lg shadow-xl bg-slate-50">
                            <img src={Barbjourney} alt="User Journey" className="w-full h-auto block" />
                        </div>
                        <div className="mt-4 w-full max-h-[70vh] overflow-y-auto border border-gray-600 rounded-lg shadow-xl bg-slate-50">
                            <img src={Andresjourney} alt="User Journey" className="w-full h-auto" />
                        </div>
                    </div>

                    <div className="my-4 text-left text-slate-700 text-base sm:text-lg">
                        <h3>Sketches</h3>
                        <img src={DesignSketchMobile} alt="Sketches" className="w-1/3 h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                        <img src={DesignSketchTablet} alt="Sketches" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                        <img src={DesignSketchDesktop} alt="Sketches" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    </div>

                    <div className="my-4 text-left text-slate-700 text-base sm:text-lg">
                        <h3>Wireframes</h3>
                        <img src={MobileWireframe} alt="Wireframes" className="w-1/3 h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                        <img src={TabletWireframe} alt="Wireframes" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                        <img src={DesktopWireframe} alt="Wireframes" className="w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    </div>
                    <div className="gap-y-6">
                        <h3 className="text-left text-slate-600">
                            Low-Fidelity Mock-ups
                        </h3>
                        <div className="gap-y-2">
                            <img src={MobileBreakpoint} alt="Mobile View" className="w-1/4 max-w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />

                            <h3 className="text-left mt-10 text-sm sm:text-base text-slate-600">
                                Mobile Breakpoint
                            </h3>
                        </div>
                    </div>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                            Users have the option to start with a localized map and begin their contextual search using the “+” CTA for an address, zip code, or general municipality information.
                        </p>
                        <div className="gap-y-6">
                            <img src={TabletBreakpoint} alt="Tablet View" className="w-1/2 max-w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                            <h3 className="text-left mt-10 sm:text-base font-semibold text-slate-600">
                                Tablet (Portrait) Breakpoint
                            </h3>
                        </div>
                    </div>
                    <div className="gap-y-4">
                        <p className="text-sm sm:text-base text-slate-600">
                            Once a location is chosen the user is given filters to use in order to narrows the results to more relevant locations that will meet the users needs.
                        </p>
                        <div className="gap-y-4">
                            <img src={DesktopBreakpoint} alt="Desktop View" className="w-full max-w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                            <h3 className="text-left mt-10 text-sm sm:text-base font-semibold text-slate-600">
                                Desktop Breakpoint
                            </h3>
                        </div>

            </div>
            <div className="gap-y-4">
                    
                    <h2 className="text-left my-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        Technical Architecture
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Developed a responsive web application concept built strictly with pure JavaScript, Tailwind CSS and React JS via Vite, keeping the front-end architecture agile and lightweight for fast data filtering without relying on TypeScript. The code below is an example of the mobile breakpoint code for the Neighborgood project, demonstrating the use of React components and Tailwind CSS for styling.
                    </p>
                    {/* Scrollable code container */}
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
                            {MobileCodeString}
                        </SyntaxHighlighter>
                    </div>
            </div>
        </div>
            <div className="my-4 gap-y-8">
                    </div>
                    {/* Mock-Ups */}
                    <h2 className="text-left text-sm sm:text-base text-slate-600 font-semibold">
                        Mobile Breakpoint: iPhone 14 Pro
                    </h2>
                    <div className="gap-y-6">
                    </div>
                    
                    <div className="gap-y-6">
                        <p className="mt-4 text-sm sm:text-base text-slate-600">
                        The calendar view provides a clear overview of upcoming events and deadlines for locations that users have already solicited and reserved.<br/>
                        Final Designs
                        </p>
                        
                        <div className="w-full flex justify-center items-center overflow-x-auto py-6">
                          <div className="shrink-0 min-w-[384px]">
                            <MobileCode />
                          </div>
                        </div>
                    </div>
                    {/* Tablet Mock-Ups */}
                    <p className="my-2 text-sm sm:text-base text-slate-600 font-semibold">
                        Tablet Breakpoint: iPad Pro 12.9"
                    </p>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                            Environmental information is gathered and added from databases. This additional information is identified through labeled icons.
                        </p>
                    </div>
                    <div className="gap-y-6">
                        <p className="mt-2 text-sm sm:text-base text-slate-600">
                            Additional information includes links local zoning, demographic, weather databases.
                        </p>
                        <img src={TabletFinal} alt="Tablet Final Design" className="w-full max-w-xl h-auto rounded-4xl my-6 border border-gray-600 shadow-xl" />
                    </div>
                    {/* Desktop Mock-Ups */}
                    <p className="my-4 text-sm sm:text-base text-slate-600 font-semibold">
                        Desktop Breakpoint: Macbook Pro 16"
                    </p>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                            The initial mock-ups used a navigation style interaction design with a localized map and an F.A.B. as the entry point for finding new places right from the homepage.<br/>
                            Initial Designs
                        </p>
                    </div>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                        The Final mock-up provides an introduction and brief explanation to the product and service as well as any available local places, groups or initiatives on the homepage as well as providing a menu for additional features, services and information.<br/>
                        Final Designs
                        </p>
                        <img src={DesktopFinal} alt="Desktop Final Design" className="w-full max-w-full h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    </div>
                    <h2 className="mt-6 text-start gap-y-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        The Outcome
                    </h2>
                    <p className="text-start text-slate-700 text-base sm:text-lg">
                        Iterative A/B usability testing demonstrated a 30% increase in Net Promoter Score (NPS) while validating market demand by capturing over 500 user registrations during early testing.
                    </p>
            {/* End of Project Content */}
            </div>
        </>
        );
}