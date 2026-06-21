"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import CodeHeading from "./ide/CodeHeading";
import CodeCard from "./ide/CodeCard";

const GITHUB_URL = "https://github.com/Th-Kimhout";

const fileName = (title) =>
  `${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.tsx`;

const TechList = ({ technologies }) => (
  <div className="flex flex-wrap gap-1.5">
    {technologies.map((tech, i) => (
      <span
        key={i}
        className="px-2 py-0.5 bg-tn-bg-dark tok-string text-xs rounded border border-tn-border"
      >
        &quot;{tech}&quot;
      </span>
    ))}
  </div>
);

const ProjectButtons = ({ project }) => (
  <div className="flex gap-2 mt-4">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2 bg-tn-bg-dark text-tn-fg rounded-lg border border-tn-border hover:border-tn-accent/60 transition-colors flex-1 text-xs sm:text-sm font-medium cursor-pointer"
    >
      <Github className="w-4 h-4" />
      Code
    </a>
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 px-3 py-2 bg-tn-comment text-tn-bg rounded-lg hover:opacity-90 transition-opacity flex-1 text-xs sm:text-sm font-semibold cursor-pointer"
    >
      <ExternalLink className="w-4 h-4" />
      Demo
    </a>
  </div>
);

const ProjectsSection = React.memo(() => {
  const { projects } = portfolioData;
  const [featured, second] = projects;

  const allTech = useMemo(
    () => [...new Set(projects.flatMap((p) => p.technologies))],
    [projects]
  );

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
    }),
    []
  );

  return (
    <section
      id="projects"
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <CodeHeading file="projects.json" title="Hands-On Projects" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(11rem,auto)] gap-4"
        >
          {/* Featured project — large tile */}
          {featured && (
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
            >
              <CodeCard
                title={fileName(featured.title)}
                badge="tsx"
                gutter
                className="h-full"
              >
                <div className="code-line">
                  <span className="tok-keyword">const</span>{" "}
                  <span className="tok-func">{featured.title}</span>{" "}
                  <span className="tok-fg">= {"{"}</span>
                </div>
                <div className="code-line tok-comment mt-1">
                  {"// "}
                  {featured.description}
                </div>
                <div className="code-line mt-2">
                  <span className="tok-func">tech</span>
                  <span className="tok-dim">:</span>
                </div>
                <div className="code-line mt-1">
                  <TechList technologies={featured.technologies} />
                </div>
                <div className="code-line tok-fg mt-2">{"}"}</div>
                <ProjectButtons project={featured} />
              </CodeCard>
            </motion.div>
          )}

          {/* Second project — medium tile */}
          {second && (
            <motion.div
              variants={itemVariants}
              className="sm:col-span-2 lg:col-span-2"
            >
              <CodeCard title={fileName(second.title)} badge="tsx" className="h-full">
                <div className="mb-2">
                  <span className="tok-keyword">const</span>{" "}
                  <span className="tok-func">{second.title}</span>
                </div>
                <p className="tok-comment text-xs sm:text-sm line-clamp-3 mb-3">
                  {"// "}
                  {second.description}
                </p>
                <TechList technologies={second.technologies} />
                <ProjectButtons project={second} />
              </CodeCard>
            </motion.div>
          )}

          {/* GitHub CTA tile */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <CodeCard href={GITHUB_URL} title="git remote" className="h-full">
              <div className="flex flex-col h-full justify-between">
                <p className="tok-comment text-xs">
                  {"// "}more on GitHub
                </p>
                <div className="flex items-center gap-2 mt-3 tok-accent font-semibold">
                  <Github className="w-5 h-5" />
                  <span className="text-sm">@Th-Kimhout</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </CodeCard>
          </motion.div>

          {/* Tech highlights tile */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <CodeCard title="stack.ts" badge="ts" className="h-full">
              <p className="tok-func text-xs mb-2">
                stack<span className="tok-dim"> = [</span>
              </p>
              <TechList technologies={allTech} />
              <span className="tok-dim text-xs">]</span>
            </CodeCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
