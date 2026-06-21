"use client";
import React, { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown, TerminalSquare, X } from "lucide-react";
import {
  terminalCommands,
  terminalPrompt,
  terminalBoot,
} from "@/lib/ide-data";
import { scrollToSection } from "./nav";

const Terminal = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  // history: array of { type: 'input' | 'output', text }
  const [history, setHistory] = useState(() =>
    terminalBoot.map((text) => ({ type: "output", text }))
  );
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [history, open]);

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const entries = [{ type: "input", text: cmd }];
    const def = terminalCommands[cmd];

    if (!def) {
      entries.push({
        type: "output",
        text: `command not found: ${cmd} — type \`help\``,
      });
      setHistory((h) => [...h, ...entries]);
      return;
    }

    if (def.clear) {
      setHistory([]);
      return;
    }
    if (def.navigate) {
      entries.push({ type: "output", text: `→ opening ${def.navigate}…` });
      scrollToSection(def.navigate);
    }
    if (def.open) {
      entries.push({ type: "output", text: `→ ${def.open}` });
      window.open(def.open, "_blank");
    }
    if (def.output) {
      def.output.forEach((line) => entries.push({ type: "output", text: line }));
    }
    setHistory((h) => [...h, ...entries]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    run(input);
    setInput("");
  };

  return (
    <section
      className="fixed left-0 lg:left-60 right-0 bottom-7 z-40 bg-tn-bg-dark border-t border-tn-border"
      aria-label="Terminal panel"
    >
      {/* Panel header */}
      <div className="flex items-center justify-between h-9 px-3 border-b border-tn-border">
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1.5 text-tn-fg border-b-2 border-tn-accent h-9 px-1">
            <TerminalSquare className="w-3.5 h-3.5" /> TERMINAL
          </span>
          <span className="text-tn-fg-dim hidden sm:inline">OUTPUT</span>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          className="text-tn-fg-dim hover:text-tn-fg p-1"
          aria-label={open ? "Collapse terminal" : "Expand terminal"}
        >
          {open ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronUp className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Panel body */}
      {open && (
        <div
          ref={bodyRef}
          onClick={() => inputRef.current?.focus()}
          className="h-44 sm:h-52 overflow-y-auto px-3 py-2 text-xs sm:text-sm leading-relaxed"
        >
          {history.map((line, i) =>
            line.type === "input" ? (
              <div key={i} className="flex gap-2">
                <span className="tok-comment shrink-0">{terminalPrompt}</span>
                <span className="tok-fg">{line.text}</span>
              </div>
            ) : (
              <div key={i} className="tok-dim whitespace-pre-wrap pl-1">
                {line.text}
              </div>
            )
          )}
          <form onSubmit={onSubmit} className="flex gap-2 mt-1">
            <span className="tok-comment shrink-0">{terminalPrompt}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              autoComplete="off"
              className="flex-1 bg-transparent outline-none text-tn-fg caret-tn-accent"
              aria-label="Terminal input"
            />
          </form>
        </div>
      )}
    </section>
  );
};

export default Terminal;
