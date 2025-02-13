"use client";
import NavBar from "@/components/back-office/NavBar";
import Sidebar from "@/components/back-office/Sidebar";
import { useState } from "react";

export default function Layout({ children }) {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const toggleSideBar = () => {
    setSideBarOpen((prev) => !prev);
  };
  return (
    <div className="flex ">
      {/* sidebar */}
      <Sidebar isOpen={sideBarOpen} />
      <div className="w-full">
        {/* header */}
        <NavBar toggleSideBar={toggleSideBar} />
        <main className="md:ml-60 mt-16 p-8 dark:bg-slate-900 bg-slate-200 text-slate-50 min-h-screen">
          {children}
        </main>
      </div>
      {/* Main body */}
    </div>
  );
}
