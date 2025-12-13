import React from 'react';
import './HeaderBar.css';

function HeaderBar()
{
  return(
    <div>
        <div className="flex p-4 bg-gray-200  shadow-md absolute top-0 left-0 w-full border">
            <p className="text-2xl font-bold mr-12">The Portfolio of Majik Hudson</p>
            <ul className='flex flex-row gap-4 absolute right-0'>
                <li>Home</li>
                <li>Case Studies</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  );
}

export default HeaderBar;