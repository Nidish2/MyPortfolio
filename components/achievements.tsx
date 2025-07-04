"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Medal, Castle, Trophy, Star } from "lucide-react"

interface Achievement {
  title: string
  organization: string
  year: string
  icon: React.ElementType
  description?: string
  category: "academic" | "ncc" | "sports" | "competition"
}

const achievements: Achievement[] = [
  {
    title: "Group Song - Gold Medal",
    organization: "National Cadet Corps",
    year: "2023, 2025",
    icon: Trophy,
    description:
      "Awarded gold medals for outstanding performance in NCC cultural competitions, demonstrating teamwork and artistic excellence.",
    category: "ncc",
  },
  {
    title: "Tent Pitching - Gold Medal",
    organization: "National Cadet Corps",
    year: "2023, 2025",
    icon: Medal,
    description: "Recognized for exceptional skills in military training exercises and outdoor survival techniques.",
    category: "ncc",
  },
  {
    title: "Award of Excellence in PUC",
    organization: "National Students's Union of India",
    year: "2022",
    icon: Award,
    description: "Recognized for outstanding academic performance and contributions to student activities.",
    category: "academic",
  },
  {
    title: "Award of Excellence in PUC",
    organization: "Adarsha Seva Sangha",
    year: "2022",
    icon: Star,
    description: "Honored for exceptional academic achievements and community service.",
    category: "academic",
  },
  {
    title: "Chess District Level Participation",
    organization: "District Chess Association",
    year: "2017, 2019",
    icon: Castle,
    description:
      "Participated in district-level chess competitions, demonstrating strategic thinking and competitive spirit.",
    category: "sports",
  },
]

export default function Achievements() {
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic":
        return "from-blue-500 to-purple-500"
      case "ncc":
        return "from-green-500 to-teal-500"
      case "sports":
        return "from-orange-500 to-red-500"
      case "competition":
        return "from-yellow-500 to-orange-500"
      default:
        return "from-purple-500 to-cyan-500"
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "academic":
        return "Academic"
      case "ncc":
        return "NCC"
      case "sports":
        return "Sports"
      case "competition":
        return "Competition"
      default:
        return "Achievement"
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
            Achievements
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            const colorClass = getCategoryColor(achievement.category)

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
                <motion.div
                  className="p-6 h-full portfolio-card portfolio-card-light dark:portfolio-card-dark"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.4)",
                  }}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClass}`}></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${colorClass} text-white mr-4 mt-1`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <achievement.icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3
                          className="text-xl font-bold text-gray-900 dark:text-white mb-1"
                          whileHover={{
                            x: 5,
                            color: "#5e1fff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {achievement.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-700 dark:text-gray-100 text-sm font-medium"
                          whileHover={{
                            color: "#2ee5ff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {achievement.organization}
                        </motion.p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <motion.span
                        className={`bg-gradient-to-r ${colorClass} text-white px-2 py-1 rounded-md text-xs font-medium mb-2`}
                        whileHover={{
                          scale: 1.1,
                          transition: { duration: 0.2 },
                        }}
                      >
                        {achievement.year}
                      </motion.span>
                      <motion.span
                        className="text-xs bg-gray-100 dark:bg-[rgba(30,30,60,0.4)] text-gray-700 dark:text-gray-100 px-2 py-1 rounded-full border border-gray-200 dark:border-white/10"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(94, 31, 255, 0.2)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {getCategoryBadge(achievement.category)}
                      </motion.span>
                    </div>
                  </div>

                  {achievement.description && (
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
                        className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed"
                        whileHover={{
                          color: "#5e1fff",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {achievement.description}
                      </motion.p>
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute bottom-2 right-2 opacity-10"
                    whileHover={{
                      opacity: 0.3,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <achievement.icon size={40} />
                  </motion.div>
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
              boxShadow: "0 25px 50px -12px rgba(46, 229, 255, 0.4)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4"
              whileHover={{
                scale: 1.05,
                color: "#5e1fff",
                textShadow: "0 0 15px rgba(94, 31, 255, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              Recognition & Excellence
            </motion.h3>
            <motion.p
              className="text-lg text-gray-700 dark:text-gray-100 leading-relaxed"
              whileHover={{
                color: "#2ee5ff",
                transition: { duration: 0.3 },
              }}
            >
              These achievements reflect my commitment to excellence across academics, leadership, and extracurricular
              activities. Each recognition has motivated me to continue striving for higher standards and contributing
              positively to my community.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
