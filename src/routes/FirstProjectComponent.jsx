import React from "react";
import './FirstProjectComponent.css';
import { Link } from "react-router-dom";
export default function FirstProjectComponent() {
    return (
        <div className="col-span-2 p-6">
            <div className="mb-6">
                <h1 className="mb-6">Case Study: Neighborgood Responsive Website and Mobile App</h1>
                <p className="text-left">
                    A Service that allows communities to search and find open spaces for community opportunities and outreach.
                </p>
            </div>
            <div className="mb-6">
                <div className="mb-6 text-left">
                    <h2 className=""><b>Project Overview</b></h2>
                    <ul className="">
                        <li className=""><b>Project Name: Neighborgood</b></li>
                        <li className=""><b>Role: UX/UI Designer</b></li>
                        <li className=""><b>Duration: 3 months</b></li>
                        <li className=""><b>Tools: Figma</b></li>
                    </ul>
                </div>
            </div>
            <div className="text-left">
                <p>The goal of this project was to create a product that will allow people and entire communities to find suitable locations for parks and other public spaces for various functions. The product will also allow communities to search for and find new park locations and opportunities for outreach. Problem The challenge was to create a companion website that was consistent with the look and feel of the dedicated mobile app, as well as adapt to cross platform screen sizes. Lead UX designer, UX researcher, Visual and Interaction designer. Responsibilities include (but not limited to) user research, problem defining, wireframing, prototyping, testing, visual and motion design.
                </p>
            </div>
            <div>
                <Link to="/card" className="back-button">← Collapse Neighborgood Case Study</Link>
            </div>
        </div>
    );
}  