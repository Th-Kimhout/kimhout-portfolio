"use client";
import React from "react";

const TitleBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-9 flex items-center px-4 bg-tn-bg-dark border-b border-tn-border select-none">
      {/* traffic lights */}
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 rounded-full bg-[#f7768e]" />
        <span className="w-3 h-3 rounded-full bg-[#e0af68]" />
        <span className="w-3 h-3 rounded-full bg-[#9ece6a]" />
      </div>
      <div className="flex-1 text-center text-xs sm:text-sm text-tn-fg-dim truncate px-2">
        kimhout-theam — portfolio
      </div>
      {/* spacer to balance the traffic lights */}
      <div className="w-[52px] hidden sm:block" />
    </header>
  );
};

export default TitleBar;
