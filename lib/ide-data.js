// lib/ide-data.js
// Central wiring for the IDE-style shell: the sidebar file tree and the
// bottom terminal's command map. Content itself lives in portfolio-data.js.

// Files shown in the explorer sidebar. `id` matches a section element id
// (used by scrollToSection); `home` scrolls to the top.
export const fileTree = [
  { name: "_hero.tsx", id: "home", lang: "tsx", color: "var(--tn-func)" },
  { name: "about.md", id: "about", lang: "md", color: "var(--tn-accent)" },
  { name: "education.md", id: "education", lang: "md", color: "var(--tn-accent)" },
  { name: "skills.json", id: "skills", lang: "json", color: "var(--tn-string)" },
  { name: "projects.json", id: "projects", lang: "json", color: "var(--tn-string)" },
];

// Map a section id back to the "open file" label for the tab bar.
export const sectionToFile = fileTree.reduce((acc, f) => {
  acc[f.id] = f.name;
  return acc;
}, {});

// Terminal commands. A command either navigates (scrolls to a section id),
// opens a url, or prints static output lines.
export const terminalPrompt = "kimhout@portfolio:~$";

export const terminalCommands = {
  help: {
    description: "List available commands",
    output: [
      "Available commands:",
      "  about       → jump to the about section",
      "  education   → jump to education & experience",
      "  skills      → jump to skills",
      "  projects    → jump to projects",
      "  cv          → download my CV",
      "  clear       → clear the terminal",
    ],
  },
  about: { description: "Go to about", navigate: "about" },
  education: { description: "Go to education", navigate: "education" },
  skills: { description: "Go to skills", navigate: "skills" },
  projects: { description: "Go to projects", navigate: "projects" },
  cv: { description: "Download CV", open: "/kimhout-cv.pdf" },
  whoami: { description: "Who am I", output: ["Kimhout Theam — Software Developer"] },
  clear: { description: "Clear the terminal", clear: true },
};

// The boot lines printed when the terminal first mounts.
export const terminalBoot = [
  "Welcome to kimhout.dev — type `help` to get started.",
];
