"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Server, Cpu, BarChart } from "lucide-react"

interface SkillCategory {
  name: string
  icon: React.ElementType
  skills: {
    name: string
    level: number
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Web Development",
    icon: Code,
    skills: [
      { name: "React.js", level: 80 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Node.js with Express.js", level: 75 },
    ],
  },
  {
    name: "Database",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "MySQL", level: 65 },
    ],
  },
  {
    name: "Backend & DevOps",
    icon: Server,
    skills: [
      { name: "Docker", level: 60 },
      { name: "Kubernetes", level: 55 },
    ],
  },
  {
    name: "Programming Languages",
    icon: Cpu,
    skills: [
      { name: "Python", level: 70 },
      { name: "Java", level: 75 },
      { name: "JavaScript/TypeScript", level: 80 },
    ],
  },
  {
    name: "Data Science & AI",
    icon: BarChart,
    skills: [
      { name: "Machine Learning", level: 50 },
      { name: "Data Analysis", level: 55 },
      { name: "Generative AI", level: 45 },
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
          <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            Skills
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
              <div className="p-6 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 transition-all duration-300 hover:shadow-purple-500/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white mr-4">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>

                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * skillIndex, duration: 0.5 }}
                    >
                      <div className="mb-4">
                        <div className="flex justify-between mb-2">
                          <p className="font-medium">{skill.name}</p>
                          <p>{skill.level}%</p>
                        </div>
                        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }} className="mt-16">
          <div className="p-8 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 text-center transition-all duration-300 hover:shadow-cyan-500/30 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-lg">
              I'm constantly expanding my skill set and exploring new technologies to stay at the forefront of the
              industry.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
