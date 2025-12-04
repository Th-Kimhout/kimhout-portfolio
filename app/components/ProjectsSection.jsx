"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const ProjectsSection = () => {
  const { projects } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
            Hands-On Projects
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="w-full h-full"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900/50 relative group border border-slate-500/30 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:border-blue-500/20 transition-all flex flex-col h-full min-h-[350px] sm:min-h-[400px] shadow-lg hover:shadow-blue-500/10"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 flex-grow min-h-[50px] sm:min-h-[60px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-slate-500/15 text-slate-300 text-xs rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-slate-600 transition-colors flex-1 text-xs sm:text-sm font-medium border border-gray-700 hover:border-slate-500"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-lg hover:from-slate-700 hover:to-blue-700 transition-all flex-1 text-xs sm:text-sm font-medium"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Demo
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

