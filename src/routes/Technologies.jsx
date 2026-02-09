import React from "react";
import{RiReactjsLine} from 'react-icons/ri';
import{SiMongodb} from 'react-icons/si';
import{FaNodeJs} from 'react-icons/fa';
import{DiCss3Full} from 'react-icons/di';
import{DiGit} from 'react-icons/di';
import{DiHtml5} from 'react-icons/di';
import{DiJsBadge} from 'react-icons/di';
import{SiTailwindcss} from 'react-icons/si';
import{TbBrandFramerMotion} from 'react-icons/tb';
import {PiFigmaLogoDuotone} from 'react-icons/pi';
import { SiWebpack } from "react-icons/si";


export default function Technologies() {
  return (
    <div className="border-b border-purple-900 items-center justify-center pb-20">

      <h2 className="text-3xl text-font-semibold text-indigo-500 pb-10">Technologies & Frameworks.</h2>

        {/* Technology icons */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <PiFigmaLogoDuotone className="text-2xl text-pink-500" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <DiHtml5 className="text-2xl text-red-500" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <DiCss3Full className="text-2xl text-orange-500" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <DiJsBadge className="text-2xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <RiReactjsLine className="text-2xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <DiGit className="text-2xl text-neutral-400" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <SiMongodb  className="text-2xl text-green-500" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <SiTailwindcss className="text-2xl text-indigo-500" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <FaNodeJs className="text-2xl text-green-400" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <TbBrandFramerMotion className="text-2xl text-purple-500" />
        </div>
        <div className="rounded-2xl border-2 border-purple-900 p-4">
            <SiWebpack className="text-2xl text-blue-500" />
        </div>
      </div>
    </div>
  );
}