"use client";

import { AlertCircle, MoveUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkspaceAlert() {
  return (
    <div className="mb-6 flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200">
      <div className="flex items-center gap-2">
        <div className="relative flex h-8 w-8 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-orange-600 opacity-30" />
          <div className="absolute inset-[-4px] rounded-full border-2 border-orange-600 opacity-20" />
          <AlertCircle className="relative h-5 w-5 text-orange-600" />
        </div>
        <span className="text-base">
          You have reached <strong>1 Workspaces</strong> limit as per{" "}
          <strong>Starter</strong> plan
        </span>
      </div>

      <Link
        href="#"
        className="flex items-center gap-4 text-gray-500 text-lg font-semibold"
      >
        Upgrade Plan
        <MoveUpRight className="size-5" />
      </Link>
    </div>
  );
}
