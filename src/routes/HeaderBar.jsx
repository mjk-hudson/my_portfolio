import React from 'react';
import './HeaderBar.css';
import { Link } from 'react-router-dom';

export default function HeaderBar()
{
  return(
    <div>
        <div className="flex p-4 border-b border-b-violet-300/20 bg-gray-900/75 shadow-md absolute top-0 left-0 w-full">
            <p className="text-2xl font-bold mr-12 text-gray-200">Majik Hudson</p>
            <ul className='flex flex-row gap-4 absolute right-4 list-none'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/card">Case Studies</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
  );
}

