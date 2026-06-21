"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Download } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import CodeHeading from "./ide/CodeHeading";
import CodeCard from "./ide/CodeCard";

const AboutSection = React.memo(() => {
  const { about, personal } = portfolioData;

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
      id="about"
      className="relative py-12 sm:py-16 px-4 sm:px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto w-full">
        <CodeHeading
          file="about.md"
          title={`${about.heading} ${about.headingHighlight}`}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[minmax(8rem,auto)] gap-4"
        >
          {/* Profile tile — tall */}
          <motion.div
            variants={itemVariants}
            className="sm:col-span-2 lg:col-span-1 lg:row-span-2"
          >
            <CodeCard title="profile.png" className="h-full">
              <div className="relative w-full h-full min-h-[14rem] rounded-lg overflow-hidden profile-image-container">
                <Image
                  src={personal.profileImage}
                  alt={personal.name}
                  fill
                  loading="lazy"
                  className="object-cover profile-image-enhanced relative z-10"
                />
                <div className="blue-tint-overlay"></div>
              </div>
            </CodeCard>
          </motion.div>

          {/* Description tile — wide */}
          <motion.div variants={itemVariants} className="sm:col-span-2 lg:col-span-2">
            <CodeCard title="bio.md" badge="md" className="h-full">
              <p className="text-sm sm:text-base text-tn-fg leading-relaxed">
                <span className="tok-comment">{"/* "}</span>
                {about.description}
                <span className="tok-comment">{" */"}</span>
              </p>
            </CodeCard>
          </motion.div>

          {/* Stats tile */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <CodeCard title="stats.ts" className="h-full">
              <div className="flex gap-6 h-full items-center font-mono">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold tok-accent">
                    {about.stats.yearsExperience}
                  </p>
                  <p className="text-xs tok-dim">
                    years <span className="tok-keyword">exp</span>
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold tok-accent">
                    {about.stats.projectsCount}
                  </p>
                  <p className="text-xs tok-dim">
                    projects <span className="tok-keyword">shipped</span>
                  </p>
                </div>
              </div>
            </CodeCard>
          </motion.div>

          {/* CV download tile */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <CodeCard
              href={about.buttons.cv.href}
              title="resume.pdf"
              className="h-full"
            >
              <div className="flex flex-col h-full justify-between">
                <p className="tok-comment text-xs">{"// "}download my CV</p>
                <div className="flex items-center gap-2 mt-3 tok-accent font-semibold">
                  <Download className="w-5 h-5" />
                  <span className="text-sm">{about.buttons.cv.text}</span>
                </div>
              </div>
            </CodeCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
