import React from "react";
import './FirstProjectComponent.css';
import { Link } from "react-router-dom";
import Nbgca from '../assets/nbgca.html?raw';

export default function FirstProjectComponent() {
    return (
        <div className="col-span-2 p-4">
            <div className="mb-6">
                <h1 className="mb-1 font-public-sans text-gray-800 text-left font-semibold text-2xl">Neighborgood. A Responsive Web Application</h1>
                <p className="text-left text-gray-600">
                    Neighborgood is a social media platform for outreach opportunities that allow individuals and groups find suitable locations for community engagement functions.
                </p>
            </div>
            <div className="mb-6">
                <div className="mb-6 text-left font-public-sans text-gray-700">
                    <h2 className=""><b>Project Overview</b></h2>
                    <ul className="">
                        <li className=""><b>Project Name: Neighborgood</b></li>
                        <li className=""><b>Role: UX/UI Designer</b></li>
                        <li className=""><b>Duration: 3 months</b></li>
                        <li className=""><b>Tools: Figma</b></li>
                    </ul>
                </div>
            </div>

            {/* Design Process Overview */}
            <div className="text-left text-gray-600">
                <ul className="list-disc my-4">
                    <h2 className="my-1 text-xl text-gray-900 font-semibold font-public-sans">The design process includes...</h2>
                    <li>Problem Statement</li>
                    <li>Competitive Analysis</li>
                    <li>User Research</li>
                    <li>Journey Mapping</li>
                    <li>Personas</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>User Testing</li>
                    <li>Visual Design</li>
                    <li>Next steps</li>
                </ul>

                {/* Problem Statement */}
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold font-public-sans text-2xl">The Problem</h2>
                <p>Neighborgood will allow communities to organize and search for spaces they can designate for community outreach opportunities. The design is a responsive website suitable for most devices and breakpoints. Lead UX designer, UX researcher, Visual and Interaction designer. Responsibilities include (but not limited to) user research, problem defining, wireframing, prototyping, testing, visual and motion design.
                </p>
                </div>
                
                {/* Competitive Analysis */}
                <div>
                    <h2 className="my-1 text-gray-900 font-semibold font-public-sans text-2xl">Competitive Analysis of Web Platforms for Community Space Search</h2>
                    <p>
                     This research covers web-based social media services enabling individuals and groups to search for and utilize open community spaces (e.g., parks, libraries, community centers) for free outreach and social good events. These platforms emphasize event discovery/posting with venue details, are free for basic user/organizer access, prioritize user-friendliness (intuitive interfaces, mobile apps), and support national (U.S.-wide) use. They incorporate social elements like user connections, groups, or sharing to foster community.
                    </p>
                    <p className="my-1 text-gray-900 font-semibold font-public-sans">Key Features Analyzed:</p>
                    <ul className="list-disc my-2">
                        <li><p className="font-semibold">Search/Posting for Spaces:</p>Ability to find/post events with venue info (e.g., free public spaces)</li>
                        <li><p className="font-semibold">Free Usage:</p> No cost for core features like searching/posting free events.</li>
                        <li><p className="font-semibold">User-Friendliness:</p> Simple navigation, mobile support, quick setup.</li>
                        <li><p className="font-semibold">National Coverage:</p> U.S.-wide availability.</li>
                        <li><p className="font-semibold">Social Elements:</p> Profiles, groups, sharing for networking.</li>
                        <li><p className="font-semibold">Social Good Fit:</p> Emphasis on outreach, volunteering, activism.</li>
                        <li><p className="font-semibold">Pros/Cons:</p> High-level strengths/weaknesses for competitive edge.</li>
                    </ul>
                    {/*Competitive Analysis Table Placeholder*/}
                    <div className="my-8 overflow-x-auto border border-gray-400 rounded-lg shadow-xl">
                        <div className="inline-block " dangerouslySetInnerHTML={{__html: Nbgca}}></div>
                    </div>
                </div>
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold font-public-sans">Competitive Analysis Insights</h2>
                <p>After conducting a competitive analysis of existing platforms that facilitate community engagement and event planning, it was evident that there was a gap in the market for a user-friendly platform specifically focused on helping users find and reserve spaces for community outreach activities. Many existing solutions were either too complex or lacked the necessary features to effectively serve this purpose.</p>
                </div>

                {/*User Research*/}
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold font-public-sans text-2xl">User Research</h2>
                </div>
                <div className="my-4">
                <h2 className="my-1 text-gray-900 font-semibold font-public-sans">Target</h2>
                <p className="">The target audience are community organizers, non-profit organizations, local government agencies, and individuals looking to host community events for social good. The platform aims to facilitate the process of finding and reserving spaces for various community activities and events, promoting social engagement and collaboration.</p>
                </div>
            </div>
            <div>
                <Link to="/card" className="back-button">← Collapse Neighborgood Case Study</Link>
            </div>
        </div>
    );
}  