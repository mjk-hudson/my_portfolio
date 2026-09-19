import React from "react";
import './projectDetails.css';
import { Link } from "react-router-dom";
import Nbgca from '../assets/nbgca.html?raw';
import Barbara from '../assets/danie-franco-l9I93gZKTG4-unsplash.webp';
import Andres from '../assets/andres-molina-J7sCh_kM9kQ-unsplash+thumbnail.webp';
import Barbjourney from '../assets/Barbara-Journey-Map.jpg';
import Andresjourney from '../assets/Andres-Journey-Map.jpg';
import { motion } from 'motion/react';
import { useLocation } from "react-router-dom";
import storyboard from '../assets/Neighborgood_storyboard.png';
import coreProblems from '../assets/Neighborgood_core_problem.png';
import userPainPoints from '../assets/Neighborgood_user_pain_points.png';
import howMightWe from '../assets/Neighborgood_how_mw.png';

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
        <div className="p-6 md:p-4 gap-6 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">
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
                        <img src={Barbjourney} alt="User Journey" className="block w-full h-auto block rounded-lg mt-6 border border-gray-600 shadow-xl" />
                        <img src={Andresjourney} alt="User Journey" className="block w-full h-auto block rounded-lg mt-6 border border-gray-600 shadow-xl" />
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
            </div>
            <div className="gap-y-4">
                    
                    <h1 className="my-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        Ideation
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600">
                        Using the insights gained from user research, journey mapping and a competitive analysis, the next steps involve ideation, wireframing, prototyping, and user testing to refine the design and ensure it effectively meets the needs of the target audience.
                    </p>
            </div>
        </div>
            {/*Ideation - Crazy 8's*/}
            <div className="my-4 gap-y-8">
                <h2 className="text-slate-700 text-left font-semibold text-base sm:text-xl">
                    Early Sketches
                </h2>
                <p className="text-start text-wrap text-slate-600 text-sm sm:text-base">
                    Early sketching was used to progressively iterate design elements in order to maximize as much accessible relevant information as possible on multiple platforms.
                </p>
                <div className="gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <img src={MobileSketch} alt="Early Sketches" className="my-4 w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    <img src={MobileSketch2} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                    <img src={MobileSketch3} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                </div>
                    <p className="text-sm sm:text-base text-slate-600">
                    These sketches helped to explore different solutions and options for user interface elements, allowing for quick iteration and refinement of ideas before moving on to more detailed wireframes and prototypes.
                    </p>

                    {/*Initial Design Iterations and solutions*/}
                    <h2 className="my-2 text-start text-slate-700 font-semibold text-lg sm:text-xl">First Design Iterations</h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        The idea here is to design a product/service that will allow social networking for the user to find people, groups and adequate open space locations(or potential spaces) after a number of choices are made to get as close to an ideal location as possible(where available) and so initially I thought using a map application style interaction as the most familiar interface for location and travels searches.
                    </p>

                    {/* Initial Design Iterations Images */}
                    <div className="gap-y-4 sm:grid sm:grid-cols-3 sm:gap-4">
                        <img src={DesignSketchMobile} alt="Initial Design Iterations and solutions" className="w-full h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                        <img src={DesignSketchTablet} alt="Initial Design Iterations and solutions" className="w-full h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                        <img src={DesignSketchDesktop} alt="Initial Design Iterations and solutions" className="w-full h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                    </div>

                    {/* Wireframing & Prototyping */}
                    <h2 className="text-start mt-6 text-slate-700 font-semibold text-lg sm:text-xl">
                        Wireframing & Breakpoints
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Based on the ideation phase, wireframes were created to outline the structure and layout of the application. These wireframes served as a blueprint for the design, allowing for quick iterations and adjustments based on user feedback. Prototypes were then developed to simulate the user experience and test the functionality of the design.
                    </p>

                    {/*Wireframes Images*/}
                    <div className="my-6 gap-y-4 sm:grid sm:grid-cols-3 sm:gap-4">
                        <img src={MobileWireframe} alt="Wireframes" className="gap-y-12 w-full h-auto max-w-sm rounded-lg border border-gray-600 shadow-xl" />
                        <img src={TabletWireframe} alt="Wireframes" className="gap-y-12 w-full h-auto max-w-sm rounded-lg border border-gray-600 shadow-xl" />
                        <img src={DesktopWireframe} alt="Wireframes" className="gap-y-12 w-full h-auto max-w-sm rounded-lg border border-gray-600 shadow-xl" />
                    </div>

                    {/*Lo-fi Prototyping Images*/}
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                            These images represent varying (Mobile, Tablet, Desktop) breakpoints demonstrating a user searching for open space locations using the data visualization interaction idiom to view data associated with a location and set of criteria.
                        </p>
                        <div className="gap-y-2">
                            <img src={MobileBreakpoint} alt="Mobile View" className="w-1/4 max-w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                            <p className="mt-10 text-sm sm:text-base font-semibold text-slate-600">
                                Mobile Breakpoint
                            </p>
                        </div>
                    </div>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                            Users will start with a localized map and begin their contextual search using the “+” action button for either an address, zip code, general municipalities.
                        </p>
                        <div className="gap-y-6">
                            <img src={TabletBreakpoint} alt="Tablet View" className="w-1/2 max-w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                            <p className="mt-10 text-sm sm:text-base font-semibold text-slate-600">
                                Tablet (Portrait) Breakpoint
                            </p>
                        </div>
                    </div>
                    <div className="gap-y-4">
                        <p className="text-sm sm:text-base text-slate-600">
                            Once a location is chosen the user is given filters to use in order to narrows the results to more relevant locations that will meet the users needs.
                        </p>
                        <div className="gap-y-4">
                            <img src={DesktopBreakpoint} alt="Desktop View" className="w-full max-w-sm h-auto rounded-lg mt-6 border border-gray-600 shadow-xl" />
                            <p className="mt-10 text-sm sm:text-base font-semibold text-slate-600">
                                Desktop Breakpoint
                            </p>
                        </div>
                    </div>
                    {/* User Testing and Usability Studies */}
                    <h1 className="text-start my-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        Usability Studies & User Testing
                    </h1>
                    <h2 className="text-start text-slate-700 font-semibold text-base sm:text-lg">
                        Study Type: Unmoderated Usability Study Location: Remote Participants: 7 Length: 30 - 60 minutes
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Usability studies and user testing were conducted to gather feedback on the prototypes and identify areas for improvement. Participants were asked to complete specific tasks using the prototypes, and their interactions were observed and recorded. Feedback was collected through surveys and interviews to understand user satisfaction and identify pain points.
                    </p>
                    <h2 className="text-start text-slate-700 font-semibold text-base sm:text-lg">
                        Usability Study Insights
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        More data, specifically related to crime, zoning, environmental and more detailed demographic data of the neighborhoods and communities of these locations.
                        Users wanted options that filtered more versatile locations that allow more ideas and different events for the locations.<br/>
                        Next step information and guides that provide information on how processes that will help them secure these spaces for their purposes, as well as allowing communities to organize and participate.
                    </p>
                    <ul className="text-start text-slate-600 list-decimal gap-y-6 ml-6 text-sm sm:text-base">
                        <p className="text-start text-slate-600 font-semibold">Refining the Design
                        </p>
                        <li>
                            Mock-Ups
                        </li>
                        <li>
                            High-Fidelity Prototypes
                        </li>
                        <li>
                            Accessibility
                        </li>
                    </ul>
                    {/* Mock-Ups */}
                    <h1 className="text-start gap-y-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        Mock-Ups
                    </h1>
                    <p className="text-sm sm:text-base text-slate-600 font-semibold">
                        Mobile Breakpoint: Iphone 14 Pro
                    </p>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-600">
                            The initial mock-ups used a navigation style interaction design with a localized map and an F.A.B. as the entry point for finding new places right from the homepage.<br />
                            Initial Designs
                        </p>
                    </div>
                    
                    <div className="gap-y-6">
                        <p className="mt-4 text-sm sm:text-base text-slate-600">
                        The Final mock-up provides an introduction and brief explanation to the product and service as well as any available local places, groups or initiatives on the homepage as well as providing a menu for additional features, services and information.<br/>
                        Final Designs
                        </p>
                        <img src={MobileFinal} alt="Mobile Final Design" className="my-6 w-full max-w-xs h-auto rounded-4xl mt-6 border border-gray-600 shadow-xl" />
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
                    <h1 className="my-6 text-start gap-y-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        Going Forward
                    </h1>
                    <h2 className="text-start text-slate-700 font-semibold text-base sm:text-lg">
                        Take Aways & Impact
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Updates made to the design after user feedback improved overall usability of the website. Users where able to search and find results that were closer to the results they were expecting from this type of service.
                        What was learned?
                        With this product iteration having a larger assortment of options to choose from each category of questions made the service more inclusive for a wider range of public space scenarios. Among those choices are accessibility considerations, amenities etc. were appreciated and gave users more complete and narrow search results when looking for public space locations.
                    </p>
                    <h2 className="my-4 text-start text-slate-700 font-semibold text-base sm:text-lg">
                        Next Steps
                    </h2>
                    <ul className="text-start text-slate-600 list-decimal gap-y-4 ml-6 text-sm sm:text-base">
                        <li>
                            Develop a comprehensive onboarding process to guide new users through the platform's features and functionalities.
                        </li>
                        <li>
                            Continue additional redesigns based on user Feedback.
                        </li>
                        <li>
                            Implement advanced filtering options to allow users to further refine their search results based on specific criteria.
                        </li>
                        <li>
                            Explore partnerships with local governments and community organizations to expand the database of available community spaces.
                        </li>
                        <li>
                            I will add more motion design and micro interactions to engage user focus and signal actions.
                        </li>
                        <li>
                            Conduct ongoing user research and usability testing to continuously improve the platform and ensure it meets the evolving needs of its users.
                        </li>
                        <li>
                            Include additional accessibility features to make the site more inclusive for people with disabilities.
                        </li>
                    </ul>
                    <h1 className="gap-y-1 text-slate-800 font-semibold text-lg sm:text-xl">
                        Thank You!
                    </h1>
            {/* End of Project Content */}
            </div>
        </>
        );
}