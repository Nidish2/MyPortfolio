"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Clock, Trophy, Users, Zap, Brain } from "lucide-react"

interface Hackathon {
  name: string
  duration: string
  project: string
  description: string
  technologies: string[]
  type: "ai" | "web" | "cloud" | "voice" | "coding"
  year: string
}

const hackathons: Hackathon[] = [
  {
    name: "IBM Hackathon",
    duration: "48 hours",
    project: "Climate Change Analysis and Mitigation",
    description:
      "Developed an AI-powered solution for climate change analysis using Agentic AI and RAG (Retrieval-Augmented Generation) to provide actionable insights for environmental mitigation strategies.",
    technologies: ["Agentic AI", "RAG", "Python", "Machine Learning"],
    type: "ai",
    year: "2024",
  },
  {
    name: "Hackwell 5.0",
    duration: "48 hours",
    project: "AI Agent for Task Allocation",
    description:
      "Built an intelligent task allocation system using AWS SageMaker for machine learning model deployment, with Python backend and React frontend for seamless user experience.",
    technologies: ["AWS SageMaker", "Python", "React", "Machine Learning"],
    type: "cloud",
    year: "2024",
  },
  {
    name: "SIH 2024 - Nirman",
    duration: "36 hours",
    project: "Real-time Construction Monitoring via Drone Imagery",
    description:
      "Developed a comprehensive solution for monitoring construction progress using drone imagery analysis, computer vision, and real-time data processing for project management.",
    technologies: ["Computer Vision", "Drone Technology", "Python", "Image Processing"],
    type: "ai",
    year: "2024",
  },
  {
    name: "HackOn with Amazon - Season 4",
    duration: "24 hours",
    project: "Timed Coding Challenges",
    description:
      "Participated in competitive programming challenges focusing on algorithmic problem-solving, data structures, and optimization techniques under time constraints.",
    technologies: ["Algorithms", "Data Structures", "Java", "Problem Solving"],
    type: "coding",
    year: "2024",
  },
  {
    name: "Hackman V7",
    duration: "24 hours",
    project: "Voice Assistance System",
    description:
      "Created an intelligent voice assistant using speech recognition, natural language processing, and text-to-speech technologies with Flask web framework integration.",
    technologies: ["SpeechRecognition", "PyAudio", "pyttsx3", "Flask", "NLP"],
    type: "voice",
    year: "2024",
  },
]

export default function Hackathons() {
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

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "ai":
        return Brain
      case "web":
        return Code
      case "cloud":
        return Zap
      case "voice":
        return Users
      case "coding":
        return Trophy
      default:
        return Code
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "ai":
        return "from-purple-500 to-pink-500"
      case "web":
        return "from-blue-500 to-cyan-500"
      case "cloud":
        return "from-orange-500 to-red-500"
      case "voice":
        return "from-green-500 to-teal-500"
      case "coding":
        return "from-yellow-500 to-orange-500"
      default:
        return "from-purple-500 to-cyan-500"
    }
  }

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants} ref={ref}>
        <motion.div variants={itemVariants}>
          <motion.h2
            className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Hackathons
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => {
            const IconComponent = getTypeIcon(hackathon.type)
            const colorClass = getTypeColor(hackathon.type)

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div className="p-6 h-full portfolio-card portfolio-card-light dark:portfolio-card-dark">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClass}`}></div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <motion.div
                        className={`p-2 rounded-full bg-gradient-to-r ${colorClass} text-white mr-3`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <IconComponent size={20} />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="text-xl font-bold text-primary-light dark:text-primary-dark"
                          whileHover={{
                            x: 5,
                            color: "#5e1fff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {hackathon.name}
                        </motion.h3>
                        <motion.div
                          className="flex items-center mt-1"
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <motion.div
                            whileHover={{
                              rotate: 360,
                              transition: { duration: 0.5 },
                            }}
                          >
                            <Clock size={14} className="text-muted-light dark:text-muted-dark mr-1" />
                          </motion.div>
                          <motion.span
                            className="text-sm text-muted-light dark:text-muted-dark"
                            whileHover={{
                              color: "#2ee5ff",
                              transition: { duration: 0.2 },
                            }}
                          >
                            {hackathon.duration}
                          </motion.span>
                        </motion.div>
                      </div>
                    </div>
                    <motion.span
                      className={`bg-gradient-to-r ${colorClass} text-white px-2 py-1 rounded-md text-xs font-medium`}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {hackathon.year}
                    </motion.span>
                  </div>

                  <div className="mb-4">
                    <motion.h4
                      className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-2"
                      whileHover={{
                        x: 5,
                        color: "#5e1fff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {hackathon.project}
                    </motion.h4>
                    <motion.p
                      className="text-sm text-secondary-light dark:text-secondary-dark leading-relaxed"
                      whileHover={{
                        color: "#2ee5ff",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {hackathon.description}
                    </motion.p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {hackathon.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded-md border border-gray-200 dark:border-gray-600"
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(94, 31, 255, 0.2)",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <motion.span
                      className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${colorClass} text-white`}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {hackathon.type.toUpperCase()}
                    </motion.span>
                    <motion.div
                      className="text-muted-light dark:text-muted-dark"
                      whileHover={{
                        rotate: 360,
                        scale: 1.2,
                        color: "#f59e0b",
                        transition: { duration: 0.5 },
                      }}
                    >
                      <Trophy size={16} />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <motion.div
            className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark text-center"
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4"
              whileHover={{
                scale: 1.05,
                color: "#5e1fff",
                textShadow: "0 0 15px rgba(94, 31, 255, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              Competitive Spirit
            </motion.h3>
            <motion.p
              className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed"
              whileHover={{
                color: "#2ee5ff",
                transition: { duration: 0.3 },
              }}
            >
              I thrive in high-pressure environments and enjoy collaborating with diverse teams to build innovative
              solutions within tight deadlines. Each hackathon has enhanced my problem-solving skills and technical
              expertise.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
