"use client";

import { List, ListFilter, Search, SlidersHorizontal } from "lucide-react";
import ProjectHeader from "@/components/Projects/ProjectHeader";
import ProjectList from "@/components/Projects/ProjectList";

export default function ProjectsOverview() {
  return (
     <div className="flex-1 rounded-lg bg-white overflow-hidden flex flex-col">
    <ProjectHeader />

    <div className="flex items-center justify-between px-6 py-2 border-b border-gray-200">
      <div className="relative">
        <button className="flex items-center gap-2 text-lg font-medium text-gray-700 hover:text-indigo-500 focus:outline-none">
         <List className="size-6"/>
         <p>List</p> 
        </button>
        <span className="absolute top-[35px] bottom-0 left-0 h-[2px] w-full bg-indigo-500" />
      </div>

      <div className="flex items-center gap-4">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search project"
            className="w-64 rounded-md border border-gray-200 py-2 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <button className="flex gap-2 items-center rounded-md border border-gray-200 p-2 hover:bg-gray-50">
          <ListFilter className="h-4 w-4" />
          Filters
        </button>
      </div>
    </div>

    <div className="py-2">
      <ProjectList />
    </div>
    <div className="px-6 text-gray-500 flex gap-2 items-center">
      <p className="text-xl">+</p>
      <p className="text-[13px]">Create Project</p>
    </div>
  </div>
  );
}