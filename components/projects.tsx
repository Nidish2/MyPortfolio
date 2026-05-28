"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { BarChart3, Box, ExternalLink, Github, MessageSquareText } from "lucide-react"

interface Project {
  title: string
  year: string
  description: string
  impact: string
  focus: string
  technologies: string[]
  github: string
  live?: string
  icon: React.ElementType
}

const projects: Project[] = [
  {
    title: "Text-to-3D Model Generation",
    year: "2025",
    description:
      "Text-to-3D model generation is a tool that transforms user prompts into 3D objects instantly. Built with Python's FastAPI for the backend and React with Vite for the frontend, it leverages Point-E model to create single 3D assets from simple text commands.",
    impact: "Turns natural-language prompts into usable 3D assets through an API-driven workflow.",
    focus: "AI product prototype",
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "Vite",
      "Point-E",
      "3D Modeling",
    ],
    github: "https://github.com/Nidish2/Text-to-3D",
    icon: Box,
  },
  {
    title: "Employee Data Analytics",
    year: "2025",
    description:
      "It is a data-driven analytics platform designed to identify employee challenges and predict actionable solutions. Built with Python using libraries like Pandas for data processing, Scikit-learn for machine learning, and XGBoost, RandomForest for model training and Streamlit for the interactive frontend dashboard.",
    impact: "Highlights workplace risk patterns and suggests data-backed actions for decision makers.",
    focus: "ML analytics dashboard",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "RandomForest",
      "Streamlit",
    ],
    github: "https://github.com/Nidish2/Employ-Data-Analytics",
    icon: BarChart3,
  },
  {
    title: "Real Time Chat Application - Chit-Chat",
    year: "2024",
    description:
      "Chit-chat is a real-time web application where users can communicate with each other instantly. Built using the MERN stack for the web interface and Socket.IO for real-time communication, it enables seamless interaction.",
    impact: "Delivers real-time messaging with a production-style MERN and Socket.IO architecture.",
    focus: "Realtime web app",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
    github: "https://github.com/Nidish2/Chit-Chat",
    live: "https://chit-chat-real-time-app.vercel.app/",
    icon: MessageSquareText,
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants} ref={ref}>
        <motion.div variants={itemVariants}>
          <p className="section-kicker">Selected builds</p>
          <motion.h2
            className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle cursor-default select-none transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300"
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
          >
            Project cards are tuned to show role-fit quickly: what was built, why it matters, and which tools prove the skill.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              variants={{
                ...itemVariants,
                hover: {
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }
              }}
              whileHover="hover"
            >
              <motion.div
                className={`p-6 h-full portfolio-card portfolio-card-light dark:portfolio-card-dark flex flex-col ${
                  hoveredIndex === index ? "ring-2 ring-cyan-400/40" : ""
                }`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <motion.div
                      className="rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 p-3 text-white shadow-lg shadow-cyan-500/20"
                      variants={{
                        hover: { rotate: 360, scale: 1.1, transition: { duration: 0.5 } }
                      }}
                    >
                      <project.icon size={22} />
                    </motion.div>
                    <div className="min-w-0">
                      <motion.h3
                        className="text-xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="mt-2 text-xs font-bold uppercase text-cyan-700 dark:text-cyan-300 transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-400 cursor-default"
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                      >
                        {project.focus}
                      </motion.p>
                    </div>
                  </div>
                  <motion.span
                    className="shrink-0 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-md text-xs font-medium"
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                  >
                    {project.year}
                  </motion.span>
                </div>

                <div className="mb-4 rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4">
                  <motion.p 
                    className="text-sm font-semibold leading-6 text-gray-800 dark:text-gray-100 transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                    whileHover={{ x: 3, transition: { duration: 0.3 } }}
                  >
                    {project.impact}
                  </motion.p>
                </div>

                <motion.p
                  className="text-sm mb-4 text-gray-700 dark:text-gray-200 leading-relaxed transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 cursor-default"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  {project.description}
                </motion.p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 text-xs px-2 py-1 rounded-md border border-cyan-500/30"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(6, 182, 212, 0.3)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto flex flex-wrap justify-between gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-3.5 py-2 text-sm border border-purple-500 text-purple-700 dark:text-purple-400 rounded-md transition-all duration-300 hover:shadow-lg font-semibold"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    variants={{
                      hover: {
                        scale: 1.05,
                        backgroundColor: "#8b5cf6",
                        color: "#ffffff",
                        boxShadow: "0 8px 16px rgba(139, 92, 246, 0.3)",
                      }
                    }}
                  >
                    <motion.span
                      variants={{
                        hover: { rotate: 360, transition: { duration: 0.5 } }
                      }}
                      className="mr-1.5 inline-flex"
                    >
                      <Github size={16} />
                    </motion.span>
                    GitHub
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3.5 py-2 text-sm bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-md transition-all duration-300 hover:shadow-lg font-semibold"
                      whileHover="hover"
                      whileTap={{ scale: 0.95 }}
                      variants={{
                        hover: {
                          scale: 1.05,
                          boxShadow: "0 8px 16px rgba(94, 31, 255, 0.4)",
                        }
                      }}
                    >
                      <motion.span
                        variants={{
                          hover: { rotate: 360, transition: { duration: 0.5 } }
                        }}
                        className="mr-1.5 inline-flex"
                      >
                        <ExternalLink size={16} />
                      </motion.span>
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
