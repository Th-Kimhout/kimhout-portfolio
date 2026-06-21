"use client";
import React, { useState } from "react";
import { Menu, X, ChevronDown, Files } from "lucide-react";
import { fileTree } from "@/lib/ide-data";
import { scrollToSection } from "./nav";
import { useActiveSection } from "./useActiveSection";
import Github from "../icon/Github";
import Linkedin from "../icon/LinkedIn";
import Telegram from "../icon/Telegram";

const FileList = ({ active, onPick }) => (
  <nav className="px-1 py-2 text-sm">
    <div className="flex items-center gap-1 px-2 py-1 text-tn-fg-dim">
      <ChevronDown className="w-4 h-4" />
      <span className="font-semibold tracking-wide text-xs">
        KIMHOUT-PORTFOLIO
      </span>
    </div>
    <ul className="mt-1">
      {fileTree.map((file) => {
        const isActive = active === file.id;
        return (
          <li key={file.id}>
            <button
              onClick={() => onPick(file.id)}
              className={`group w-full flex items-center gap-2 pl-6 pr-2 py-1.5 rounded text-left transition-colors ${
                isActive
                  ? "bg-tn-bg-highlight text-tn-fg"
                  : "text-tn-fg-dim hover:text-tn-fg hover:bg-tn-bg-highlight/50"
              }`}
            >
              <Files
                className="w-3.5 h-3.5 shrink-0"
                style={{ color: file.color }}
              />
              <span className="truncate">{file.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  </nav>
);

const Socials = () => (
  <div className="mt-auto border-t border-tn-border px-4 py-3 flex items-center gap-4">
    <a
      href="https://github.com/Th-Kimhout"
      target="_blank"
      rel="noopener noreferrer"
      className="text-tn-fg-dim hover:text-tn-accent transition-colors"
      aria-label="GitHub"
    >
      <Github width={20} height={20} />
    </a>
    <a
      href="https://t.me/Th_Kimhout"
      className="text-tn-fg-dim hover:text-tn-accent transition-colors"
      aria-label="Telegram"
    >
      <Telegram width={20} height={20} />
    </a>
    <a
      href="https://www.linkedin.com/in/kimhout-theam-21ba6b344/"
      className="text-tn-fg-dim hover:text-tn-accent transition-colors"
      aria-label="LinkedIn"
    >
      <Linkedin width={20} height={20} />
    </a>
  </div>
);

const Sidebar = () => {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  const pick = (id) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="lg:hidden fixed top-1.5 right-3 z-[60] p-1.5 text-tn-fg-dim hover:text-tn-fg"
        aria-label="Toggle explorer"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-9 bottom-7 w-60 z-40 bg-tn-bg-dark border-r border-tn-border">
        <div className="px-3 pt-2 text-[11px] tracking-widest text-tn-fg-dim uppercase">
          Explorer
        </div>
        <FileList active={active} onPick={pick} />
        <Socials />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="lg:hidden flex flex-col fixed left-0 top-9 bottom-7 w-64 z-50 bg-tn-bg-dark border-r border-tn-border">
            <div className="px-3 pt-2 text-[11px] tracking-widest text-tn-fg-dim uppercase">
              Explorer
            </div>
            <FileList active={active} onPick={pick} />
            <Socials />
          </aside>
        </>
      )}
    </>
  );
};

export default Sidebar;
