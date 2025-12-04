"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const EducationSection = () => {
  const { education, experience } = portfolioData;

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="education" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            My Academic and Professional Journey
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Education Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">Education</h3>
            </div>
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gray-900/50 border border-slate-500/30 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-500/20 transition-all shadow-lg hover:shadow-blue-500/10"
              >
                <p className="text-sky-400 text-xs sm:text-sm mb-2">{item.date}</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-400">{item.institution}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Professional Experience Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Professional Experience
              </h3>
            </div>
            {experience.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02, x: 10 }}
                className="bg-gray-900/50 border border-slate-500/30 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:border-blue-500/20 transition-all shadow-lg hover:shadow-blue-500/10"
              >
                <p className="text-sky-400 text-xs sm:text-sm mb-2">{item.date}</p>
                <h4 className="text-lg sm:text-xl font-semibold text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-400">{item.company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

