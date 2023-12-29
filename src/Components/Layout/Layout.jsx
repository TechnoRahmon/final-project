import React from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Header />

      <div className="p-4 mt-10 w-full">
        <Outlet />
      </div>
    </div>
  );
}
