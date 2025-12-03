"use client";

import React from "react";
import { X } from "lucide-react";
import content from "@/data/contents";
import Image from "next/image";
import { SidebarProps } from "@/types/sidebar";
import Navigation from "./navigation/Navigation";

const Sidebar: React.FC<SidebarProps> = ({
  selectedConcept,
  setSelectedConcept,
  completedLessons,
  sidebarOpen,
  setSidebarOpen,
}) => {
  const totalLessons = Object.values(content).reduce((acc, cat) => acc + cat.lessons.length, 0);
  const completedTotal = completedLessons.size;
  const totalProgress = Math.round((completedTotal / totalLessons) * 100);

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 w-64 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:static lg:w-72 xl:w-80 ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} flex flex-col lg:h-screen`}
    >
      <div className="border-b border-gray-200 p-4 lg:p-6">
        <div className="flex items-center justify-between lg:justify-start">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" width={50} height={40} alt="logo" />
            <div className="flex flex-col">
              <span className="text-md font-bold text-gray-800 lg:text-2xl">
                O&apos;zbekcha Vim
              </span>
              <p className="mt-1 text-xs text-gray-500 lg:text-sm">
                Bosqichma-bosqich, ko‘k choy ichib o‘rganamiz
              </p>
            </div>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer rounded-lg p-2 text-black hover:bg-gray-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <Navigation
        selectedConcept={selectedConcept}
        setSelectedConcept={setSelectedConcept}
        setSidebarOpen={setSidebarOpen}
        completedLessons={completedLessons}
      />

      <div className="p-3">
        <div className="mt-4 rounded-lg bg-green-50 p-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-600">Umumiy progress</span>
            <span className="text-xs font-bold text-[#309C34]">{totalProgress}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-200">
            <div
              className="h-2 rounded-full bg-[#309C34] transition-all duration-500"
              style={{ width: `${totalProgress}%` }}
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            {completedTotal} / {totalLessons} dars
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
