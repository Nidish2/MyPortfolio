"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string[]
  type: "internship" | "fulltime"
}

const experiences: ExperienceItem[] = [
  {
    title: "Web Development - Internship",
    company: "ShadowFox",
    period: "April - May 2025",
    type: "internship",
    description: [
      "Built a responsive MERN stack website with complete backend and database integration.",
      "Applied both frontend and backend skills to a live client project.",
      "Collaborated using Git to maintain version control and streamline team workflows.",
    ],
  },
  {
    title: "Docker and Kubernetes - Internship",
    company: "Prodevans",
    period: "August - September 2024",
    type: "internship",
    description: [
      "Containerized applications using Docker to streamline builds and deployments.",
      "Automated deployment and scaling with Kubernetes by managing pods, services, and replicas.",
      "Gained hands-on DevOps experience in cloud-native environments.",
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
    <div className="container mx-auto max-w-6xl experience-section">
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
            Work Experience
          </motion.h2>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
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
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500"></div>

                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <div className="flex items-center mb-2">
                      <motion.h3
                        className="text-2xl font-bold text-primary-light dark:text-primary-dark"
                        whileHover={{
                          x: 5,
                          color: "#5e1fff",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {exp.title}
                      </motion.h3>
                      <motion.span
                        className="ml-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-md text-xs font-medium"
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {exp.type.toUpperCase()}
                      </motion.span>
                    </div>
                    <motion.div
                      className="flex items-center mt-2"
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
                        <Briefcase className="text-purple-400 mr-2" size={18} />
                      </motion.div>
                      <motion.p
                        className="text-secondary-light dark:text-secondary-dark font-medium"
                        whileHover={{
                          color: "#2ee5ff",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {exp.company}
                      </motion.p>
                    </motion.div>
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
                      <Calendar className="text-cyan-400 mr-2" size={18} />
                    </motion.div>
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-3 py-1 rounded-md text-sm font-medium">
                      {exp.period}
                    </span>
                  </motion.div>
                </div>

                <div className="space-y-3 mt-6">
                  {exp.description.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, duration: 0.5 }}
                      whileHover={{
                        x: 10,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="flex items-start space-x-3">
                        <motion.div
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"
                          whileHover={{
                            scale: 1.5,
                            transition: { duration: 0.2 },
                          }}
                        ></motion.div>
                        <motion.p
                          className="text-secondary-light dark:text-secondary-dark leading-relaxed"
                          whileHover={{
                            color: "#5e1fff",
                            transition: { duration: 0.3 },
                          }}
                        >
                          {item}
                        </motion.p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
