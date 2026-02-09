import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="relative min-h-screen">
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
