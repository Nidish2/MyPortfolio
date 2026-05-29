"use client";
import { containerVariants, itemVariants } from "@/lib/animations";


import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  Server,
  Cpu,
  Coffee,
  Layers,
  Rocket,
  Workflow,
} from "lucide-react";

interface SkillCategory {
  name: string;
  icon: React.ElementType;
  level: string;
  skills: {
    name: string;
    level: number;
    category?: string;
  }[];
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
];

const skillHighlights = [
  {
    icon: Layers,
    title: "Full-stack delivery",
    description:
      "Builds responsive React frontends, APIs, auth-ready flows, and database-backed features.",
  },
  {
    icon: Workflow,
    title: "Problem solving",
    description:
      "Uses Java DSA, clean debugging, and structured project planning for reliable execution.",
  },
  {
    icon: Rocket,
    title: "AI + cloud curiosity",
    description:
      "Experiments with ML, GenAI, Docker, Kubernetes, OpenShift, and deployable product ideas.",
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        ref={ref}
      >
        <motion.div variants={itemVariants}>
          <p className="section-kicker">Capability map</p>
          <motion.h2
            className="section-title bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-cyan-500 to-emerald-500"
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Skills
          </motion.h2>
          <motion.p
            whileHover={{ x: 5, transition: { duration: 0.3 } }}
            whileTap={{ x: 5, transition: { duration: 0.3 } }}
            className="section-subtitle cursor-default select-none transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300"
          >
            A practical stack for building usable products: frontend polish,
            backend structure, data thinking, and deployment awareness.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {skillHighlights.map((highlight) => (
            <motion.div
              key={highlight.title}
              variants={{
                ...itemVariants,
                hover: {
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(94, 31, 255, 0.15)",
                  transition: { duration: 0.25 },
                },
              }}
              whileHover="hover"
              whileTap="hover"
              className="group portfolio-card portfolio-card-light dark:portfolio-card-dark p-5 cursor-pointer"
            >
              <motion.div
                variants={{
                  hover: {
                    rotate: 360,
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  },
                }}
                className="mb-4 inline-flex rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 p-3 text-white shadow-lg shadow-cyan-500/20"
              >
                <highlight.icon size={22} />
              </motion.div>
              <motion.h3
                variants={{
                  hover: { x: 5 },
                }}
                className="text-lg font-bold text-gray-950 dark:text-white transition-colors duration-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 select-none cursor-pointer"
              >
                {highlight.title}
              </motion.h3>
              <motion.p
                variants={{
                  hover: { x: 5 },
                }}
                className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-200 transition-colors duration-200 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 select-none cursor-pointer"
              >
                {highlight.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div className="h-full p-6 portfolio-card portfolio-card-light dark:portfolio-card-dark">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

                <div className="flex items-start mb-6">
                  <motion.div
                    className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white mr-4"
                    whileHover={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <category.icon size={24} />
                  </motion.div>
                  <div className="min-w-0">
                    <motion.h3
                      className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                      whileHover={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {category.name}
                    </motion.h3>
                    <motion.span
                      className="mt-2 inline-flex text-sm bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-2 py-1 rounded-md"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{
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
                      whileTap={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <div className="mb-4">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex min-w-0 flex-wrap items-center gap-2">
                            <motion.p
                              className="font-medium text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {skill.name}
                            </motion.p>
                            {skill.category && (
                              <motion.span
                                className="text-xs bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded border border-cyan-500/30"
                                whileHover={{
                                  scale: 1.1,
                                  backgroundColor: "rgba(6, 182, 212, 0.3)",
                                  transition: { duration: 0.2 },
                                }}
                                whileTap={{
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
                            className="text-gray-500 dark:text-gray-400 font-medium transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 cursor-default"
                            whileHover={{
                              x: -5,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{
                              x: -5,
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
                            transition={{
                              delay: 0.2 * skillIndex,
                              duration: 1,
                            }}
                            whileHover={{
                              boxShadow: "0 0 10px rgba(94, 31, 255, 0.5)",
                            }}
                            whileTap={{
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
      </motion.div>
    </div>
  );
}
