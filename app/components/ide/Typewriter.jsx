"use client";
import React, { useEffect, useState } from "react";

// Types `text` char-by-char, then calls onDone. `start` gates when typing
// begins so multiple Typewriters can run as a sequence.
const Typewriter = ({
  text,
  speed = 28,
  start = true,
  onDone,
  className = "",
  showCursor = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (count >= text.length) {
      onDone?.();
      return;
    }
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [count, start, text.length, speed, onDone]);

  return (
    <span className={className}>
      {text.slice(0, count)}
      {showCursor && count >= text.length && (
        <span className="cursor-blink">.</span>
      )}
    </span>
  );
};

export default Typewriter;
