"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/lib/portfolio-data";

const AboutSection = () => {
  const { about, personal } = portfolioData;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section
      id="about"
      className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-lg overflow-hidden border-4 border-slate-500/30 shadow-[0_0_50px_rgba(100,116,139,0.3)] profile-image-container">
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                className="object-cover profile-image-enhanced relative z-10"
              />
              <div className="blue-tint-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/15 via-blue-500/8 to-transparent z-20"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/15 via-transparent to-transparent z-20"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="text-white space-y-4 sm:space-y-6 order-1 md:order-2 text-center md:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-bold"
            >
              {about.heading}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                {about.headingHighlight}
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed"
            >
              {about.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 flex-wrap justify-center md:justify-start"
            >
              {/* <motion.a
                href={about.buttons.portfolio.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:shadow-blue-500/30 transition-all"
              >
                {about.buttons.portfolio.text}
              </motion.a> */}
              <motion.a
                href={about.buttons.cv.href}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-800 text-white rounded-lg font-semibold text-sm sm:text-base border border-blue-500/20 hover:bg-slate-900/20 transition-all"
              >
                {about.buttons.cv.text}
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 sm:gap-8 pt-4 justify-center md:justify-start"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-sky-400">
                  {about.stats.yearsExperience}
                </p>
                <p className="text-sm sm:text-base text-gray-400">
                  Years <span className="text-blue-500">Experience</span>
                </p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-sky-400">
                  {about.stats.projectsCount}
                </p>
                <p className="text-sm sm:text-base text-gray-400">
                  Projects <span className="text-blue-500">Github</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
