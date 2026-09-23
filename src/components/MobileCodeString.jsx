import React from 'react';
import { MobileCodeStringData } from '../components/MobileCodeStringData.js'; 

export default function MobileCodeString() {
  return (
    <div className="w-96 h-[920px] relative bg-slate-400 rounded-[48px] overflow-hidden mx-auto shadow-2xl">
      
      {/* Main Container - 352px width inside 384px frame */}
      <div className="w-[352px] left-4 top-[85px] absolute h-[788px]">
        <div className="w-full h-[666px] left-0 top-[121.30px] absolute">
          <div className="w-full h-[665px] left-0 top-[0.30px] absolute">
            
            {/* Mapped Event Cards */}
            {MobileCodeStringData.map((event) => (
              <div 
                key={event.id}
                className={`w-full p-px left-0 ${event.topOffset} absolute bg-slate-800 rounded-2xl outline outline-[0.66px] outline-offset-[-0.66px] outline-white/10 inline-flex flex-col justify-center items-start gap-2 overflow-hidden shadow-md`}
              >
                <div className="self-stretch h-24 relative">
                  {/* High-Contrast Gradient Backdrop */}
                  <div className="w-full h-24 left-0 top-0 absolute overflow-hidden">
                    <div className="w-full h-24 left-0 top-0 absolute bg-gradient-to-b from-slate-950/90 via-slate-950/75 to-slate-950/90" />
                  </div>

                  {/* Header Title & Category Badge Row */}
                  <div className="inset-x-0 top-[7.95px] px-4 absolute inline-flex justify-between items-center gap-2 z-10">
                    <div className="h-7 relative flex-1 min-w-0">
                      <div className="justify-start text-white text-lg font-semibold font-['Figtree'] leading-7 truncate drop-shadow-sm">
                        {event.title}
                      </div>
                    </div>
                    <div className={`px-2.5 py-1 shrink-0 ${event.categoryBg} rounded-lg outline outline-[0.66px] outline-offset-[-0.66px] outline-white/20 inline-flex justify-center items-center gap-2 overflow-hidden shadow-sm`}>
                      <span className="justify-start text-white text-xs font-medium font-['Figtree'] leading-4 whitespace-nowrap">
                        {event.category}
                      </span>
                    </div>
                  </div>

                  {/* Date, Time, and Flexible Location Row */}
                  <div className="inset-x-0 top-[51.95px] px-4 absolute flex items-center justify-between gap-2 z-10">
                    
                    {/* Date Field */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="size-4 relative overflow-hidden shrink-0">
                        <div className="w-0 h-[2.67px] left-[5.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                        <div className="w-0 h-[2.67px] left-[10.66px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                        <div className="size-3 left-[2px] top-[2.67px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                        <div className="w-3 h-0 left-[2px] top-[6.66px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                      </div>
                      <span className="text-white text-xs font-medium font-['Figtree'] leading-5 whitespace-nowrap drop-shadow-sm">
                        {event.date}
                      </span>
                    </div>

                    {/* Time Field */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <div className="size-4 relative overflow-hidden shrink-0">
                        <div className="w-[2.67px] h-1.5 left-[8px] top-[4px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                        <div className="size-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                      </div>
                      <span className="text-white text-xs font-medium font-['Figtree'] leading-5 whitespace-nowrap drop-shadow-sm">
                        {event.time}
                      </span>
                    </div>

                    {/* Location Field */}
                    <div className="flex items-center gap-1.5 min-w-0 flex-1 justify-end">
                      <div className="size-4 relative overflow-hidden shrink-0">
                        <div className="w-2.5 h-3.5 left-[2.67px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                        <div className="size-1 left-[6px] top-[4.66px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-white" />
                      </div>
                      <span className="text-white text-xs font-medium font-['Figtree'] leading-5 whitespace-nowrap overflow-hidden text-ellipsis drop-shadow-sm">
                        {event.location}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Footer Metadata Row */}
                <div className="self-stretch p-2.5 bg-slate-800 inline-flex justify-between items-center border-t border-white/5">
                  <div className="size- px-px inline-flex flex-col justify-start items-start">
                    <div className="w-14 h-5 relative">
                      <div className="size-4 left-0 top-[3.30px] absolute overflow-hidden">
                        <div className="w-2.5 h-1 left-[1.33px] top-[10px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-400" />
                        <div className="w-0.5 h-[5.16px] left-[10.66px] top-[2.08px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-400" />
                        <div className="w-0.5 h-1 left-[12.66px] top-[10.08px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-400" />
                        <div className="size-1.5 left-[3.33px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-slate-400" />
                      </div>
                      <div className="left-[20.36px] top-0 absolute justify-start text-slate-200 text-sm font-medium font-['Figtree'] leading-5">{event.attendees}</div>
                    </div>
                    <div className="w-28 h-4 relative">
                      <div className="left-[0.04px] top-0 absolute justify-start text-slate-400 text-xs font-normal font-['Figtree'] leading-4">by {event.organizer}</div>
                    </div>
                  </div>
                  <div className={`${event.progressBarWidth} h-2 relative bg-white/10 rounded-full`}>
                    <div className={`${event.progressBarWidth} h-2 left-[0.89px] top-[0.04px] absolute ${event.progressBarColor} rounded-full`} />
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>

        {/* Filter and Search Section */}
        <div className="w-full h-6 left-0 top-[49.31px] absolute flex justify-between items-center">
          <div className="w-52 h-5 rounded-2xl relative">
            <div className="w-full h-5 left-0 top-[-0.19px] absolute bg-neutral-50 rounded-lg outline outline-[0.66px] outline-offset-[-0.66px] outline-white overflow-hidden">
              <div className="left-[36px] top-[2px] absolute justify-start text-gray-400 text-xs font-normal font-['Figtree']">Search events...</div>
            </div>
            <div className="size-4 left-[12px] top-[2.70px] absolute overflow-hidden">
              <div className="size-[2.89px] left-[11.10px] top-[11.10px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-gray-400" />
              <div className="size-2.5 left-[2px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-gray-400" />
            </div>
          </div>
          <div className="w-28 h-5 bg-neutral-50 rounded-2xl outline outline-[0.66px] outline-offset-[-0.66px] outline-white relative">
            <div className="size-4 left-[87.26px] top-[3px] absolute opacity-50 overflow-hidden">
              <div className="w-2 h-1 left-[4px] top-[6px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-gray-500" />
            </div>
            <div className="w-11 h-5 left-[35px] top-[1px] absolute overflow-hidden">
              <div className="left-[0.77px] top-0 absolute justify-start text-neutral-500 text-[10px] font-normal font-['Figtree'] leading-5">All Events</div>
            </div>
            <div className="size-4 left-[12.65px] top-[3px] absolute overflow-hidden">
              <div className="w-3.5 h-3 left-[1.33px] top-[2px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-gray-400" />
            </div>
          </div>
        </div>

        {/* Tab Navigation Section */}
        <div className="w-full h-5 left-0 top-[80.31px] absolute flex justify-between items-center">
          <div className="w-28 h-5 rounded-md bg-blue-500 shadow-[0px_2px_3px_0px_rgba(120,120,120,0.35)] outline outline-[0.45px] outline-offset-[-0.45px] outline-neutral-500/30 flex justify-center items-center">
            <div className="text-white text-[9.68px] font-normal font-['Figtree'] leading-3">Event Calendar</div>
          </div>
          <div className="w-28 h-5 rounded-md outline outline-[0.45px] outline-offset-[-0.45px] outline-neutral-500/20 flex justify-center items-center">
            <div className="text-blue-300 text-[9.68px] font-normal font-['Figtree'] leading-3">Create Event</div>
          </div>
        </div>

        {/* Header Section - Time Aligned Right on Same Level as Calendar */}
        <div className="w-full h-6 left-0 top-[16.66px] absolute flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-6 relative overflow-hidden">
              <div className="w-0 h-1 left-[8px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-500" />
              <div className="w-0 h-1 left-[16px] top-[2px] absolute outline outline-2 outline-offset-[-1px] outline-blue-500" />
              <div className="size-4 left-[3px] top-[4px] absolute outline outline-2 outline-offset-[-1px] outline-blue-500" />
              <div className="w-4 h-0 left-[3px] top-[10px] absolute outline outline-2 outline-offset-[-1px] outline-blue-500" />
            </div>
            <div className="text-blue-500 text-2xl font-semibold font-['Figtree'] leading-6">Calendar</div>
          </div>
          <div className="text-gray-300 text-sm font-medium font-['Figtree'] leading-6">
            9:41 AM
          </div>
        </div>
      </div>

      {/* iOS Status Bar */}
      <div className="w-full px-6 py-5 top-[23px] absolute inline-flex justify-between items-center">
        <div className="h-5 pt-[1.50px] flex justify-center items-center">
        </div>
        <div className="h-5 flex justify-center items-center gap-1.5">
          <div className="w-5 h-3 bg-black" />
          <div className="w-4 h-3 bg-black" />
          <div className="w-7 h-3 relative">
            <div className="w-6 h-3 left-0 top-0 absolute opacity-30 rounded-sm border border-black" />
            <div className="w-[1.33px] h-1 left-[26px] top-[4.50px] absolute opacity-40 bg-black" />
            <div className="w-5 h-2 left-[2px] top-[2px] absolute bg-black rounded-xs" />
          </div>
        </div>
      </div>

    </div>
  );
}