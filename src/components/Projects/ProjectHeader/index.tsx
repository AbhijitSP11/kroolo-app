"use client";

import { DownloadCloud, Plus } from "lucide-react";

export default function ProjectHeader() {
  return (
    <div className="flex items-center justify-between px-4 -mt-2">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-lg">Projects</h1>
          <span className="rounded-full bg-gray-100 px-2 text-[13px] text-gray-600">
            1
          </span>
        </div>
        <p className="mt-1 text-[13px] text-gray-500">
          Manage all projects within this Workspace.
        </p>
      </div>
      
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-md border border-gray-200 px-4 py-2 text-[13px] font-medium hover:bg-gray-50">
          <DownloadCloud className="size-5" />
          Import Project
        </button>
        <button className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-[13px] font-medium text-white hover:bg-indigo-700">
          <Plus className="h-4 w-4" />
          Create Project
        </button>
      </div>
    </div>
  );
}