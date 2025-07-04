"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Shield, Trophy, Users, Target, Star } from "lucide-react"

interface Activity {
  title: string
  organization: string
  duration: string
  description: string[]
  achievements: string[]
  type: "ncc" | "leadership"
  icon: React.ElementType
}

const activities: Activity[] = [
  {
    title: "NCC Cadet",
    organization: "National Cadet Corps",
    duration: "3 Years | B & C Certificate Holder",
    description: [
      "Attended two CATC Camps (2023 and 2025) and one Army Attachment Camp - ATT (2023)",
      "Led social awareness drives and community service programs",
      "Developed leadership skills through military training and discipline",
      "Participated in cultural activities and competitive events",
    ],
    achievements: [
      "Gold Medal in Group Song (2023, 2025)",
      "Gold Medal in Tent Pitching (2023, 2025)",
      "B Certificate (2023)",
      "C Certificate (2025)",
    ],
    type: "ncc",
    icon: Shield,
  },
  {
    title: "Super 60 Program",
    organization: "BNMIT",
    duration: "1 Year (Ongoing)",
    description: [
      "Selected through 4-stage screening process for leadership and technical excellence",
      "Intensive training in Data Structures and Algorithms using Java",
      "Strategic thinking and problem-solving workshops",
      "Communication and presentation skills development",
    ],
    achievements: [
      "Selected from 1000+ applicants",
      "Advanced DSA proficiency",
      "Leadership development",
      "Strategic thinking certification",
    ],
    type: "leadership",
    icon: Target,
  },
]

export default function Extracurricular() {
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

  const getGradient = (type: string) => {
    switch (type) {
      case "ncc":
        return "from-green-500 to-teal-500"
      case "leadership":
        return "from-purple-500 to-pink-500"
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
            Extracurricular Activities
          </motion.h2>
        </motion.div>

        <div className="space-y-10">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon
            const gradientClass = getGradient(activity.type)

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
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${gradientClass}`}></div>

                  <div className="flex flex-col md:flex-row justify-between mb-6">
                    <div className="flex items-start">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${gradientClass} text-white mr-4 mt-1`}
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
                          {activity.title}
                        </motion.h3>
                        <motion.p
                          className="text-secondary-light dark:text-secondary-dark text-lg font-medium"
                          whileHover={{
                            color: "#2ee5ff",
                            transition: { duration: 0.2 },
                          }}
                        >
                          {activity.organization}
                        </motion.p>
                        <motion.span
                          className={`inline-block mt-2 bg-gradient-to-r ${gradientClass} text-white px-3 py-1 rounded-md text-sm font-medium`}
                          whileHover={{
                            scale: 1.1,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {activity.duration}
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Description */}
                    <div>
                      <motion.h4
                        className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-4 flex items-center"
                        whileHover={{
                          x: 5,
                          color: "#5e1fff",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          whileHover={{
                            rotate: 360,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <Users size={20} className="mr-2 text-purple-400" />
                        </motion.div>
                        Activities & Responsibilities
                      </motion.h4>
                      <div className="space-y-3">
                        {activity.description.map((item, idx) => (
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
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass} mt-2 flex-shrink-0`}
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
                    </div>

                    {/* Achievements */}
                    <div>
                      <motion.h4
                        className="text-lg font-semibold text-primary-light dark:text-primary-dark mb-4 flex items-center"
                        whileHover={{
                          x: 5,
                          color: "#f59e0b",
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          whileHover={{
                            rotate: 360,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <Trophy size={20} className="mr-2 text-yellow-400" />
                        </motion.div>
                        Achievements & Recognition
                      </motion.h4>
                      <div className="space-y-3">
                        {activity.achievements.map((achievement, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * idx, duration: 0.5 }}
                            whileHover={{
                              x: 5,
                              scale: 1.02,
                              transition: { duration: 0.2 },
                            }}
                          >
                            <motion.div
                              className="achievement-card flex items-center space-x-3 p-4 rounded-lg transition-all duration-300"
                              whileHover={{
                                borderColor: "#f59e0b",
                                boxShadow: "0 8px 16px rgba(245, 158, 11, 0.2)",
                              }}
                            >
                              <motion.div
                                whileHover={{
                                  rotate: 360,
                                  scale: 1.2,
                                  transition: { duration: 0.5 },
                                }}
                              >
                                <Star size={18} className="text-yellow-400 flex-shrink-0" />
                              </motion.div>
                              <motion.p
                                className="text-secondary-light dark:text-secondary-dark font-medium"
                                whileHover={{
                                  color: "#f59e0b",
                                  transition: { duration: 0.3 },
                                }}
                              >
                                {achievement}
                              </motion.p>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
              Leadership & Service
            </motion.h3>
            <motion.p
              className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed"
              whileHover={{
                color: "#2ee5ff",
                transition: { duration: 0.3 },
              }}
            >
              Through NCC and leadership programs, I've developed strong organizational skills, discipline, and a
              commitment to community service. These experiences have shaped my character and enhanced my ability to
              work effectively in team environments while taking initiative when needed.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
