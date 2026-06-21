"use client";
import React, { useState, useMemo } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import Typewriter from "./ide/Typewriter";
import { scrollToSection } from "./ide/nav";

const HeroSection = React.memo(() => {
  const { personal } = portfolioData;
  const [step, setStep] = useState(0);

  // Flattened terminal sequence: alternating command / output rows.
  const rows = useMemo(
    () => [
      { kind: "cmd", text: "whoami" },
      { kind: "out", text: personal.name },
      { kind: "cmd", text: "cat role.txt" },
      { kind: "out", text: `${personal.title} — ${personal.tagline}` },
      { kind: "cmd", text: "cat about.txt" },
      { kind: "out", text: personal.description },
    ],
    [personal]
  );

  const advance = (i) => setStep((s) => (s === i ? i + 1 : s));
  const done = step >= rows.length;

  return (
    <section
      id="home"
      className="relative z-10 min-h-[calc(100dvh-140px)] flex items-center justify-center px-4 sm:px-6 md:px-8 py-10 sm:py-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 justify-center">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:flex-1 rounded-xl overflow-hidden border border-tn-border bg-tn-bg-dark shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
          >
            {/* window header */}
            <div className="flex items-center gap-2 px-4 h-9 border-b border-tn-border bg-tn-bg">
              <span className="w-3 h-3 rounded-full bg-[#f7768e]" />
              <span className="w-3 h-3 rounded-full bg-[#e0af68]" />
              <span className="w-3 h-3 rounded-full bg-[#9ece6a]" />
              <span className="ml-3 text-xs text-tn-fg-dim">bash — kimhout</span>
            </div>

            {/* terminal body */}
            <div className="p-4 sm:p-6 text-sm sm:text-base min-h-[18rem] sm:min-h-[20rem] leading-relaxed">
              {rows.map((row, i) =>
                step < i ? null : row.kind === "cmd" ? (
                  <div key={i} className="flex gap-2 mt-2 first:mt-0">
                    <span className="tok-comment shrink-0">
                      kimhout@portfolio:~$
                    </span>
                    <Typewriter
                      text={row.text}
                      start={step >= i}
                      speed={32}
                      onDone={() => advance(i)}
                      className="tok-fg"
                    />
                  </div>
                ) : (
                  <div key={i} className="pl-1 mt-1">
                    <Typewriter
                      text={row.text}
                      start={step >= i}
                      speed={10}
                      onDone={() => advance(i)}
                      className={i === 1 ? "tok-accent" : "tok-dim"}
                    />
                  </div>
                )
              )}

              {done && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-5"
                >
                  <button
                    onClick={() => scrollToSection("about")}
                    className="group flex gap-2 items-center text-left"
                  >
                    <span className="tok-comment">kimhout@portfolio:~$</span>
                    <span className="tok-keyword group-hover:underline">
                      cd about/
                    </span>
                    <span className="cursor-blink">.</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Profile panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-auto flex justify-center"
          >
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-full max-w-[18rem] sm:max-w-[22rem] h-auto rounded-xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-tn-border bg-tn-surface/40">
                <CardItem
                  translateZ="50"
                  className="relative profile-image-container rounded-lg overflow-hidden"
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
                <CardItem
                  translateZ="30"
                  className="mt-3 text-xs tok-dim font-mono"
                >
                  <span className="tok-keyword">const</span>{" "}
                  <span className="tok-func">dev</span> ={" "}
                  <span className="tok-string">&quot;{personal.name}&quot;</span>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: "reverse", duration: 2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <button
            onClick={() => scrollToSection("about")}
            className="text-tn-accent hover:text-tn-fg transition-colors"
            aria-label="Scroll to about"
          >
            <ArrowDown className="w-7 h-7" />
          </button>
        </motion.div>
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
