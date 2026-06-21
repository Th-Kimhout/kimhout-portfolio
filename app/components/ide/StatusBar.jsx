"use client";
import React from "react";
import { GitBranch, Check } from "lucide-react";
import { useActiveSection } from "./useActiveSection";
import { sectionToFile } from "@/lib/ide-data";

const StatusBar = () => {
  const active = useActiveSection();
  const file = sectionToFile[active] || "_hero.tsx";
  const lang = file.endsWith(".json")
    ? "JSON"
    : file.endsWith(".md")
    ? "Markdown"
    : "TypeScript";

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-7 flex items-center justify-between px-3 text-[11px] sm:text-xs text-tn-bg bg-tn-func select-none">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <GitBranch className="w-3.5 h-3.5" /> main
        </span>
        <span className="hidden sm:flex items-center gap-1">
          <Check className="w-3.5 h-3.5" /> 0 errors
        </span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden sm:inline">Ln 1, Col 1</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>{lang}</span>
        <span className="hidden sm:inline">Roboto Mono</span>
      </div>
    </footer>
  );
};

export default StatusBar;
