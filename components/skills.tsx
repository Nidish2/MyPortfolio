"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Cpu, Coffee } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ElementType
  level: string
  skills: {
    name: string
    level: number
    category?: string
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Web Development",
    icon: Code,
    level: "Intermediate",
    skills: [
      { name: "React.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "Node.js with Express.js", level: 80, category: "Backend" },
      { name: "JSP, Servlet, JDBC", level: 75, category: "Java Web" },
      { name: "Hibernate, Spring Boot (MVC)", level: 70, category: "Java Web" },
    ],
  },
  {
    name: "Database",
    icon: Database,
    level: "Intermediate",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    name: "Python",
    icon: Coffee,
    level: "Intermediate",
    skills: [
      { name: "Data Science", level: 70 },
      { name: "Machine Learning", level: 60 },
      { name: "Generative AI", level: 55 },
    ],
  },
  {
    name: "Programming Languages",
    icon: Cpu,
    level: "Intermediate",
    skills: [
      { name: "Java (DSA)", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "C (Basics)", level: 60 },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: Server,
    level: "Basic to Intermediate",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 65 },
      { name: "Red Hat OpenShift", level: 60 },
    ],
  },
]

export default function Skills() {
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
            Skills
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
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

                <div className="flex items-center mb-6">
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white mr-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <category.icon size={24} />
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
                      {category.name}
                    </motion.h3>
                    <motion.span
                      className="text-sm bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-md"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {category.level}
                    </motion.span>
                  </div>
                </div>

                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * skillIndex, duration: 0.5 }}
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center">
                            <motion.p
                              className="font-medium text-primary-light dark:text-primary-dark"
                              whileHover={{
                                color: "#5e1fff",
                                transition: { duration: 0.2 },
                              }}
                            >
                              {skill.name}
                            </motion.p>
                            {skill.category && (
                              <motion.span
                                className="ml-2 text-xs bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded border border-cyan-500/30"
                                whileHover={{
                                  scale: 1.1,
                                  backgroundColor: "rgba(6, 182, 212, 0.3)",
                                  transition: { duration: 0.2 },
                                }}
                              >
                                {skill.category}
                              </motion.span>
                            )}
                          </div>
                          <motion.p
                            className="text-muted-light dark:text-muted-dark font-medium"
                            whileHover={{
                              color: "#2ee5ff",
                              transition: { duration: 0.2 },
                            }}
                          >
                            {skill.level}%
                          </motion.p>
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 0.2 * skillIndex, duration: 1 }}
                            whileHover={{
                              boxShadow: "0 0 10px rgba(94, 31, 255, 0.5)",
                            }}
                          ></motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            y: -10,
            scale: 1.02,
            transition: { duration: 0.3 },
          }}
          className="mt-16"
        >
          <motion.div className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark text-center">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

            <motion.h3
              className="text-2xl font-bold mb-4 text-primary-light dark:text-primary-dark"
              whileHover={{
                scale: 1.05,
                color: "#5e1fff",
                textShadow: "0 0 15px rgba(94, 31, 255, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              Always Learning
            </motion.h3>
            <motion.p
              className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed"
              whileHover={{
                color: "#2ee5ff",
                transition: { duration: 0.3 },
              }}
            >
              I'm constantly expanding my skill set and exploring new technologies to stay at the forefront of the
              industry. Currently focusing on advanced AI/ML and cloud-native technologies.
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
