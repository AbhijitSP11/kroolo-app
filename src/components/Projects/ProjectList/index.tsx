"use client";

import { CalendarPlus, File, Flag, Layers, MoreHorizontal } from "lucide-react";
import { useState } from "react";

export default function ProjectList() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="min-w-full px-8">
      <table className="w-full table-auto">
        <thead>
          <tr className="border-b text-left text-[12.5px] text-gray-500">
            <th className="pb-2 font-medium">Project name</th>
            <th className="pb-2 font-medium">Status</th>
            <th className="pb-2 font-medium">Priority</th>
            <th className="pb-2 font-medium">Start date</th>
            <th className="pb-2 font-medium">End date</th>
            <th className="pb-2 font-medium">Task Progress</th>
            <th className="pb-2 font-medium">Owner</th>
            <th className="pb-2 font-medium"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="py-3 w-[40%]">
              <div className="flex items-center gap-3">
                  <Layers className="size-6 text-pink-600" />
                <span className="font-medium">Demo Project</span>
              </div>
            </td>
            <td>
              <button className="rounded-md px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
                <File className="size-5"/>
              </button>
            </td>
            <td>
              <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
                <Flag className="size-5" />
              </button>
            </td>
            <td>
              <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm text-gray-500  hover:bg-gray-50">
                <CalendarPlus className="size-5" />
              </button>
            </td>
            <td>
              <button className="flex items-center gap-1 rounded-md px-3 py-1 text-sm text-gray-500 hover:bg-gray-50">
              <CalendarPlus className="size-5" />
              </button>
            </td>
            <td>
              <div className="flex items-center gap-2">
                <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
                  <div className="h-full w-0 rounded-full bg-indigo-500 transition-all duration-300" />
                </div>
                <span className="text-sm">0%</span>
              </div>
            </td>
            <td>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-sm font-medium text-white">
                A
              </div>
            </td>
            <td className="relative">
              <button 
                onClick={() => setShowDropdown(!showDropdown)}
                className="rounded-md p-1 hover:bg-gray-100"
              >
                <MoreHorizontal className="size-5" />
              </button>
              {showDropdown && (
                <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-md border bg-white py-1 shadow-lg">
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                    Edit Project
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                    Duplicate Project
                  </button>
                  <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50">
                    Delete Project
                  </button>
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}