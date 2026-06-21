"use client";
import React from "react";
import { cn } from "@/lib/utils";

// A mini editor-window card: traffic-light header + filename, optional
// line-number gutter, Tokyo Night surface with a transform-only hover lift.
// Renders as <a> when `href` is given, otherwise a <div>.
const CodeCard = React.forwardRef(function CodeCard(
  { title, badge, gutter = false, href, className, headerRight, children, ...rest },
  ref
) {
  const interactive = Boolean(href);
  const Comp = href ? "a" : "div";

  return (
    <Comp
      ref={ref}
      href={href}
      {...(href
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-tn-border bg-tn-surface/70 shadow-lg backdrop-blur-sm",
        "transition-[transform,border-color,box-shadow] duration-200 ease-out",
        "hover:border-tn-accent/50 hover:-translate-y-1 hover:shadow-xl",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tn-accent",
        interactive && "cursor-pointer",
        className
      )}
      {...rest}
    >
      {/* window header */}
      <div className="flex items-center gap-2 h-8 px-3 border-b border-tn-border bg-tn-bg-dark/60 shrink-0">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f7768e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#e0af68]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#9ece6a]" />
        </span>
        {title && (
          <span className="ml-1 text-xs tok-dim truncate">{title}</span>
        )}
        {(badge || headerRight) && (
          <span className="ml-auto text-[10px] tok-dim shrink-0">
            {headerRight || badge}
          </span>
        )}
      </div>

      {/* body */}
      <div
        className={cn(
          "flex-1 p-4 sm:p-5 text-sm",
          gutter && "code-lines"
        )}
      >
        {children}
      </div>
    </Comp>
  );
});

export default CodeCard;
