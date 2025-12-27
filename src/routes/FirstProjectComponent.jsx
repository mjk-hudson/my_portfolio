import React from "react";
import './FirstProjectComponent.css';
import { Link } from "react-router-dom";
export default function FirstProjectComponent() {
    return (
        <div className="col-span-2 p-4">
            <div className="mb-6">
                <h2 className="mb-1 font-public-sans text-gray-800 text-left font-semibold text-2xl">Neighborgood, A Responsive Website and Mobile App</h2>
                <p className="text-left text-gray-600">
                    A Service that allows communities to search and find open spaces for community opportunities and outreach.
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
            <div className="text-left text-gray-600">
                <p>The goal was to create a service that will allow people and entire communities to find suitable locations for parks and other public spaces for various functions. Neighborgood will allow communities to search for and find spaces they can designate for outreach opportunities. Problem The challenge was to create a companion website that was consistent with the look and feel of the dedicated mobile app, as well as adapt to cross platform screen sizes. Lead UX designer, UX researcher, Visual and Interaction designer. Responsibilities include (but not limited to) user research, problem defining, wireframing, prototyping, testing, visual and motion design.
                </p>
                <ul>
                    <h1>The design process includes...</h1>
                    <li>Problem Statement</li>
                    <li>User Research</li>
                    <li>Competitive Analysis</li>
                    <li>Personas</li>
                    <li>Wireframing</li>
                    <li>Prototyping</li>
                    <li>User Testing</li>
                    <li>Visual Design</li>
                    <li>Next steps</li>
                </ul>
            </div>
            <div>
                <Link to="/card" className="back-button">← Collapse Neighborgood Case Study</Link>
            </div>
        </div>
    );
}  