"use client";

import { motion } from "framer-motion";
import { BookOpen, Braces, Github, Hexagon, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { type SocialIconName, socialLinks } from "@/content/social";

const socialIcons: Record<SocialIconName, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  leetcode: Braces,
  geeksForGeeks: BookOpen,
  hackerRank: Hexagon,
  instagram: Instagram,
};

export default function Footer() {
  return (
    <footer className="py-10 dark:bg-[#0f0c29] bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6 flex-wrap gap-y-4">
          {socialLinks.map((social) =>
            (() => {
              const Icon = socialIcons[social.icon];

              return (
                <motion.a
                  key={social.name}
                  href={siteConfig.social[social.socialKey]}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full dark:bg-[#24243e] bg-white/80 text-gray-800 dark:text-gray-200 hover:text-[#5e1fff] dark:hover:text-[#2ee5ff] shadow-md transition-colors duration-300"
                  title={social.name}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })(),
          )}
        </div>

        {/* Dynamically updating year! */}
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Nidish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
