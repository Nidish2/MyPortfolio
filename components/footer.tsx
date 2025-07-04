"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code, Instagram, HardDrive } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Github, url: "https://github.com/Nidish2", label: "GitHub" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/nidish-26929524b/", label: "LinkedIn" },
    { icon: HardDrive, url: "https://leetcode.com/u/nidish2207/", label: "LeetCode" },
    { icon: Code, url: "https://www.hackerrank.com/profile/nidish2207", label: "HackerRank" },
    { icon: Instagram, url: "#", label: "Instagram" },
  ]

  return (
    <footer className="py-10 dark:bg-[#0f0c29] bg-gray-100 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full dark:bg-[#24243e] bg-white/80 text-gray-800 dark:text-white hover:shadow-lg transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={20} />
            </motion.a>
          ))}
        </div>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2025 Nidish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
