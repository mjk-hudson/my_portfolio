import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import BledgerHome from "../components/BledgerHome.jsx?raw";

export default function BledgerHome() {
  return ( 
    <div className="w-96 h-[874px] relative rounded-[64px] outline outline-1 outline-offset-[-1px] outline-slate-100 overflow-hidden">
        <div className="w-96 h-[683px] left-[-24px] top-[192px] absolute bg-gradient-to-b from-slate-50 to-slate-100 shadow-[8px_-8px_21px_0px_rgba(0,0,0,0.18)] shadow-[inset_-8px_4px_12px_0px_rgba(0,0,0,0.25)] outline outline-1 outline-offset-[-0.50px] outline-slate-50" />
        <div className="w-14 h-5 left-[16px] top-[212px] absolute">
            <div className="left-[8px] top-[6px] absolute justify-start text-black text-xs font-medium font-['JetBrains_Mono'] leading-4">Summary<br/></div>
            <div className="w-5 h-0 left-0 top-0 absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
        </div>
        <div className="w-60 h-14 left-[85px] top-[768px] absolute">
            <div className="size- p-2 left-[89px] top-0 absolute rounded-3xl inline-flex flex-col justify-start items-start">
                <div className="size-11 relative overflow-hidden">
                    <div className="w-8 h-9 left-[5.50px] top-[3.69px] absolute outline outline-4 outline-offset-[-1.84px] outline-red-400" />
                    <div className="size-3 left-[16.59px] top-[16.59px] absolute outline outline-4 outline-offset-[-1.84px] outline-red-400" />
                </div>
            </div>
            <div className="w-20 h-6 left-0 top-[17px] absolute">
                <div className="left-[32px] top-[4px] absolute justify-start text-slate-300 text-xs font-medium font-['JetBrains_Mono'] leading-4">Back</div>
                <div className="size-6 left-0 top-0 absolute overflow-hidden">
                    <div className="w-3 h-2.5 left-[6px] top-[7px] absolute outline outline-[2.50px] outline-offset-[-1.25px] outline-slate-300" />
                </div>
            </div>
            <div className="w-20 h-6 left-[156px] top-[17px] absolute">
                <div className="size-6 left-[53px] top-0 absolute overflow-hidden">
                    <div className="w-3 h-2.5 left-[6px] top-[7px] absolute outline outline-[2.50px] outline-offset-[-1.25px] outline-stone-900" />
                </div>
                <div className="left-0 top-[4px] absolute justify-start text-stone-900 text-xs font-medium font-['JetBrains_Mono'] leading-4">Forward</div>
            </div>
        </div>
        <div className="w-5 h-0 left-[-48px] top-[321px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
        <div className="w-5 h-0 left-[-48px] top-[458px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
        <div className="w-5 h-0 left-[-49px] top-[4px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
        <div className="w-5 h-0 left-[-48px] top-[2px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
        <div className="left-[16px] top-[96px] absolute justify-start text-black text-4xl font-normal font-['Cal_Sans'] leading-6">Bledger</div>
        <div className="size- left-[16px] top-[134px] absolute inline-flex justify-start items-center gap-2">
            <div className="size- flex justify-start items-center gap-2">
                <div className="justify-start text-red-400 text-xl font-normal font-['Cal_Sans'] leading-5">Home</div>
                <div className="justify-start"><span class="text-red-400 text-xl font-normal font-['Cal_Sans'] leading-5">24.86% </span><span class="text-slate-600 text-xl font-normal font-['Cal_Sans'] leading-5"> </span><span class="text-slate-600 text-xl font-bold font-['Helvetica'] leading-5">over budget</span></div>
            </div>
            <div className="opacity-30 justify-start text-slate-400 text-xl font-normal font-['HelveticaNeue'] leading-4">Insights</div>
            <div className="opacity-30 justify-start text-slate-400 text-xl font-normal font-['HelveticaNeue'] leading-4">Spending Tracker</div>
        </div>
        <div className="w-20 h-28 left-[16px] top-[652px] absolute">
            <div className="w-12 h-5 left-0 top-0 absolute">
                <div className="left-[8px] top-[6px] absolute justify-start text-black text-xs font-medium font-['JetBrains_Mono'] leading-4">Period</div>
                <div className="w-5 h-0 left-0 top-0 absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-red-400"></div>
            </div>
            <div className="left-0 top-[100px] absolute text-center justify-start text-slate-400 text-sm font-light font-['Inclusive_Sans'] leading-4">This year</div>
            <div className="left-0 top-[76px] absolute justify-start text-slate-400 text-sm font-light font-['Inclusive_Sans'] leading-4">This month</div>
            <div className="left-0 top-[52px] absolute text-center justify-start text-red-400 text-sm font-light font-['Inclusive_Sans'] leading-4">This week</div>
            <div className="left-0 top-[28px] absolute justify-start text-slate-400 text-sm font-light font-['Inclusive_Sans'] leading-4">Today</div>
        </div>
        <div className="w-52 left-[17px] top-[424px] absolute justify-start text-black text-xs font-medium font-['JetBrains_Mono'] leading-4">View your averages here. Swipe up or down to view daily, weekly, monthly and yearly averages. *Your above average(Shown in red) is the default view.</div>
        <div className="w-52 left-[171px] top-[663px] absolute justify-start text-black text-xl font-normal font-['HelveticaNeue'] leading-4">Swipe up for monthly and yearly. Swipe down for daily.</div>
        <div className="w-52 h-24 left-[15px] top-[261px] absolute">
            <div className="left-[1px] top-[18px] absolute justify-start text-red-400 text-6xl font-normal font-['Cal_Sans'] leading-6">$357.66</div>
            <div className="w-52 left-[1px] top-[83px] absolute justify-start text-slate-600 text-xl font-normal font-['HelveticaNeue'] leading-4">Above average this week. </div>
        </div>
        <div data-device="iPhone" data-orientation="Portrait" data-show-home-indicator="true" className="w-96 h-8 left-[1px] top-[840px] absolute">
            <div className="w-36 h-[5px] left-[272px] top-[26px] absolute origin-top-left rotate-180 bg-Labels-Primary rounded-[100px]" />
        </div>
        <div className="w-96 px-6 py-5 left-[1px] top-0 absolute inline-flex justify-center items-center gap-40">
            <div className="flex-1 h-5 pt-[1.50px] flex justify-center items-center gap-2.5">
                <div className="text-center justify-start text-Labels-Primary text-base font-['SF_Pro'] leading-5">9:41</div>
            </div>
            <div className="flex-1 h-5 pr-px pt-px flex justify-center items-center gap-1.5">
                <div className="w-5 h-3 bg-Labels-Primary" />
                <div className="w-4 h-3 bg-Labels-Primary" />
                <div className="w-7 h-3 relative">
                    <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded-sm border border-Labels-Primary" />
                    <div className="w-[1.33px] h-1 left-[26px] top-[4.50px] absolute opacity-40 bg-Labels-Primary" />
                    <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-Labels-Primary rounded-xs" />
                </div>
            </div>
        </div>
    </div>
  )
};