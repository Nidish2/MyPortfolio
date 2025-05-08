"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Development - Internship",
    company: "Shadow Fox",
    period: "April 2025 - Present",
    description: [
      "MERN Development: Built a MERN website with a responsive front-end; ensured robust back-end and database connectivity.",
      "UX Improvements: Enhanced e-commerce filtering and navigation; emphasized clear UI and user feedback.",
      "Full-Stack Work: Collaborated on a client project; applied both front-end and back-end skills using Git.",
    ],
  },
  {
    title: "Dockers and Kubernetes - Internship",
    company: "Prodevans",
    period: "August 2024",
    description: [
      "Docker Expertise: Leveraged Docker to containerize applications and streamline development workflows.",
      "Kubernetes Orchestration: Implemented Kubernetes to automate deployment and scaling.",
    ],
  },
]

export default function Experience() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants} ref={ref}>
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Work Experience
          </h2>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <div className="p-8 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 relative overflow-hidden transition-all duration-300 hover:shadow-purple-500/30">
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <div className="flex items-center mt-2">
                      <Briefcase className="text-purple-400 mr-2" size={18} />
                      <p className="text-gray-300">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0">
                    <Calendar className="text-cyan-400 mr-2" size={18} />
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mt-6">
                  {exp.description.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2"></div>
                        <p>{item}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
