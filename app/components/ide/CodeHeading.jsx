"use client";
import React from "react";
import { motion } from "framer-motion";

// A section heading styled like a code-comment with a filename tag,
// matching the IDE vibe. `file` e.g. "about.md", `title` the heading text.
const CodeHeading = ({ file, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-8 sm:mb-12"
    >
      <div className="inline-flex items-center gap-2 text-xs tok-dim mb-3">
        <span className="px-2 py-0.5 rounded bg-tn-surface border border-tn-border">
          {file}
        </span>
      </div>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        <span className="tok-comment">{"// "}</span>
        <span className="tok-fg">{title}</span>
      </h2>
    </motion.div>
  );
};

export default CodeHeading;
