"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Braces,
  Instagram,
  BookOpen,
  Hexagon,
} from "lucide-react";

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Nidish2",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/nidishofficial/",
      label: "LinkedIn",
    },
    {
      icon: Braces,
      url: "https://leetcode.com/u/nidish2207/",
      label: "LeetCode",
    },
    {
      icon: BookOpen,
      url: "https://www.geeksforgeeks.org/profile/nidishpf3z",
      label: "GeeksforGeeks",
    },
    {
      icon: Hexagon,
      url: "https://www.hackerrank.com/profile/nidish2207",
      label: "HackerRank",
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/_1_am_nidish/",
      label: "Instagram",
    },
  ];

  return (
    <footer className="py-10 dark:bg-[#0f0c29] bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6 flex-wrap gap-y-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full dark:bg-[#24243e] bg-white/80 text-gray-800 dark:text-gray-200 hover:text-[#5e1fff] dark:hover:text-[#2ee5ff] shadow-md transition-colors duration-300"
              title={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </div>

        {/* Dynamically updating year! */}
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Nidish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
