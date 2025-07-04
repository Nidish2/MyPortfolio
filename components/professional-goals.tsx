"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Target, Code2, Rocket } from "lucide-react"

interface Goal {
  title: string
  description: string
  icon: React.ElementType
}

const goals: Goal[] = [
  {
    title: "Develop expertise in AI and machine learning technologies",
    description:
      "I aim to master AI and ML technologies to create innovative solutions that can solve complex problems and improve user experiences.",
    icon: Target,
  },
  {
    title: "Contribute to open-source projects",
    description:
      "I'm passionate about collaborating with the developer community and contributing to open-source projects that make a positive impact.",
    icon: Code2,
  },
  {
    title: "Build scalable and efficient software solutions",
    description:
      "My goal is to develop robust, scalable applications that solve real-world problems and provide exceptional user experiences.",
    icon: Rocket,
  },
]

export default function ProfessionalGoals() {
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
          <motion.h2
            className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Professional Goals
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="p-6 portfolio-card portfolio-card-light dark:portfolio-card-dark">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                <div className="flex flex-col md:flex-row items-start md:items-center">
                  <motion.div
                    className="p-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white mb-4 md:mb-0 md:mr-6"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <goal.icon size={28} />
                  </motion.div>
                  <div>
                    <motion.h3
                      className="text-xl font-bold text-primary-light dark:text-primary-dark mb-2"
                      whileHover={{
                        x: 5,
                        color: "#5e1fff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {goal.title}
                    </motion.h3>
                    <motion.p
                      className="text-secondary-light dark:text-secondary-dark leading-relaxed"
                      whileHover={{
                        color: "#2ee5ff",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {goal.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <motion.h3
              className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4"
              whileHover={{
                scale: 1.05,
                color: "#5e1fff",
                textShadow: "0 0 15px rgba(94, 31, 255, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              Long-term Vision
            </motion.h3>
            <motion.p
              className="text-secondary-light dark:text-secondary-dark max-w-3xl mx-auto text-lg leading-relaxed"
              whileHover={{
                color: "#2ee5ff",
                transition: { duration: 0.3 },
              }}
            >
              I envision myself as a tech leader who not only builds innovative solutions but also mentors the next
              generation of developers. I aim to create technology that makes a positive impact on society while
              continuously learning and adapting to the ever-evolving tech landscape.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
