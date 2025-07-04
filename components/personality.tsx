"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle2 } from "lucide-react"

interface PersonalityTrait {
  trait: string
  description: string
}

const personalityTraits: PersonalityTrait[] = [
  {
    trait: "Dedicated work ethic",
    description:
      "I approach every task with commitment and perseverance, ensuring high-quality results even under pressure.",
  },
  {
    trait: "Teamwork",
    description:
      "I thrive in collaborative environments, valuing diverse perspectives and contributing positively to group dynamics.",
  },
  {
    trait: "Problem-Solving",
    description:
      "I enjoy tackling complex challenges, breaking them down into manageable parts, and finding innovative solutions.",
  },
  {
    trait: "Communication and presentation skills",
    description:
      "I can articulate ideas clearly and effectively, adapting my communication style to different audiences and contexts.",
  },
]

interface Hobby {
  name: string
  description: string
}

const hobbies = {
  sports: [
    {
      name: "Chess",
      description: "I enjoy strategic thinking and planning several moves ahead in competitive chess matches.",
    },
    {
      name: "Swimming",
      description: "Swimming helps me stay fit and provides a meditative experience that clears my mind.",
    },
    {
      name: "Badminton",
      description: "I play badminton regularly to improve reflexes and enjoy friendly competition with peers.",
    },
  ],
  workout: [
    {
      name: "Jogging",
      description: "Morning jogs help me start the day with energy and maintain cardiovascular health.",
    },
    {
      name: "Walking",
      description: "I take evening walks to reflect on the day and appreciate nature around me.",
    },
    {
      name: "Strength Training",
      description: "Regular push-ups, pull-ups, and squats help me build strength and maintain physical fitness.",
    },
  ],
}

export default function Personality() {
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
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
            Personality Traits
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalityTraits.map((trait, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                y: -8,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="p-6 rounded-xl bg-white/90 dark:bg-[rgba(30,30,60,0.6)] backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-white/20 transition-all duration-500 relative overflow-hidden"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.4)",
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                <div className="flex items-start">
                  <motion.div
                    className="mt-1 text-cyan-500"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <CheckCircle2 size={24} />
                  </motion.div>
                  <div className="ml-4">
                    <motion.h3
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                      whileHover={{
                        x: 5,
                        color: "#5e1fff",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {trait.trait}
                    </motion.h3>
                    <motion.p
                      className="text-gray-700 dark:text-gray-100 leading-relaxed"
                      whileHover={{
                        color: "#2ee5ff",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {trait.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="mt-12">
          <motion.div
            className="p-8 rounded-xl bg-white/90 dark:bg-[rgba(30,30,60,0.6)] backdrop-blur-md shadow-xl border border-gray-200/50 dark:border-white/20 transition-all duration-500 relative overflow-hidden"
            whileHover={{
              y: -10,
              scale: 1.02,
              boxShadow: "0 25px 50px -12px rgba(46, 229, 255, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500"></div>

            <motion.h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center"
              whileHover={{
                scale: 1.05,
                color: "#5e1fff",
                textShadow: "0 0 15px rgba(94, 31, 255, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              Hobbies & Interests
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.h4
                  className="text-xl font-semibold text-purple-600 dark:text-purple-400 mb-4 text-center"
                  whileHover={{
                    scale: 1.05,
                    color: "#8b5cf6",
                    transition: { duration: 0.2 },
                  }}
                >
                  Sports
                </motion.h4>
                {hobbies.sports.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-[rgba(30,30,60,0.4)] border border-gray-200 dark:border-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <motion.h5
                      className="text-lg font-medium text-gray-900 dark:text-white mb-2"
                      whileHover={{
                        x: 5,
                        color: "#8b5cf6",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {hobby.name}
                    </motion.h5>
                    <motion.p
                      className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed"
                      whileHover={{
                        color: "#06b6d4",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {hobby.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-6">
                <motion.h4
                  className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 text-center"
                  whileHover={{
                    scale: 1.05,
                    color: "#06b6d4",
                    transition: { duration: 0.2 },
                  }}
                >
                  Workout
                </motion.h4>
                {hobbies.workout.map((hobby, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    whileHover={{
                      scale: 1.03,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className="p-4 rounded-lg bg-gray-50 dark:bg-[rgba(30,30,60,0.4)] border border-gray-200 dark:border-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <motion.h5
                      className="text-lg font-medium text-gray-900 dark:text-white mb-2"
                      whileHover={{
                        x: 5,
                        color: "#06b6d4",
                        transition: { duration: 0.2 },
                      }}
                    >
                      {hobby.name}
                    </motion.h5>
                    <motion.p
                      className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed"
                      whileHover={{
                        color: "#8b5cf6",
                        transition: { duration: 0.3 },
                      }}
                    >
                      {hobby.description}
                    </motion.p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
