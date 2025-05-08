"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  year: string
  description: string
  technologies: string[]
  github: string
  live?: string
}

const projects: Project[] = [
  {
    title: "Text-to-3D Model Generation",
    year: "2025",
    description:
      "Text-to-3D model generation is a tool that transforms user prompts into 3D objects instantly. Built with Python's FastAPI for the backend and React with Vite for the frontend, it leverages Point-E model to create single 3D assets from simple text commands.",
    technologies: ["Python", "FastAPI", "React", "Vite", "Point-E", "3D Modeling"],
    github: "https://github.com/Nidish2/Text-to-3D",
  },
  {
    title: "Employee Data Analytics",
    year: "2025",
    description:
      "It is a data-driven analytics platform designed to identify employee challenges and predict actionable solutions. Built with Python using libraries like Pandas for data processing, Scikit-learn for machine learning, and XGBoost, RandomForest for model training and Streamlit for the interactive frontend dashboard.",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "RandomForest", "Streamlit"],
    github: "https://github.com/Nidish2/Employ-Data-Analytics",
  },
  {
    title: "Real Time Chat Application - Chit-Chat",
    year: "2024",
    description:
      "Chit-chat is a real-time web application where users can communicate with each other instantly. Built using the MERN stack for the web interface and Socket.IO for real-time communication, it enables seamless interaction.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
    github: "https://github.com/NIDISH",
    live: "https://chit-chat-rkjm.onrender.com",
  },
]

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
          <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="p-6 h-full rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 transition-all duration-300 relative overflow-hidden hover:shadow-purple-500/30">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm mb-4 text-gray-300">{project.description}</p>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-cyan-500/10 text-cyan-300 text-xs px-2 py-1 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between mt-auto">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-3 py-1 text-sm border border-purple-500 text-purple-500 rounded-md hover:bg-purple-500 hover:text-white transition-all duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      GitHub
                    </a>
                  </motion.div>

                  {project.live && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1 text-sm bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-md hover:from-purple-600 hover:to-cyan-600 transition-all duration-300"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
