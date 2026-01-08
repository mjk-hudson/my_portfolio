import React from "react";
import { Outlet } from "react-router-dom";
import SpotlightBackground from "../components/SpotlightBackground";

export default function HomeLayout() {
  return (
    <div className="relative min-h-screen">
      <SpotlightBackground />
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
