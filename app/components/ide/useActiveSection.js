"use client";
import { useEffect, useState } from "react";
import { fileTree } from "@/lib/ide-data";

// Single shared scroll source for all chrome (sidebar, tab bar, status bar).
// One scroll listener total, rAF-throttled, so layout reads happen at most
// once per frame no matter how many components subscribe.
let activeId = fileTree[0].id;
const subscribers = new Set();
let started = false;
let ticking = false;

function compute() {
  ticking = false;
  let next;
  if (window.scrollY < 200) {
    next = "home";
  } else {
    const marker = window.innerHeight * 0.35;
    next = "home";
    for (const { id } of fileTree) {
      if (id === "home") continue;
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= marker) next = id;
    }
  }
  if (next !== activeId) {
    activeId = next;
    subscribers.forEach((fn) => fn(activeId));
  }
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(compute);
  }
}

function ensureStarted() {
  if (started || typeof window === "undefined") return;
  started = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  compute();
}

export function useActiveSection() {
  const [active, setActive] = useState(activeId);

  useEffect(() => {
    ensureStarted();
    subscribers.add(setActive);
    setActive(activeId);
    return () => subscribers.delete(setActive);
  }, []);

  return active;
}
