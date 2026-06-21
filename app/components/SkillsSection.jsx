"use client";
import React, { useState, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio-data";
import CodeHeading from "./ide/CodeHeading";
import CodeCard from "./ide/CodeCard";

const SkillsSection = React.memo(() => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState(skills.tabs[0]);

  const handleTabChange = useCallback((tab) => setActiveTab(tab), []);

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
      },
    }),
    []
  );

  const activeSkills = skills.skillsByCategory[activeTab] || [];

  return (
    <section
      id="skills"
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <CodeHeading file="skills.json" title="Tools & Skills" />

        {/* Editor-style tabs */}
        <div className="flex flex-wrap gap-1 mb-6 border-b border-tn-border">
          {skills.tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-4 py-2 text-sm font-medium border-t-2 transition-colors cursor-pointer ${
                activeTab === tab
                  ? "bg-tn-bg border-t-tn-accent text-tn-fg"
                  : "border-t-transparent text-tn-fg-dim hover:text-tn-fg"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(7rem,auto)] gap-4"
        >
          {/* Skill bars — wide tile */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-2 lg:row-span-2"
          >
            <CodeCard title={`${activeTab.toLowerCase()}.json`} badge="json" className="h-full">
              <div className="space-y-4">
                {activeSkills.map((skill, index) => (
                  <div key={`${activeTab}-${skill.name}`} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-tn-fg font-medium">{skill.name}</span>
                      <span className="tok-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2.5 bg-tn-bg-dark rounded-full overflow-hidden border border-tn-border">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.8, delay: index * 0.08 }}
                        className="h-full rounded-full bg-gradient-to-r from-tn-keyword to-tn-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CodeCard>
          </motion.div>

          {/* Tool tiles — 2x2 */}
          {skills.tools.map((tool, index) => (
            <motion.div key={index} variants={itemVariants} className="lg:col-span-1">
              <CodeCard title={`tool_${index + 1}`} className="h-full">
                <div className="flex flex-col items-center justify-center text-center h-full gap-2 py-2">
                  <span className="text-3xl sm:text-4xl">{tool.icon}</span>
                  <span className="text-sm text-tn-fg font-semibold">
                    {tool.name}
                  </span>
                </div>
              </CodeCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";

export default SkillsSection;
