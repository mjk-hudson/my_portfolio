import React from 'react';

export default function PreMeetScreen() {
    return (
        <div className="w-96 h-[844px] relative bg-neutral-100 rounded-[40px] outline outline-1 outline-offset-[-1px] outline-zinc-400 inline-flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch h-11 relative" />
            <div className="self-stretch flex-1 px-4 pb-24 flex flex-col justify-start items-start gap-6">
                <div className="self-stretch px-4 pt-3 pb-2 flex flex-col justify-start items-start gap-1">
                    <div className="justify-start text-Labels-Secondary text-xs font-medium font-['Iosevka'] leading-4">2:00 p.m. EST</div>
                    <div className="self-stretch justify-start text-Labels-Primary text-8xl font-bold font-['Neue_Haas_Grotesk_Display_Pro'] leading-[72px]">Pre-Meet Lobby</div>
                    <div className="justify-start text-Labels-Secondary text-sm font-normal font-['Consolas'] leading-4 tracking-tight">Confirm your presence</div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="justify-start text-Labels-Secondary text-xs font-medium font-['Iosevka'] leading-4">Your State</div>
                    <div className="self-stretch bg-Backgrounds-Primary rounded-3xl flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch p-4 inline-flex justify-between items-center">
                            <div className="size- inline-flex flex-col justify-start items-start gap-0.5">
                                <div className="justify-start text-Labels-Primary text-xs font-medium font-['Iosevka'] leading-4">Not Ready</div>
                                <div className="justify-start text-Labels-Secondary text-sm font-normal font-['Consolas'] leading-4 tracking-tight">Waiting for you</div>
                            </div>
                            <div className="size- px-4 py-2.5 bg-gradient-to-r from-pink-600 to-amber-500 rounded-xl flex justify-start items-center">
                                <div className="justify-start text-white text-sm font-normal font-['Consolas'] leading-4 tracking-tight">Mark Ready</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="justify-start text-Labels-Secondary text-xs font-medium font-['Iosevka'] leading-4">Participants Readiness</div>
                    <div className="self-stretch bg-Backgrounds-Primary rounded-3xl flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch p-4 flex flex-col justify-start items-start gap-3">
                            <div className="self-stretch inline-flex justify-between items-start">
                                <div className="justify-start text-Labels-Primary text-sm font-normal font-['Consolas'] leading-4 tracking-tight">1 of 4 participants ready</div>
                                <div className="justify-start text-Labels-Secondary text-2xl font-bold font-['Helvetica'] leading-6">25%</div>
                            </div>
                            <div className="self-stretch h-2 bg-Fills-Secondary rounded-sm inline-flex justify-start items-start overflow-hidden">
                                <div className="w-20 self-stretch bg-gradient-to-r from-pink-600 to-amber-500 rounded-sm" />
                            </div>
                        </div>
                        <div data-mode="Light" className="self-stretch h-px relative border-t border-Separators-Vibrant" />
                        <div className="self-stretch flex flex-col justify-start items-start">
                            <div data-height="Regular" data-show-edit-button="false" data-show-grabber="false" data-show-image="false" data-show-subtitle="true" data-show-trailing="true" className="self-stretch h-12 px-4 inline-flex justify-center items-center">
                                <div className="flex-1 self-stretch pb-px inline-flex flex-col justify-center items-start">
                                    <div data-mode="Light" className="self-stretch h-px relative border-t border-Separators-Vibrant" />
                                    <div className="self-stretch flex-1 inline-flex justify-start items-center">
                                        <div className="flex-1 self-stretch justify-center text-Accents-Green text-xs font-medium font-['Iosevka'] leading-4">Title</div>
                                        <div className="self-stretch flex justify-end items-center">
                                            <div data-show-checkmark="true" data-show-drill-in="false" data-show-info="false" data-show-symbol="false" data-type="Default" className="size- flex justify-end items-center gap-4">
                                                <div className="text-right justify-center text-Labels-Secondary text-sm font-normal font-['Consolas'] leading-4 tracking-tight">Detail</div>
                                                <div className="size-5 text-center justify-center text-Labels-Primary text-2xl font-['SF_Pro'] leading-6">􀆅</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-height="Regular" data-show-edit-button="false" data-show-grabber="false" data-show-image="false" data-show-subtitle="true" data-show-trailing="true" className="self-stretch h-12 px-4 inline-flex justify-center items-center">
                                <div className="flex-1 self-stretch pb-px inline-flex flex-col justify-center items-start">
                                    <div data-mode="Light" className="self-stretch h-px relative border-t border-Separators-Vibrant" />
                                    <div className="self-stretch flex-1 inline-flex justify-start items-center">
                                        <div className="flex-1 self-stretch justify-center text-Labels-Primary text-xs font-medium font-['Iosevka'] leading-4">Title</div>
                                        <div className="self-stretch flex justify-end items-center">
                                            <div data-show-checkmark="false" data-show-drill-in="false" data-show-info="false" data-show-symbol="false" data-type="Default" className="size- flex justify-end items-center gap-4">
                                                <div className="text-right justify-center text-Labels-Secondary text-sm font-normal font-['Consolas'] leading-4 tracking-tight">Detail</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="justify-start text-Labels-Secondary text-xs font-medium font-['Iosevka'] leading-4">Readiness Overview</div>
                    <div className="self-stretch bg-Backgrounds-Primary rounded-3xl flex flex-col justify-start items-start overflow-hidden">
                        <div className="self-stretch p-5 inline-flex justify-between items-center">
                            <div className="flex-1 inline-flex flex-col justify-start items-center gap-0.5">
                                <div className="justify-start text-Labels-Primary text-2xl font-bold font-['Helvetica'] leading-6">3</div>
                                <div className="justify-start text-Labels-Secondary text-xs font-medium font-['Iosevka'] leading-4">Pending</div>
                            </div>
                            <div className="w-24 flex justify-center items-start">
                                <div className="size-16 p-1.5 backdrop-blur-[20px] flex justify-center items-center">
                                    <div className="size-14 relative">
                                        <div className="size-1.5 left-[26px] top-0 absolute bg-blend-linear-dodge bg-white rounded-full" />
                                        <div className="w-7 left-[14px] top-[41px] absolute text-center justify-start text-zinc-700/60 text-sm font-normal font-['SF_Pro'] leading-4 tracking-tight">􀙖</div>
                                        <div className="w-11 left-[6px] top-[18px] absolute text-center justify-start text-white text-2xl font-bold font-['Helvetica'] leading-6">50%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 inline-flex flex-col justify-start items-center gap-0.5">
                                <div className="justify-start text-Accents-Green text-2xl font-bold font-['Helvetica'] leading-6">1</div>
                                <div className="justify-start text-Labels-Secondary text-xs font-medium font-['Iosevka'] leading-4">Ready</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-96 px-4 pt-3 pb-8 left-0 top-[746px] absolute bg-gray-100/80 backdrop-blur-[10px] inline-flex justify-start items-start">
                <div className="flex-1 h-14 bg-gradient-to-r from-pink-600 to-amber-500 rounded-2xl flex justify-center items-center">
                    <div className="justify-start text-white text-sm font-normal font-['Consolas'] leading-4 tracking-tight">MAKE YOURSELF READY FIRST</div>
                </div>
            </div>
            <div className="w-96 pb-2 left-0 top-[831px] absolute inline-flex justify-center items-start">
                <div className="w-32 h-[5px] opacity-30 bg-Labels-Primary rounded-[10px]" />
            </div>
        </div>    );
}