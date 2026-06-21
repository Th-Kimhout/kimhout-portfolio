"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import CodeHeading from "./ide/CodeHeading";
import CodeCard from "./ide/CodeCard";

const TimelineCard = ({ icon: Icon, file, label, items, labelKey, variants }) => (
  <motion.div variants={variants} className="h-full">
    <CodeCard
      title={file}
      gutter
      headerRight={
        <span className="flex items-center gap-1 tok-dim">
          <Icon className="w-3.5 h-3.5 tok-accent" />
          {label}
        </span>
      }
      className="h-full"
    >
      {items.map((item, index) => (
        <div key={index} className="code-line py-2 first:pt-0">
          <p className="tok-string text-xs mb-0.5">{item.date}</p>
          <h4 className="text-sm sm:text-base font-semibold text-tn-fg">
            {item.title}
          </h4>
          <p className="text-xs sm:text-sm tok-dim">{item[labelKey]}</p>
        </div>
      ))}
    </CodeCard>
  </motion.div>
);

const EducationSection = React.memo(() => {
  const { education, experience } = portfolioData;

  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
      id="education"
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <CodeHeading file="education.md" title="Academic & Professional Journey" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-start"
        >
          <TimelineCard
            icon={GraduationCap}
            file="education.md"
            label="education"
            items={education}
            labelKey="institution"
            variants={itemVariants}
          />
          <TimelineCard
            icon={Briefcase}
            file="experience.md"
            label="experience"
            items={experience}
            labelKey="company"
            variants={itemVariants}
          />
        </motion.div>
      </div>
    </section>
  );
});

EducationSection.displayName = "EducationSection";

export default EducationSection;
