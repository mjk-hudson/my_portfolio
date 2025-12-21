// Tricon.jsx - Export triangle icon for reuse across files
import React from 'react';

export default function Tricon({ color = 'text-gray-500', size = 'w-6 h-6', hoverColor = 'hover:text-gray-700', shadow ='shadow-md', className ='' }) {
  return (
    <svg
      className={`${size} fill-current ${color} ${hoverColor} transition-colors ${shadow} ${className}`} // Dynamic classes via props
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rounded right-pointing triangle path */}
      <path d="M19.4965,1.9056 C20.4148,1.0304 21.8168,1.7703 21.8168,3.1302 L21.8168,20.4944 C21.8168,21.3781 21.1847,22.0944 20.4050,22.0944 L2.1832,22.0944 C0.8659,22.0944 0.2664,20.2306 1.2746,19.2698 L19.4965,1.9056 Z"/>
      {/* Add more <path> etc. as needed */}
    </svg>
  );
}

