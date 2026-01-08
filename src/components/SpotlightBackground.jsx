import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function SpotlightBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black/[0.96] overflow-hidden">
      <Spotlight className='w-full h-full'/>
      {/* Optional subtle overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />
    </div>
  );
}

