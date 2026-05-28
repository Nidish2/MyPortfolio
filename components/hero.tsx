"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, BadgeCheck } from "lucide-react";

const HERO_WORDS = [
  "Web Developer",
  "Problem Solver",
  "CS Engineer",
  "MERN Stack Developer",
];

const HERO_METRICS = [
  { value: "9.08", label: "CGPA" },
  { value: "3+", label: "Full-stack projects" },
  { value: "5", label: "Hackathons" },
  { value: "8+", label: "Certifications" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        top: `${(i * 37) % 100}%`,
        left: `${(i * 53) % 100}%`,
        animationDelay: `${(i % 9) * 0.35}s`,
        animationDuration: `${2 + (i % 6) * 0.28}s`,
      })),
    [],
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = heroRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    element.style.setProperty("--hero-rotate-x", `${(-y * 8).toFixed(2)}deg`);
    element.style.setProperty("--hero-rotate-y", `${(x * 10).toFixed(2)}deg`);
    element.style.setProperty("--hero-shift-x", `${(x * 18).toFixed(2)}px`);
    element.style.setProperty("--hero-shift-y", `${(y * 18).toFixed(2)}px`);
  };

  const resetPointerTilt = () => {
    const element = heroRef.current;
    if (!element) return;

    element.style.setProperty("--hero-rotate-x", "0deg");
    element.style.setProperty("--hero-rotate-y", "0deg");
    element.style.setProperty("--hero-shift-x", "0px");
    element.style.setProperty("--hero-shift-y", "0px");
  };

  useEffect(() => {
    if (!isMounted) return;

    const typeSpeed = isDeleting ? 50 : 100;
    const word = HERO_WORDS[currentWordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === word) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % HERO_WORDS.length);
      } else {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1),
        );
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, isMounted]);

  return (
    <div
      ref={heroRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointerTilt}
      className="hero-stage relative min-h-[100svh] w-full overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Background - Adapts perfectly to light/dark mode */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] transition-colors duration-500"></div>
      <div className="surface-grid absolute inset-0 opacity-70"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-foreground/20 dark:bg-white/20 rounded-full animate-pulse"
            style={{
              top: particle.top,
              left: particle.left,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="hero-tilt grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-10"
        >
          <div className="text-center lg:text-left">
            <div className="mb-5 inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-400/30 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-700 shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:bg-white/10 dark:text-gray-100">
              <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.9)]"></span>
              Open to internships and developer roles
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-[#5e1fff] via-[#2ee5ff] to-[#10b981] bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl md:text-7xl">
              NIDISH
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mx-auto mb-5 h-8 max-w-2xl text-xl text-foreground md:text-2xl lg:mx-0"
            >
              <span>{currentText}</span>
              <span className="animate-pulse text-[#5e1fff] dark:text-[#2ee5ff]">
                |
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mx-auto mb-7 max-w-2xl text-base leading-8 text-gray-700 dark:text-gray-200 sm:text-lg lg:mx-0"
            >
              Computer Science engineer building full-stack products with React,
              FastAPI, Java DSA, cloud-native tools, and practical AI/ML ideas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.7 }}
              className="mx-auto mb-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4 lg:mx-0"
            >
              {HERO_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-xl border border-white/50 bg-white/70 px-3 py-3 text-center shadow-lg shadow-cyan-500/10 backdrop-blur-md dark:border-white/10 dark:bg-white/10"
                >
                  <p className="text-xl font-extrabold text-gray-950 dark:text-white">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-gray-600 dark:text-gray-300">
                    {metric.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mx-auto flex max-w-3xl flex-col flex-wrap items-center justify-center gap-4 sm:flex-row lg:mx-0 lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full rounded-full bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff] px-8 py-4 font-bold text-white transition-all duration-300 hover:shadow-lg hover:shadow-[#5e1fff]/50 sm:w-auto"
                onClick={() => {
                  const aboutSection = document.getElementById("about");
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore My Work
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/Resume.pdf"
                download
                className="flex w-full items-center justify-center rounded-full border-2 border-[#5e1fff] bg-white/30 px-8 py-4 font-bold text-foreground backdrop-blur-sm transition-all duration-300 hover:bg-[#5e1fff]/10 hover:shadow-lg dark:bg-transparent sm:w-auto"
              >
                <Download className="mr-2" size={18} />
                Download Resume
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/drive/folders/1I6YTXnzbc1MPkk-26qYi4SEGaqARRfan?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-full border-2 border-[#2ee5ff] bg-white/30 px-8 py-4 font-bold text-cyan-700 backdrop-blur-sm transition-all duration-300 hover:bg-[#2ee5ff]/10 hover:shadow-lg hover:shadow-[#2ee5ff]/20 dark:bg-transparent dark:text-[#2ee5ff] sm:w-auto"
              >
                <BadgeCheck className="mr-2" size={18} />
                View Documents
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30, rotateY: -12 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="hero-showcase mx-auto block w-full max-w-[390px] lg:max-w-none"
            aria-hidden="true"
          >
            <div className="hero-card hero-card-primary">
              <div className="flex items-center gap-3">
                <img
                  src="/Profile.jpg"
                  alt=""
                  className="h-14 w-14 rounded-2xl object-cover ring-2 ring-cyan-300/70"
                />
                <div>
                  <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-300">
                    Portfolio Snapshot
                  </p>
                  <p className="text-2xl font-bold text-gray-950 dark:text-white">
                    MERN + AI/ML
                  </p>
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                {["React", "FastAPI", "Java DSA", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-white/20 bg-white/70 px-4 py-3 text-center text-sm font-bold text-gray-800 shadow-sm dark:bg-white/10 dark:text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-7 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-4">
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Building practical products across full-stack web, data, and automation.
                </p>
              </div>
            </div>
            <div className="hero-card hero-card-back hero-card-back-one"></div>
            <div className="hero-card hero-card-back hero-card-back-two"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Chevron */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="text-[#5e1fff] dark:text-[#2ee5ff] animate-pulse"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </div>
  );
}
