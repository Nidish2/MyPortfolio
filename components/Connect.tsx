"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Braces,
  FileText,
  Github,
  Hexagon,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { siteConfig } from "@/content/site";
import { type SocialIconName, socialLinks } from "@/content/social";
import { containerVariants, itemVariants } from "@/lib/animations";

const socialIcons: Record<SocialIconName, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Braces,
  geeksForGeeks: BookOpen,
  hackerRank: Hexagon,
  instagram: Instagram,
};

export default function Connect() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconVariants = {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
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
            whileTap={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

            <motion.h3
              className="section-title mb-4 text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 1.05,
                textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
                transition: { duration: 0.3 },
              }}
            >
              Let&apos;s Connect
            </motion.h3>
            <motion.p
              className="text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8 text-base sm:text-lg leading-relaxed transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 cursor-default"
              whileHover={{
                transition: { duration: 0.3 },
              }}
              whileTap={{
                transition: { duration: 0.3 },
              }}
            >
              I&apos;m currently open to new opportunities, collaborations, and interesting
              projects. If you have something in mind, let&apos;s discuss how we can work together!
            </motion.p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-4xl mx-auto w-full">
              <motion.a
                href={`mailto:${siteConfig.email}`}
                whileHover="hover"
                whileTap="hover"
                variants={{
                  hover: {
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 12px 24px rgba(139, 92, 246, 0.35)",
                  },
                }}
                className="min-h-16 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-4 text-base font-bold text-white shadow-lg shadow-purple-500/20 transition-all duration-300 sm:text-lg w-full"
              >
                <motion.span variants={iconVariants} className="inline-flex">
                  <Mail size={20} />
                </motion.span>
                Email Nidish
              </motion.a>
              <motion.a
                href={siteConfig.resumePath}
                download
                whileHover="hover"
                whileTap="hover"
                variants={{
                  hover: {
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 12px 24px rgba(6, 182, 212, 0.2)",
                  },
                }}
                className="min-h-16 flex items-center justify-center gap-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-6 py-4 text-base font-bold text-cyan-700 shadow-lg shadow-cyan-500/10 transition-all duration-300 dark:text-cyan-300 sm:text-lg w-full"
              >
                <motion.span variants={iconVariants} className="inline-flex">
                  <FileText size={20} />
                </motion.span>
                Download Resume
              </motion.a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {socialLinks.map((link) =>
                (() => {
                  const Icon = socialIcons[link.icon];

                  return (
                    <motion.a
                      key={link.name}
                      href={siteConfig.social[link.socialKey]}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={{
                        ...itemVariants,
                        hover: {
                          y: -8,
                          scale: 1.05,
                          rotate: 2,
                          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.25)",
                          transition: { duration: 0.3 },
                        },
                      }}
                      whileHover="hover"
                      whileTap="hover"
                      className={`min-h-16 p-4 rounded-xl bg-gradient-to-r ${link.color} text-white flex items-center justify-center space-x-3 shadow-lg transition-all duration-300 font-semibold text-base sm:text-lg relative overflow-hidden group`}
                      style={{
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      <motion.div variants={iconVariants} className="relative z-10">
                        <Icon size={24} />
                      </motion.div>
                      <motion.span
                        className="relative z-10"
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                        whileTap={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {link.name}
                      </motion.span>
                    </motion.a>
                  );
                })(),
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
