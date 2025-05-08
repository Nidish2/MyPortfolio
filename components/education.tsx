"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar } from "lucide-react"

interface EducationItem {
  degree: string
  institution: string
  period: string
  details: string
  score: string
}

const educationItems: EducationItem[] = [
  {
    degree: "Bachelor's of Engineering",
    institution: "B N M Institute Of Technology",
    period: "2022 - 2026",
    details: "Computer Science and Engineering",
    score: "GPA: 8.8 / 10",
  },
  {
    degree: "Physics, Chemistry, Math, Biology",
    institution: "Alva's Pre University college",
    period: "2020 - 2022",
    details: "",
    score: "Percentage: 95%",
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

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants} ref={ref}>
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Education
          </h2>
        </motion.div>

        <div className="space-y-10">
          {educationItems.map((edu, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <div className="p-8 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 relative overflow-hidden transition-all duration-300 hover:shadow-cyan-500/30">
                <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-500"></div>

                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <div className="flex items-center mt-2">
                      <GraduationCap className="text-cyan-400 mr-2" size={18} />
                      <p className="text-gray-300">{edu.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="text-purple-400 mr-2" size={18} />
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {edu.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {edu.details && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <p>{edu.details}</p>
                    </motion.div>
                  )}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {edu.score}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
