"use client";
import React, { useCallback, useMemo } from "react";
import { GradualSpacing } from "@/components/eldoraui/gradualspacing";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";

const HeroSection = React.memo(() => {
  const { personal } = portfolioData;

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <section className="relative z-10 text-white font-roboto min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-32">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-24 justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col space-y-4 sm:space-y-6 md:space-y-8 w-full md:w-auto text-center md:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg sm:text-xl md:text-2xl text-gray-400"
            >
              {personal.name}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hey, I am{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-blue-500">
                  {personal.title}
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                  {personal.tagline}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto md:mx-0 text-gray-300 leading-relaxed"
            >
              {personal.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="pt-2 sm:pt-4 flex justify-center md:justify-start"
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="cursor-pointer px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-600 to-blue-600 text-white rounded-lg font-semibold text-base sm:text-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-300 ease-out w-full sm:w-auto"
              >
                Read More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full md:w-auto flex justify-center"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-full max-w-[20rem] sm:max-w-[24rem] md:w-[26rem] h-auto rounded-xl p-4 sm:p-6 shadow-[0_20px_50px_rgba(100,116,139,0.2)] border border-slate-500/30">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white relative profile-image-container rounded-lg overflow-hidden"
                >
                  <Image
                    src={personal.profileImage}
                    width={500}
                    height={500}
                    alt={personal.name}
                    priority
                    className="rounded-lg profile-image-enhanced relative z-10"
                  />
                  <div className="blue-tint-overlay"></div>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            whileHover={{ y: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="text-sky-400 hover:text-sky-300 transition-colors duration-300"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
