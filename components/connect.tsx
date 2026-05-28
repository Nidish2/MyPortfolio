"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Github,
  Linkedin,
  Braces,
  BookOpen,
  Hexagon,
  Instagram,
  Mail,
  FileText,
} from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ size?: string | number }>;
  url: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Nidish2",
    color: "from-gray-700 to-gray-900",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nidishofficial/",
    color: "from-blue-500 to-blue-700",
  },
  {
    name: "LeetCode",
    icon: Braces,
    url: "https://leetcode.com/u/nidish2207/",
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "GeeksforGeeks",
    icon: BookOpen,
    url: "https://www.geeksforgeeks.org/profile/nidishpf3z",
    color: "from-teal-600 to-emerald-800",
  },
  {
    name: "HackerRank",
    icon: Hexagon,
    url: "https://www.hackerrank.com/profile/nidish2207",
    color: "from-lime-400 to-green-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/_1_am_nidish/",
    color: "from-pink-500 to-purple-600",
  },
];

export default function Connect() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div variants={itemVariants} className="mb-12">
          <motion.div
            className="p-6 sm:p-8 lg:p-10 portfolio-card portfolio-card-light dark:portfolio-card-dark text-center"
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

            <motion.h3
              className="section-title mb-4 text-primary-light dark:text-primary-dark"
              whileHover={{
                scale: 1.05,
                color: "#5e1fff",
                textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              Let's Connect
            </motion.h3>
            <motion.p
              className="text-secondary-light dark:text-secondary-dark max-w-3xl mx-auto mb-8 text-base sm:text-lg leading-relaxed"
              whileHover={{
                color: "#2ee5ff",
                transition: { duration: 0.3 },
              }}
            >
              I'm currently open to new opportunities, collaborations, and
              interesting projects. If you have something in mind, let's discuss
              how we can work together!
            </motion.p>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <motion.a
                href="mailto:nidish2207@gmail.com"
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-5 py-3 font-bold text-white shadow-lg shadow-purple-500/20"
              >
                <Mail size={20} />
                Email Nidish
              </motion.a>
              <motion.a
                href="/Resume.pdf"
                download
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-5 py-3 font-bold text-cyan-700 shadow-lg shadow-cyan-500/10 dark:text-cyan-300"
              >
                <FileText size={20} />
                Download Resume
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`min-h-16 p-4 rounded-xl bg-gradient-to-r ${link.color} text-white flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 font-semibold text-base sm:text-lg relative overflow-hidden group`}
                  style={{
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.2,
                      transition: { duration: 0.5 },
                    }}
                    className="relative z-10"
                  >
                    <link.icon size={24} />
                  </motion.div>
                  <motion.span
                    className="relative z-10"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {link.name}
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
