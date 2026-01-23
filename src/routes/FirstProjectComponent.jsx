import React from "react";
import './FirstProjectComponent.css';
import { Link } from "react-router-dom";
import Nbgca from '../assets/nbgca.html?raw';
import Barbara from '../assets/danie-franco-l9I93gZKTG4-unsplash.webp';
import Andres from '../assets/andres-molina-J7sCh_kM9kQ-unsplash+thumbnail.webp';
import Barbjourney from '../assets/Barbara-Journey-Map.jpg';
import Andresjourney from '../assets/Andres-Journey-map.jpg';
import { motion } from 'motion/react';

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
import { useNavigate } from "react-router-dom";


export default function FirstProjectComponent() {
    // Function to handle the scroll when the link is clicked
    const handleScrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <motion.div
        // 1. Outer Animation: The Dropdown Slide
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}

        className="project-reveal-container">

            <div className="mb-6">

                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }} 
                className="mb-1 text-gray-800 text-left font-semibold text-2xl">Neighborgood.<br/> 
                    A Responsive Web Application
                </motion.h1>

                <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-left text-gray-600">
                    Neighborgood is a social media platform for outreach opportunities that allow individuals and groups find suitable locations for community engagement functions.
                </motion.p>

            </div>
            <div className="mb-6">
                <div className="mb-6 text-left text-gray-700">
                    <h2><b>Project Overview</b></h2>
                    <ul>
                        <li><b>Project Name: Neighborgood</b></li>
                        <li><b>Role: UX/UI Designer</b></li>
                        <li><b>Tools: Figma</b></li>
                        <li><b>Duration: 3 months</b></li>
                    </ul>
                </div>
            </div>

            {/* Design Process Overview */}
            <div className="text-left text-gray-600">
                <h2 className="my-1 text-xl text-gray-900 font-semibold">
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
                <div className="my-10">
                <h1 className="my-1 text-gray-900 font-semibold text-2xl">
                    The Problem
                </h1>
                <p>
                    Neighborgood will allow communities to organize and search for spaces they can designate for community outreach opportunities. The design is a responsive website suitable for most devices and breakpoints. Lead UX designer, UX researcher, Visual and Interaction designer. Responsibilities include (but not limited to) user research, problem defining, wireframing, prototyping, testing, visual and motion design.
                </p>
                </div>
                
                {/* Competitive Analysis */}
                <div>
                    <h2 className="my-1 text-gray-900 font-semibold text-2xl">
                        Competitive Analysis of Web Platforms for Community Space Search
                    </h2>
                    <p>
                     This research covers web-based social media services enabling individuals and groups to search for and utilize open community spaces (e.g., parks, libraries, community centers) for free outreach and social good events. These platforms emphasize event discovery/posting with venue details, are free for basic user/organizer access, prioritize user-friendliness (intuitive interfaces, mobile apps), and support national (U.S.-wide) use. They incorporate social elements like user connections, groups, or sharing to foster community.
                    </p>
                    <h2 className="mt-3">
                        Key Features Analyzed:
                    </h2>
                    <ul className="list-disc mt-1">
                        
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
                    <div className="my-8 overflow-x-auto border border-gray-400 rounded-lg shadow-xl">
                    <div className="inline-block " dangerouslySetInnerHTML={{__html: Nbgca}}></div>
                    </div>
                </div>
                
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold">
                    Competitive Analysis Insights
                </h2>
                <p>
                    After conducting a competitive analysis of existing platforms that facilitate community engagement and event planning, it was evident that there was a gap in the market for a user-friendly platform specifically focused on helping users find and reserve spaces for community outreach activities. Many existing solutions were either too complex or lacked the necessary features to effectively serve this purpose.
                </p>
                </div>

                {/*User Research*/}

                {/* Persona 1: Barbara Goode */}
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold text-2xl">
                    User Research
                </h2>
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold">Target</h2>
                <p>
                    The target audience are community organizers, non-profit organizations, local government agencies, and individuals looking to host community events for social good. The platform aims to facilitate the process of finding and reserving spaces for various community activities and events, promoting social engagement and collaboration.
                </p>
                <div className="my-4 gap-6">

                <p className="font-bold mb-1 text-gray-900">Barbara Goode</p>

                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Age: 77<br/>
                Education: High School<br/>
                Occupation: Retired horticulturalist<br/>
                Family: 2 feisty cats 😹<br/>
                Hometown: Savannah, GA.<br/>
                </p>

                <img src={Barbara} alt="Barbara Goode Image" className="w-48 h-auto rounded-lg" />

                <p className=" mt-4"> 
                Barb is a retired horticulturalist who is currently head of events in her communities assisted living facility. She would like a service that would allow her to search and locate adequate and accessible park spaces for her outdoor peer group activities based on a criteria. Including gardening, fitness and social gatherings.
                </p>

                <p className="italic font-semibold mt-4">
                    "The local parks are overcrowded. They do not accommodate elderly visitors. The Traffic and pollution are also dangerous for my groups age." -Barb
                </p>

                </div>
                </div>

                {/* Persona 2: Andres Pacheco */}
                <div className="my-4">
                <div className="mt-6">
                <p className="font-bold mb-1 text-gray-900">Andres Pacheco</p>
                <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                Age: 37<br/>
                Education: College Grad<br/>
                Hometown: Salem, Oregon<br/>
                Family: Girlfriend, 2 dogs<br/>
                Occupation: Survivalist Trainer<br/>
                </p>

                </div>
                <img src={Andres} alt="Andres Pacheco Image" className="w-48 h-64 rounded-lg object-cover" />
                </div>
                <p className="mt-4"> 
                Andres, his girlfriend and dog enjoy being outdoors. As a survivalist and nature educator, Andres enjoys immersing the youth in his community into as much wilderness as possible for better hands on survival training, teaching them about flora and fauna.
                </p> 
                              
                <p className="italic font-semibold mt-4">
                “I’d like to give my students in my community  a well rounded education in nature, but I can’t find adequate places.” -Andres
                </p>

                
                {/* Journey Mapping */}
                <div className="my-4">

                <h2 className="my-1 text-gray-900 font-semibold font-public-sans text-2xl">
                    Journey Mapping
                </h2>

                <p>To better understand the user experience and identify pain points, a journey map was created outlining the typical steps a user would take when searching for and reserving a community space. This map highlighted key touchpoints, emotions, and potential obstacles that users might encounter throughout their journey.
                </p>

                <h2 className="font-semibold mt-6 text-gray-900">Barbara's Goal</h2>

                <p>Find locations that are accessible and can accommodate gardening and social spaces for the elderly.</p>

                <h2 className="font-semibold mt-4 text-gray-900">Problem Statement</h2>

                <p>
                Accommodations her peer groups access to nature and away from the overcrowding and noise of local parks.
                Frustrations
                Overcrowding, turbidity , noise lack of available spaces.
                </p>

                <div>
                <img src={Barbjourney} alt="Barbaras Journey Map" className="w-auto h-auto rounded-lg mt-6 object-contain" />
                </div>

                <h2 className="font-semibold mt-8 text-gray-900">Andres' Goal</h2>
                <p>
                Find adequate park locations for survival training and environmental education.
                Frustrations
                Cannot find suitable locations with biodiversity in order to educate youth in the field.
                </p>

                <h2 className="font-semibold mt-6 text-gray-900">Problem Statement</h2>

                <p>Andres is a survivalist who needs nature space to educate the community youth because current public spaces do not have the materials needed to teach his skills.
                </p>
                <div>
                <img src={Andresjourney} alt="Andres Journey Map" className="w-full h-auto rounded-lg mt-6" />
                </div>
                </div>

                <div className="my-10">

                <h1 className="my-1 text-gray-900 font-semibold font-public-sans text-2xl">
                    Ideation
                </h1>
                <p>
                    Using the insights gained from user research, journey mapping and a competitive analysis, the next steps involve ideation, wireframing, prototyping, and user testing to refine the design and ensure it effectively meets the needs of the target audience.
                </p>

                </div>

            </div>
        </div>
        
        {/*Ideation - Crazy 8's*/}
        <div className="gap-4 my-8">
            <h2 className="my-1 text-gray-900 text-start font-semibold text-2xl">
                Early Sketches
            </h2>
            <p className="text-start text-wrap text-gray-600">
                Early sketching was used to progressively iterate design elements in order to maximize as much accessible relevant information as possible on multiple platforms.
            </p>
            <div className="p-4 gap-4">
                <img src={MobileSketch} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                <img src={MobileSketch2} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                <img src={MobileSketch3} alt="Early Sketches" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>
                <p>
                These sketches helped to explore different solutions and options for user interface elements, allowing for quick iteration and refinement of ideas before moving on to more detailed wireframes and prototypes.
                </p>

                {/*Initial Design Iterations and solutions*/}
                <h2>First Design Iterations</h2>
                <p>
                    The idea here is to design a product/service that will allow social networking for the user to find people, groups and adequate open space locations(or potential spaces) after a number of choices are made to get as close to an ideal location as possible(where available) and so initially I thought using a map application style interaction as the most familiar interface for location and travels searches.
                </p>
                {/* Initial Design Iterations Images */}
                <div className="">
                    <img src={DesignSketchMobile} alt="Initial Design Iterations and solutions" className="w-sm h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                    <img src={DesignSketchTablet} alt="Initial Design Iterations and solutions" className="w-sm h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                    <img src={DesignSketchDesktop} alt="Initial Design Iterations and solutions" className="w-sm h-auto rounded-lg mt-6 border border-gray-200 shadow-xl" />
                </div>

                {/* Wireframing & Prototyping */}
                <h2 className="mt-12 text-gray-900 font-semibold text-2xl">
                    Wireframing & Breakpoints
                </h2>
                <p className="mt-4">
                    Based on the ideation phase, wireframes were created to outline the structure and layout of the application. These wireframes served as a blueprint for the design, allowing for quick iterations and adjustments based on user feedback. Prototypes were then developed to simulate the user experience and test the functionality of the design.
                </p>

                {/*Wireframes Images*/}
                <div className="my-12">
                    <img src={MobileWireframe} alt="Wireframes" className="my-12 w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                    <img src={TabletWireframe} alt="Wireframes" className="my-12 w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                    <img src={DesktopWireframe} alt="Wireframes" className="my-12 w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>

                {/*Lo-fi Prototyping Images*/}
                <div className="my-4">
                    <p>
                        These images represent varying (Mobile, Tablet, Desktop) breakpoints demonstrating a user searching for open space locations using the data visualization interaction idiom to view data associated with a location and set of criteria.
                    </p>
                    <div>
                        <img src={MobileBreakpoint} alt="Mobile View" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                        <p className="mt-4 font-semibold">
                            Mobile Breakpoint
                        </p>
                    </div>
                </div>

                <div className="my-4">
                    <p>
                        Users will start with a localized map and begin their contextual search using the “+” action button for either an address, zip code, general municipalities.
                    </p>
                    <div>
                        <img src={TabletBreakpoint} alt="Tablet View" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                        <p className="mt-4 font-semibold">
                            Tablet (Portrait) Breakpoint
                        </p>
                    </div>
                </div>

                <div className="my-10">
                    <p>
                        Once a location is chosen the user is given filters to use in order to narrows the results to more relevant locations that will meet the users needs.
                    </p>
                    <div>
                        <img src={DesktopBreakpoint} alt="Desktop View" className="w-sm h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                        <p className="mt-4 font-semibold">
                            Desktop Breakpoint
                        </p>
                    </div>
                </div>

                {/* User Testing and Usability Studies */}
                <h1>
                    Usability Studies & User Testing
                </h1>
                <h2>
                    Study Type: Unmoderated Usability Study Location: Remote Participants: 7 Length: 30 - 60 minutes
                </h2>
                <p>
                    Usability studies and user testing were conducted to gather feedback on the prototypes and identify areas for improvement. Participants were asked to complete specific tasks using the prototypes, and their interactions were observed and recorded. Feedback was collected through surveys and interviews to understand user satisfaction and identify pain points.
                </p>
                <h2>
                    Usability Study Insights
                </h2>
                <p>
                    More data, specifically related to crime, zoning, environmental and more detailed demographic data of the neighborhoods and communities of these locations.
                    Users wanted options that filtered more versatile locations that allow more ideas and different events for the locations.<br/>

                    Next step information and guides that provide information on how processes that will help them secure these spaces for their purposes, as well as allowing communities to organize and participate
                </p>
                <ul className="list-decimal my-4">
                    <p className="text-gray-900">Refining the Design</p>

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
                <h1>
                    Mock-Ups
                </h1>
                <>
                    Mobile Breakpoint: Iphone 14 Pro
                </>
                <div>
                    <p>
                        The initial mock-ups used a navigation style interaction design with a localized map and an F.A.B. as the entry point for finding new places right from the homepage.<br />
                        Initial Designs
                    </p>
                    <img src={''} alt="Mobile Initial Design" className="w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>
                <div>
                    <p>
                    The Final mock-up provides an introduction and brief explanation to the product and service as well as any available local places, groups or initiatives on the homepage as well as providing a menu for additional features, services and information.<br/>
                    Final Designs
                    </p>
                    <img src={''} alt="Mobile Final Design" className="w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>

                {/* Tablet Mock-Ups */}
                <p>
                    Tablet Breakpoint: iPad Pro 12.9"
                </p>
                <div>
                    <p>
                        Environmental information is gathered and added from databases. This additional information is identified through labeled icons.
                    </p>
                    <img src={''} alt="Tablet Initial Design" className="w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>
                <div>
                    <p>
                        Additional information includes links local zoning, demographic, weather databases.
                    </p>
                    <img src={''} alt="Tablet Final Design" className="w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>

                {/* Desktop Mock-Ups */}
                <p>
                    Desktop Breakpoint: Macbook Pro 16"
                </p>
                <div>
                    <p>
                        The initial mock-ups used a navigation style interaction design with a localized map and an F.A.B. as the entry point for finding new places right from the homepage.<br/>
                        Initial Designs
                    </p>
                    <img src={''} alt="Desktop Initial Design" className="w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>
                <div>
                    <p>
                    The Final mock-up provides an introduction and brief explanation to the product and service as well as any available local places, groups or initiatives on the homepage as well as providing a menu for additional features, services and information.<br/>
                    Final Designs
                    </p>
                    <img src={''} alt="Desktop Final Design" className="w-full h-auto rounded-lg mt-6 border border-gray-400 shadow-xl" />
                </div>
                <h1>
                    Going Forward
                </h1>
                <h2>
                    Take Aways & Impact
                </h2>
                <p>
                    Updates made to the design after user feedback improved overall usability of the website. Users where able to search and find results that were closer to the results they were expecting from this type of service.
                    What was learned?
                    With this product iteration having a larger assortment of options to choose from each category of questions made the service more inclusive for a wider range of public space scenarios. Among those choices are accessibility considerations, amenities etc. were appreciated and gave users more complete and narrow search results when looking for public space locations
                </p>
                <h2>
                    Next Steps
                </h2>
                <ul className="list-decimal my-4">
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
                <h1 className="my-1 text-gray-900 font-semibold text-2xl">
                    Thank You!
                </h1>
                <p>
                    Feel free to reach out with any questions or feedback regarding this project. Your insights are valuable and appreciated!
                </p>
        {/* End of Project Content */}
        </div>
        {/* Back Link */}
        <div className="py-6">
            <Link 
            to="/card" 
            className="back-button">← Collapse Neighborgood Case Study
            onClick={handleScrollUp} {/*smooth scroll up */}
            </Link>
        </div>
        </motion.div>
    );
}