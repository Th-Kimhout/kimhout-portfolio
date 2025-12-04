"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/lib/portfolio-data";

const SkillsSection = () => {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState(skills.tabs[0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            Tools and Skills
          </span>
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {skills.tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                activeTab === tab
                  ? "bg-gradient-to-r from-slate-600 to-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-gray-800 text-gray-300 border border-slate-500/30 hover:border-blue-500/20"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Tools Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tools</h3>
            {skills.tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, x: 10 }}
                className="bg-gray-900/50 border border-slate-500/30 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-500/20 transition-all shadow-lg hover:shadow-blue-500/10 flex items-center gap-3 sm:gap-4"
              >
                <span className="text-3xl sm:text-4xl">{tool.icon}</span>
                <span className="text-lg sm:text-xl text-white font-semibold">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Skills</h3>
            {skills.skillsByCategory[activeTab]?.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-white font-semibold">{skill.name}</span>
                  <span className="text-sm sm:text-base text-sky-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="h-2.5 sm:h-3 bg-gray-800 rounded-full overflow-hidden border border-slate-500/30">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

