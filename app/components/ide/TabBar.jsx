"use client";
import React from "react";
import { fileTree } from "@/lib/ide-data";
import { scrollToSection } from "./nav";
import { useActiveSection } from "./useActiveSection";

const TabBar = () => {
  const active = useActiveSection();

  return (
    <div className="fixed top-9 left-0 lg:left-60 right-0 z-30 h-10 flex items-stretch bg-tn-bg-dark border-b border-tn-border overflow-x-auto no-scrollbar">
      {fileTree.map((file) => {
        const isActive = active === file.id;
        return (
          <button
            key={file.id}
            onClick={() => scrollToSection(file.id)}
            className={`group flex items-center gap-2 px-3 sm:px-4 text-xs sm:text-sm border-r border-tn-border whitespace-nowrap transition-colors ${
              isActive
                ? "bg-tn-bg text-tn-fg border-t-2 border-t-tn-accent"
                : "text-tn-fg-dim hover:text-tn-fg border-t-2 border-t-transparent"
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: isActive ? file.color : "transparent" }}
            />
            {file.name}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
