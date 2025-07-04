"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar, Award } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  period: string
  details: string
  score: string
  type: "engineering" | "puc" | "sslc"
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor's of Engineering",
    institution: "B N M Institute Of Technology",
    period: "2022 - 2026",
    details: "Computer Science and Engineering",
    score: "CGPA: 8.7 / 10",
    type: "engineering",
  },
  {
    degree: "Pre University - Biology (PCMB)",
    institution: "Alva's Pre University College",
    period: "2020 - 2022",
    details: "Physics, Chemistry, Math, Biology",
    score: "Percentage: 95%",
    type: "puc",
  },
  {
    degree: "SSLC",
    institution: "Alva's English Medium High School",
    period: "2019 - 2020",
    details: "Secondary School Leaving Certificate",
    score: "Percentage: 91.04%",
    type: "sslc",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "engineering":
        return GraduationCap
      case "puc":
        return Award
      case "sslc":
        return Calendar
      default:
        return GraduationCap
    }
  }

  const getGradient = (index: number) => {
    const gradients = ["from-purple-500 to-cyan-500", "from-cyan-500 to-blue-500", "from-blue-500 to-purple-500"]
    return gradients[index % gradients.length]
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
            Education
          </motion.h2>
        </motion.div>

        <div className="space-y-10">
          {educationItems.map((edu, index) => {
            const IconComponent = getIcon(edu.type)
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark">
                  <div className={`absolute right-0 top-0 w-1 h-full bg-gradient-to-b ${getGradient(index)}`}></div>

                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div className="flex items-start">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${getGradient(index)} text-white mr-4 mt-1`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <IconComponent size={24} />
                      </motion.div>
                      <div>
                        <motion.h3
                          className="text-2xl font-bold text-primary-light dark:text-primary-dark"
                          whileHover={{
                            x: 5,
                            color: "#5e1fff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {edu.degree}
                        </motion.h3>
                        <motion.p
                          className="text-secondary-light dark:text-secondary-dark text-lg font-medium"
                          whileHover={{
                            color: "#2ee5ff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {edu.institution}
                        </motion.p>
                      </div>
                    </div>
                    <motion.div
                      className="flex items-center mt-2 md:mt-0"
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <Calendar className="text-purple-400 mr-2" size={18} />
                      </motion.div>
                      <span
                        className={`bg-gradient-to-r ${getGradient(index)} text-white px-3 py-1 rounded-md text-sm font-medium`}
                      >
                        {edu.period}
                      </span>
                    </motion.div>
                  </div>

                  <div className="space-y-3 mt-6">
                    {edu.details && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.p
                          className="text-secondary-light dark:text-secondary-dark leading-relaxed"
                          whileHover={{
                            color: "#5e1fff",
                            transition: { duration: 0.3 },
                          }}
                        >
                          {edu.details}
                        </motion.p>
                      </motion.div>
                    )}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <span
                        className={`bg-gradient-to-r ${getGradient(index)} text-white px-4 py-2 rounded-md text-sm font-medium inline-flex items-center`}
                      >
                        <motion.div
                          whileHover={{
                            rotate: 360,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <Award size={16} className="mr-2" />
                        </motion.div>
                        {edu.score}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
