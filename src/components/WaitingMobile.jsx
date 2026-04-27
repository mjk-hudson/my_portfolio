import React, { useState, useEffect, useRef } from 'react';

const WaitingMobile = ({ initialSeconds = 57, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const intervalRef = useRef(null);

  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const progress = initialSeconds > 0 ? (timeLeft / initialSeconds) * 100 : 0;
  const strokeDashoffset = circumference * (1 - progress / 100);

  const formatTime = (seconds) => seconds.toString();

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          const newTime = prev - 1;
          if (newTime <= 0) {
            setIsRunning(false);
            if (onComplete) onComplete();
            return 0;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, timeLeft, onComplete]);

  const toggleTimer = () => setIsRunning(!isRunning);

  return (
    <>
      {/* Only the Device Frame Remains */}
      <div
        className="origin-top-left"
        style={{
          transform: 'scale(0.6667)',
          transformOrigin: 'top left',
          width: '402px',
          height: '874px',
        }}
      >
        <div className="w-[402px] h-[874px] relative bg-white rounded-[32px] overflow-hidden shadow-2xl">
          <div className="h-full flex flex-col">
            <div className="flex-1 px-4 pt-9 relative bg-neutral-100/80 flex flex-col items-center gap-2 overflow-hidden">
              
              {/* Header */}
              <div className="flex flex-col justify-start items-start gap-1 w-full max-w-[320px]">
                <div className="w-full h-4 inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                    ROUND 1
                  </div>
                </div>
                <div className="w-full inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-black text-8xl font-bold font-['Neue_Haas_Grotesk_Display_Pro'] leading-[72px]">
                    Waiting for Partner
                  </div>
                </div>
                <div className="w-full inline-flex justify-start items-start">
                  <div className="flex-1 justify-start text-gray-600 text-2xl font-bold font-['Helvetica'] leading-6">
                    Your match will join shortly
                  </div>
                </div>
              </div>

              {/* Animated Countdown Counter */}
              <div className="self-stretch h-48 relative rounded-[10px]">
                <div className="w-40 h-40 left-[105px] top-[20px] absolute">
                  <svg width="160" height="160" viewBox="0 0 160 160" className="absolute inset-0">
                    <circle cx="80" cy="80" r={radius} fill="none" stroke="#e5e7eb" strokeWidth="14" />
                    <circle
                      cx="80"
                      cy="80"
                      r={radius}
                      fill="none"
                      stroke="url(#progressGradient)"
                      strokeWidth="14"
                      strokeDasharray={circumference}
                      strokeDashoffset={strokeDashoffset}
                      strokeLinecap="round"
                      transform="rotate(-90 80 80)"
                      style={{ transition: 'stroke-dashoffset 0.3s linear' }}
                    />
                    <text
                      x="80"
                      y="78"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-[72px] font-bold fill-black font-['Neue_Haas_Grotesk_Display_Pro']"
                    >
                      {formatTime(timeLeft)}
                    </text>
                  </svg>

                  {timeLeft > 0 && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-[118px] text-center text-gray-500 text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                      seconds
                    </div>
                  )}
                </div>

                <div className="h-4 left-[105.5px] top-[184px] absolute inline-flex justify-start items-start">
                  <div className="text-center text-gray-500 text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                    Auto-reroute at 0:00
                  </div>
                </div>

                <div className="w-24 h-4 left-[138px] top-0 absolute inline-flex justify-start items-start">
                  <div className="justify-start text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                    TIME REMAINING
                  </div>
                </div>
              </div>

              {/* Scrollable Match Info Container - Scrollbars Hidden */}
              <div 
                className="w-80 h-52 relative rounded-[32px] overflow-hidden z-10 bg-white"
              >
                <div 
                  className="h-full w-full overflow-y-auto px-1 py-1 hide-scrollbars"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  <div className="flex flex-col gap-4 p-1">
                    {/* MATCHED WITH */}
                    <div
                      className="px-6 pt-6 rounded-[10px] flex flex-col justify-start items-start gap-4 bg-white border border-gray-100"
                      style={{ width: '302px', height: '181px' }}
                    >
                      <div className="self-stretch h-4 inline-flex justify-start items-start">
                        <div className="flex-1 text-left text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                          MATCHED WITH
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-3 flex-1">
                        <div className="self-stretch flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch h-7 relative">
                            <div className="text-left text-black text-2xl font-bold font-['Helvetica'] leading-6">
                              Jordan Parker
                            </div>
                          </div>
                          <div className="self-stretch h-5 inline-flex justify-start items-start">
                            <div className="flex-1 text-left text-gray-600 text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                              Product Designer
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch pt-3 border-t-[0.69px] border-gray-100 flex flex-col justify-start items-start gap-2 flex-1">
                          <div className="self-stretch h-5 inline-flex justify-between items-center">
                            <div className="w-11 h-4 flex justify-start items-start">
                              <div className="text-left text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                                Location
                              </div>
                            </div>
                            <div className="h-5 flex justify-start items-start">
                              <div className="text-left text-black text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                                San Francisco, CA
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch h-5 inline-flex justify-between items-center">
                            <div className="w-16 h-4 flex justify-start items-start">
                              <div className="text-left text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                                Match Score
                              </div>
                            </div>
                            <div className="h-5 flex justify-start items-start">
                              <div className="text-left text-pink-600 text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                                92%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SESSION DETAILS */}
                    <div className="self-stretch px-6 pt-6 rounded-[10px] flex flex-col justify-start items-start gap-4 bg-white border border-gray-100">
                      <div className="self-stretch h-4 inline-flex justify-start items-start">
                        <div className="flex-1 text-left text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                          SESSION DETAILS
                        </div>
                      </div>
                      <div className="self-stretch h-24 flex flex-col justify-start items-start gap-3">
                        <div className="self-stretch h-9 inline-flex justify-start items-center gap-3">
                          <div className="w-4 h-4 relative overflow-hidden">
                            <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-gray-400" />
                            <div className="w-[2.67px] h-1.5 left-[8px] top-[4px] absolute outline outline-[1.33px] outline-offset-[-0.67px] outline-gray-400" />
                          </div>
                          <div className="flex-1 h-9 inline-flex flex-col justify-start items-start gap-[0px]">
                            <div className="self-stretch h-5 inline-flex justify-start items-start">
                              <div className="flex-1 text-left text-black text-xs font-medium font-['Iosevka'] leading-4">
                                Duration
                              </div>
                            </div>
                            <div className="self-stretch h-4 inline-flex justify-start items-start">
                              <div className="flex-1 text-left text-gray-500 text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                                20 minutes
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch h-12 pl-3.5 border-l-[1.39px] border-pink-600 flex flex-col justify-start items-start gap-1">
                          <div className="self-stretch h-4 inline-flex justify-start items-start">
                            <div className="flex-1 text-left text-gray-500 text-xs font-medium font-['Iosevka'] leading-4">
                              Current Round
                            </div>
                          </div>
                          <div className="self-stretch h-7 relative">
                            <div className="text-left text-black text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                              1 of 3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Container - High z-index */}
              <div className="w-80 h-40 px-6 pt-6 absolute left-1/2 -translate-x-1/2 top-[689px] bg-black/0 rounded-[32px] shadow-[3px_4px_12px_-2px_rgba(0,0,0,0.25)] flex flex-col justify-start items-start gap-4 overflow-hidden z-40">
                <div className="self-stretch h-14 inline-flex justify-start items-start gap-3">
                  <div className="w-4 h-5 relative overflow-hidden" />
                  <div className="w-72 h-14 inline-flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch h-5 inline-flex justify-start items-start">
                      <div className="flex-1 text-left text-black text-xs font-medium font-['Iosevka'] leading-4">
                        Partner not showing up?
                      </div>
                    </div>
                    <div className="self-stretch h-8 relative">
                      <div className="w-72 left-0 top-0 absolute text-left text-gray-500 text-sm font-normal font-['Consolas'] leading-4 tracking-tight">
                        Report a no-show to get matched with someone else immediately
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  onClick={toggleTimer}
                  className="self-stretch h-11 relative bg-gradient-to-r from-pink-600 to-amber-500 rounded-2xl cursor-pointer active:scale-[0.98] transition-transform flex items-center justify-center"
                >
                  <div className="text-center text-white text-sm font-medium font-['Consolas'] leading-4 tracking-tight">
                    REPORT NO-SHOW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Gradient */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#EA0A81" />
            <stop offset="100%" stopColor="#FF8A05" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default WaitingMobile;