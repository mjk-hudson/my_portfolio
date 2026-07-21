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

//Sketches imports
import MobileSketch from '../assets/neighborgood_sketches/PXL_20220801_174421456.MP.webp';
import MobileSketch2 from '../assets/neighborgood_sketches/PXL_20220801_174609290.webp'
import MobileSketch3 from '../assets/neighborgood_sketches/PXL_20220801_174621091.webp'
import DesignSketchMobile from '../assets/neighborgood_sketches/mobile sketch.png'
import DesignSketchTablet from '../assets/neighborgood_sketches/wireframes/Tablet_Sketch.png'
import DesignSketchDesktop from '../assets/neighborgood_sketches/wireframes/Desktop_Sketch.png'

//Wireframe Image imports
import MobileWireframe from '../assets/neighborgood_sketches/mobile wireframe.png';
import TabletWireframe from '../assets/neighborgood_sketches/wireframes/Tablet_Wireframe.png';
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
        <div className="p-6 md:p-4 gap-6 rounded-lg shadow-[2px_11px_6px_-4px_rgba(136,136,136,0.25)] mt-6 mx-auto max-w-6xl">
            <div className="w-full gap-4">
                <div className="gap-4">
                    <h1 className="text-slate-500 text-left font-semibold text-xl sm:text-lg">Neighborgood.<br/>
                        A Responsive Web Application
                    </h1>
                    <p className="text-left text-slate-400 text-sm sm:text-base">
                        Neighborgood is a social media platform for outreach opportunities that allow individuals and groups find suitable locations for community engagement functions.
                    </p>
                </div>
                <div className="gap-4">
                    <div className="my-6 text-left text-slate-400 gap-2">
                        <h2 className="text-sm sm:text-base gap-1"><b>Project Overview</b></h2>
                        <ul>
                            <li><b>Project Name: Neighborgood</b></li>
                            <li><b>Role: UX/UI Designer</b></li>
                            <li><b>Tools: Figma</b></li>
                            <li><b>Duration: 3 months</b></li>
                        </ul>
                    </div>
                </div>
                {/* Design Process Overview */}
                <div className="text-left text-slate-400 gap-6">
                    <h2 className="gap-1 text-lg sm:text-xl text-slate-400 font-semibold">
                        The design process includes...
                    </h2>
                    <ul className="list-disc my-4">
                        <li>Problem Statement</li>
                        <li>Competitive Analysis</li>
                        <li>User Research</li>
                        <li>Personas</li>
                        <li>Journey Mapping</li>
                        <li>Ideation</li>
                        <li>Wireframing</li>
                        <li>Prototyping</li>
                        <li>User Testing</li>
                        <li>Final Visual Design</li>
                        <li>Next steps</li>
                    </ul>
                    {/* Problem Statement */}
                    <div className="gap-4 p-0">
                    <h1 className="my-1 text-slate-500 font-semibold text-left text-lg sm:text-xl">
                        The Problem
                    </h1>
                    <p className="text-sm sm:text-base p-0 text-slate-400">
                        Neighborgood will allow communities to organize and search for gaps they can designate for community outreach opportunities. The design is a responsive website suitable for most devices and breakpoints. Lead UX designer, UX researcher, Visual and Interaction designer. Responsibilities include (but not limited to) user research, problem defining, wireframing, prototyping, testing, visual and motion design.
                    </p>
                    </div>
            
                    {/* Competitive Analysis */}
                    <div className="gap-4 text-left">
                        <h2 className="mt-4 text-slate-450 font-semibold text-lg sm:text-xl">
                            Competitive Analysis of Web Platforms for Community Space Search
                        </h2>
                        <p className="text-sm sm:text-base text-slate-400">
                         This research covers web-based social media services enabling individuals and groups to search for and utilize open community spaces (e.g., parks, libraries, community centers) for free outreach and social good events. These platforms emphasize event discovery/posting with venue details, are free for basic user/organizer access, prioritize user-friendliness (intuitive interfaces, mobile apps), and support national (U.S.-wide) use. They incorporate social elements like user connections, groups, or sharing to foster community.
                        </p>
                        <h2 className="mt-3 text-sm sm:text-base">
                            Key Features Analyzed:
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
                    <h2 className="text-left text-slate-400 font-semibold text-base sm:text-lg">
                        Competitive Analysis Insights
                    </h2>
                    <p className="text-sm sm:text-base text-left text-slate-400">
                        After conducting a competitive analysis of existing platforms that facilitate community engagement and event planning, it was evident that there was a gap in the market for a user-friendly platform specifically focused on helping users find and reserve spaces for community outreach activities. Many existing solutions were either too complex or lacked the necessary features to effectively serve this purpose.
                    </p>
                    </div>
                    {/*User Research*/}
                    {/* Persona 1: Barbara Goode */}
                    <div className="grid-cols-1 sm:grid-cols-2 gap-4">
                    <h1 className="my-1 text-slate-500 font-semibold text-lg sm:text-xl">
                        User Research
                    </h1>
                    <div className="gap-4 grid grid-cols-1">
                    <h2 className=" text-slate-400 font-semibold text-base sm:text-lg">Target</h2>
                    <p className="text-sm sm:text-base text-slate-400">
                        The target audience are community organizers, non-profit organizations, local government agencies, and individuals looking to host community events for social good. The platform aims to facilitate the process of finding and reserving spaces for various community activities and events, promoting social engagement and collaboration.
                    </p>
                    <div className="gap-4 grid grid-cols-1 items-start sm:gap-6">
                    <div className="">
                        <p className="font-bold text-slate-400">Barbara Goode</p>
                        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                        Age: 77<br/>
                        Education: High School Graduate<br/>
                        Occupation: Retired horticulturalist<br/>
                        Family: 2 feisty cats 😹<br/>
                        Hometown: Savannah, GA.<br/>
                        </p>
                    </div>
                    <div className="gap-y-4">
                    <img src={Barbara} alt="Barbara Goode Image" className="w-full max-w-sm h-auto rounded-lg" />
                        <p className=" mt-4 text-sm sm:text-base text-slate-400">
                        Barb is a retired horticulturalist who is currently head of events in her communities assisted living facility. She would like a service that would allow her to search and locate adequate and accessible park spaces for her outdoor peer group activities based on a criteria. Including gardening, fitness and social gatherings.
                        </p>
                        <p className="mt-6 text-slate-400 italic font-semibold text-sm sm:text-base">
                            "The local parks are overcrowded. They do not accommodate elderly visitors. The Traffic and pollution are also dangerous for my groups age." -Barb
                        </p>
                    </div>
                    </div>
                    </div>
                    {/* Persona 2: Andres Pacheco */}
                    <div className="mt-6 gap-y-4">
                    <div className="gap-y-2">
                    <p className="font-bold text-slate-400">Andres Pacheco</p>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    Age: 37<br/>
                    Education: College Grad<br/>
                    Hometown: Salem, Oregon<br/>
                    Family: Girlfriend, 2 dogs<br/>
                    Occupation: Survivalist Trainer<br/>
                    </p>
                    </div>
                    <img src={Andres} alt="Andres Pacheco Image" className="my-4 w-full max-w-sm h-auto rounded-lg object-cover" />
                    </div>
                    <div className=" gap-y-4">
                        <p className=" my-4 text-sm sm:text-base text-slate-400">
                        Andres, his girlfriend and dog enjoy being outdoors. As a survivalist and nature educator, Andres enjoys immersing the youth in his community into as much wilderness as possible for better hands on survival training, teaching them about flora and fauna.
                        </p>
                        <p className="my-4 text-slate-400 italic font-semibold text-sm sm:text-base">
                        “I’d like to give my students in my community  a well rounded education in nature, but I can’t find adequate places.” -Andres
                        </p>
                    </div>
            
                    {/* Journey Mapping */}
                    <div className="gap-y-6">
                    <h2 className="font-semibold text-lg sm:text-xl text-slate-400">
                        Journey Mapping
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base">To better understand the user experience and identify pain points, a journey map was created outlining the typical steps a user would take when searching for and reserving a community space. This map highlighted key touchpoints, emotions, and potential obstacles that users might encounter throughout their journey.
                    </p>
                    <h2 className="font-semibold mt-6 text-sm sm:text-base text-slate-400">Barbara's Goal</h2>
                    <p className="text-slate-400 text-sm sm:text-base">Find locations that are accessible and can accommodate gardening and social spaces for the elderly.</p>
                    <h2 className="font-semibold mt-4 text-slate-400 text-base sm:text-lg">Problem Statement</h2>
                    <p className="text-sm sm:text-base text-slate-400">
                    Accommodations her peer groups access to nature and away from the overcrowding and noise of local parks.
                    Frustrations
                    Overcrowding, turbidity , noise lack of available spaces.
                    </p>
                    <div className='my-6'>
                    <img src={Barbjourney} alt="Barbaras Journey Map" className="w-full h-auto rounded-lg mt-6 object-contain border border-gray-400 shadow-xl" />
                    </div>
                    <h2 className="font-semibold text-base sm:text-lg text-slate-400">Andres' Goal</h2>
                    <p className="text-sm sm:text-base text-slate-400">
                    Find adequate park locations for survival training and environmental education.
                    Frustrations
                    Cannot find suitable locations with biodiversity in order to educate youth in the field.
                    </p>
                    <h2 className="font-semibold text-base sm:text-lg text-slate-400">Problem Statement</h2>
                    <p className="text-sm sm:text-base text-slate-400">Andres is a survivalist who needs nature space to educate the community youth because current public spaces do not have the materials needed to teach his skills.
                    </p>
                    <div>
                    <img src={Andresjourney} alt="Andres Journey Map" className="my-6 w-full h-auto rounded-lg border border-gray-400 shadow-xl" />
                    </div>
                    </div>
                    <div className="gap-y-4">
                    <h1 className="my-1 text-slate-500 font-semibold text-lg sm:text-xl">
                        Ideation
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400">
                        Using the insights gained from user research, journey mapping and a competitive analysis, the next steps involve ideation, wireframing, prototyping, and user testing to refine the design and ensure it effectively meets the needs of the target audience.
                    </p>
                    </div>
                </div>
            </div>
            
            {/*Ideation - Crazy 8's*/}
            <div className="my-4 gap-y-8">
                <h2 className=" text-slate-400 text-left font-semibold text-base sm:text-xl">
                    Early Sketches
                </h2>
                <p className="text-start text-wrap text-slate-400 text-sm sm:text-base">
                    Early sketching was used to progressively iterate design elements in order to maximize as much accessible relevant information as possible on multiple platforms.
                </p>
                <div className="gap-4 sm:grid sm:grid-cols-3 sm:gap-4">
                    <img src={MobileSketch} alt="Early Sketches" className="my-4 w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                    <img src={MobileSketch2} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                    <img src={MobileSketch3} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-400">
                    These sketches helped to explore different solutions and options for user interface elements, allowing for quick iteration and refinement of ideas before moving on to more detailed wireframes and prototypes.
                    </p>

                    {/*Initial Design Iterations and solutions*/}
                    <h2 className="my-2 text-start text-slate-400 font-semibold text-lg sm:text-xl">First Design Iterations</h2>
                    <p className="text-sm sm:text-base text-slate-400">
                        The idea here is to design a product/service that will allow social networking for the user to find people, groups and adequate open space locations(or potential spaces) after a number of choices are made to get as close to an ideal location as possible(where available) and so initially I thought using a map application style interaction as the most familiar interface for location and travels searches.
                    </p>

                    {/* Initial Design Iterations Images */}
                    <div className="gap-y-4 sm:grid sm:grid-cols-3 sm:gap-4">
                        <img src={DesignSketchMobile} alt="Initial Design Iterations and solutions" className="w-full h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                        <img src={DesignSketchTablet} alt="Initial Design Iterations and solutions" className="w-full h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                        <img src={DesignSketchDesktop} alt="Initial Design Iterations and solutions" className="w-full h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                    </div>

                    {/* Wireframing & Prototyping */}
                    <h2 className="text-start mt-6 text-slate-400 font-semibold text-lg sm:text-xl">
                        Wireframing & Breakpoints
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400">
                        Based on the ideation phase, wireframes were created to outline the structure and layout of the application. These wireframes served as a blueprint for the design, allowing for quick iterations and adjustments based on user feedback. Prototypes were then developed to simulate the user experience and test the functionality of the design.
                    </p>

                    {/*Wireframes Images*/}
                    <div className="my-6 gap-y-4 sm:grid sm:grid-cols-3 sm:gap-4">
                        <img src={MobileWireframe} alt="Wireframes" className="gap-y-12 w-full h-auto max-w-sm rounded-lg border border-gray-400 shadow-xl" />
                        <img src={TabletWireframe} alt="Wireframes" className="gap-y-12 w-full h-auto max-w-sm rounded-lg border border-gray-400 shadow-xl" />
                        <img src={DesktopWireframe} alt="Wireframes" className="gap-y-12 w-full h-auto max-w-sm rounded-lg border border-gray-400 shadow-xl" />
                    </div>

                    {/*Lo-fi Prototyping Images*/}
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-400">
                            These images represent varying (Mobile, Tablet, Desktop) breakpoints demonstrating a user searching for open space locations using the data visualization interaction idiom to view data associated with a location and set of criteria.
                        </p>
                        <div className="gap-y-2">
                            <img src={MobileBreakpoint} alt="Mobile View" className="w-1/4 max-w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                            <p className="mt-10 text-sm sm:text-base font-semibold text-slate-400">
                                Mobile Breakpoint
                            </p>
                        </div>
                    </div>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-400">
                            Users will start with a localized map and begin their contextual search using the “+” action button for either an address, zip code, general municipalities.
                        </p>
                        <div className="gap-y-6">
                            <img src={TabletBreakpoint} alt="Tablet View" className="w-1/2 max-w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                            <p className="mt-10 text-sm sm:text-base font-semibold text-slate-400">
                                Tablet (Portrait) Breakpoint
                            </p>
                        </div>
                    </div>
                    <div className="gap-y-4">
                        <p className="text-sm sm:text-base text-slate-400">
                            Once a location is chosen the user is given filters to use in order to narrows the results to more relevant locations that will meet the users needs.
                        </p>
                        <div className="gap-y-4">
                            <img src={DesktopBreakpoint} alt="Desktop View" className="w-full max-w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                            <p className="mt-10 text-sm sm:text-base font-semibold text-slate-400">
                                Desktop Breakpoint
                            </p>
                        </div>
                    </div>
                    {/* User Testing and Usability Studies */}
                    <h1 className="text-start my-1 text-slate-500 font-semibold text-lg sm:text-xl">
                        Usability Studies & User Testing
                    </h1>
                    <h2 className="text-start text-slate-400 font-semibold text-base sm:text-lg">
                        Study Type: Unmoderated Usability Study Location: Remote Participants: 7 Length: 30 - 60 minutes
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400">
                        Usability studies and user testing were conducted to gather feedback on the prototypes and identify areas for improvement. Participants were asked to complete specific tasks using the prototypes, and their interactions were observed and recorded. Feedback was collected through surveys and interviews to understand user satisfaction and identify pain points.
                    </p>
                    <h2 className="text-start text-slate-400 font-semibold text-base sm:text-lg">
                        Usability Study Insights
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400">
                        More data, specifically related to crime, zoning, environmental and more detailed demographic data of the neighborhoods and communities of these locations.
                        Users wanted options that filtered more versatile locations that allow more ideas and different events for the locations.<br/>
                        Next step information and guides that provide information on how processes that will help them secure these spaces for their purposes, as well as allowing communities to organize and participate
                    </p>
                    <ul className="text-start text-slate-400 list-decimal gap-y-6 ml-6 text-sm sm:text-base">
                        <p className="text-start text-slate-400 font-semibold">Refining the Design</p>
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
                    <h1 className="text-start gap-y-1 text-slate-500 font-semibold text-lg sm:text-xl">
                        Mock-Ups
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 font-semibold">
                        Mobile Breakpoint: Iphone 14 Pro
                    </p>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-400">
                            The initial mock-ups used a navigation style interaction design with a localized map and an F.A.B. as the entry point for finding new places right from the homepage.<br />
                            Initial Designs
                        </p>
                    </div>
                    
                    <div className="gap-y-6">
                        <p className="mt-4 text-sm sm:text-base text-slate-400">
                        The Final mock-up provides an introduction and brief explanation to the product and service as well as any available local places, groups or initiatives on the homepage as well as providing a menu for additional features, services and information.<br/>
                        Final Designs
                        </p>
                        <img src={MobileFinal} alt="Mobile Final Design" className="my-6 w-full max-w-xs h-auto rounded-4xl mt-6 border border-gray-400 shadow-xl" />
                    </div>
                    {/* Tablet Mock-Ups */}
                    <p className="my-2 text-sm sm:text-base text-slate-400 font-semibold">
                        Tablet Breakpoint: iPad Pro 12.9"
                    </p>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-400">
                            Environmental information is gathered and added from databases. This additional information is identified through labeled icons.
                        </p>
                    </div>
                    <div className="gap-y-6">
                        <p className="mt-2 text-sm sm:text-base text-slate-400">
                            Additional information includes links local zoning, demographic, weather databases.
                        </p>
                        <img src={TabletFinal} alt="Tablet Final Design" className="w-full max-w-xl h-auto rounded-4xl my-6 border border-gray-400 shadow-xl" />
                    </div>
                    {/* Desktop Mock-Ups */}
                    <p className="my-4 text-sm sm:text-base text-slate-400 font-semibold">
                        Desktop Breakpoint: Macbook Pro 16"
                    </p>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-400">
                            The initial mock-ups used a navigation style interaction design with a localized map and an F.A.B. as the entry point for finding new places right from the homepage.<br/>
                            Initial Designs
                        </p>
                    </div>
                    <div className="gap-y-6">
                        <p className="text-sm sm:text-base text-slate-400">
                        The Final mock-up provides an introduction and brief explanation to the product and service as well as any available local places, groups or initiatives on the homepage as well as providing a menu for additional features, services and information.<br/>
                        Final Designs
                        </p>
                        <img src={DesktopFinal} alt="Desktop Final Design" className="w-full max-w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                    </div>
                    <h1 className="my-6 text-start gap-y-1 text-slate-500 font-semibold text-lg sm:text-xl">
                        Going Forward
                    </h1>
                    <h2 className="text-start text-slate-400 font-semibold text-base sm:text-lg">
                        Take Aways & Impact
                    </h2>
                    <p className="text-sm sm:text-base text-slate-400">
                        Updates made to the design after user feedback improved overall usability of the website. Users where able to search and find results that were closer to the results they were expecting from this type of service.
                        What was learned?
                        With this product iteration having a larger assortment of options to choose from each category of questions made the service more inclusive for a wider range of public space scenarios. Among those choices are accessibility considerations, amenities etc. were appreciated and gave users more complete and narrow search results when looking for public space locations
                    </p>
                    <h2 className="my-4 text-start text-slate-400 font-semibold text-base sm:text-lg">
                        Next Steps
                    </h2>
                    <ul className="text-start text-slate-400 list-decimal gap-y-4 ml-6 text-sm sm:text-base">
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
                    <h1 className="gap-y-1 text-slate-500 font-semibold text-lg sm:text-xl">
                        Thank You!
                    </h1>
            {/* End of Project Content */}
            </div>
            </div>
        </div>
    );
}