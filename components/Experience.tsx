"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Calendar } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { type ExperienceRole, experiences } from "@/content/experience";
import { containerVariants, itemVariants } from "@/lib/animations";
import styles from "./Experience.module.css";

function TypeChip({ label, compact = false }: { label: string; compact?: boolean }) {
  return (
    <motion.span
      className={`${compact ? "ml-2 px-2 py-0.5 text-[10px]" : "ml-3 px-3 py-1 text-xs"} ${styles.chip} bg-gradient-to-r from-purple-500 to-cyan-500 !text-white rounded-md font-medium`}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
    >
      {label}
    </motion.span>
  );
}

function DateChip({ period, compact = false }: { period: string; compact?: boolean }) {
  return (
    <motion.div
      className="flex items-center mt-2 md:mt-0 shrink-0"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 1.05, transition: { duration: 0.2 } }}
    >
      <motion.div
        whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
        whileTap={{ rotate: 360, transition: { duration: 0.5 } }}
      >
        <Calendar className="text-cyan-400 mr-2" size={compact ? 14 : 18} />
      </motion.div>
      <motion.span
        className={`${compact ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"} ${styles.chip} bg-gradient-to-r from-purple-500 to-cyan-500 !text-white rounded-md font-medium`}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        whileTap={{ scale: 1.05, transition: { duration: 0.2 } }}
      >
        {period}
      </motion.span>
    </motion.div>
  );
}

function EmphasizedText({ text }: { text: string }) {
  return text.split(/(<strong>.*?<\/strong>)/g).map((part) => {
    const isStrong = part.startsWith("<strong>") && part.endsWith("</strong>");
    const content = isStrong ? part.slice("<strong>".length, -"</strong>".length) : part;

    return isStrong ? <strong key={content}>{content}</strong> : part;
  });
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <motion.div
          key={item}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.5 }}
          whileHover={{ x: 5, transition: { duration: 0.2 } }}
          whileTap={{ x: 5, transition: { duration: 0.2 } }}
        >
          <div className="flex items-start space-x-3">
            <motion.div
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-2 flex-shrink-0"
              whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
              whileTap={{ scale: 1.5, transition: { duration: 0.2 } }}
            />
            <motion.p
              className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
              whileHover={{ x: 3, transition: { duration: 0.2 } }}
              whileTap={{ x: 3, transition: { duration: 0.2 } }}
            >
              <EmphasizedText text={item} />
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function TechChips({ tech }: { tech: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {tech.map((item) => (
        <motion.span
          key={item}
          className={`${styles.techChip} text-xs font-medium px-2.5 py-1 rounded-md border border-purple-400/50 bg-gray-100 text-gray-800 dark:bg-white/10 dark:!text-gray-200 dark:border-cyan-400/40`}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}

function RoleBody({ role }: { role: ExperienceRole }) {
  return (
    <div className="space-y-5 mt-4">
      {role.summary && (
        <motion.p
          className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-semibold"
          whileHover={{ x: 3, transition: { duration: 0.2 } }}
          whileTap={{ x: 3, transition: { duration: 0.2 } }}
        >
          <EmphasizedText text={role.summary} />
        </motion.p>
      )}

      {role.description.length > 0 && <BulletList items={role.description} />}

      {role.projects && role.projects.length > 0 && (
        <div>
          <motion.h4
            className="text-sm md:text-base font-bold uppercase tracking-wide text-purple-600 dark:!text-purple-300 mb-3"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            Key Engineering Projects
          </motion.h4>
          <div className="space-y-4">
            {role.projects.map((project) => (
              <div key={project.name}>
                <div className="flex items-start gap-2 mb-2">
                  <motion.span
                    className="mt-1.5 w-1.5 h-1.5 rotate-45 bg-gradient-to-r from-purple-500 to-cyan-500 flex-shrink-0"
                    whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 1.5, transition: { duration: 0.2 } }}
                  />
                  <motion.h5
                    className="text-sm md:text-base font-bold text-gray-900 dark:text-white"
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    whileTap={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    {project.name}
                  </motion.h5>
                </div>
                <div className="pl-4">
                  <BulletList items={project.bullets} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {role.infra && role.infra.length > 0 && (
        <div>
          <motion.h4
            className="text-sm md:text-base font-bold uppercase tracking-wide text-cyan-600 dark:!text-cyan-300 mb-3"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            Infrastructure & Deployment
          </motion.h4>
          <BulletList items={role.infra} />
        </div>
      )}

      {role.tech && role.tech.length > 0 && (
        <div>
          <motion.h4
            className="text-sm md:text-base font-bold uppercase tracking-wide text-purple-600 dark:!text-purple-300 mb-3"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            Tech Stack
          </motion.h4>
          <TechChips tech={role.tech} />
        </div>
      )}

      {role.recognition && (
        <div className="flex items-start gap-2 pt-1">
          <motion.div
            whileHover={{ rotate: 360, transition: { duration: 0.5 } }}
            whileTap={{ rotate: 360, transition: { duration: 0.5 } }}
          >
            <Award className="text-purple-400 mt-0.5 flex-shrink-0" size={16} />
          </motion.div>
          <motion.p
            className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed font-semibold"
            whileHover={{ x: 3, transition: { duration: 0.2 } }}
            whileTap={{ x: 3, transition: { duration: 0.2 } }}
          >
            {role.recognition}
          </motion.p>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
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
          <motion.h2
            className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500"
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
            Work Experience
          </motion.h2>
        </motion.div>

        <div className="space-y-10">
          {experiences.map((exp) => {
            const isMultiRole = exp.roles.length > 1;
            const singleRole = exp.roles[0];

            return (
              <motion.div
                key={exp.company}
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
                <motion.div className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-cyan-500" />

                  {!isMultiRole && singleRole ? (
                    <>
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <div className="flex flex-wrap items-center mb-2">
                            <motion.h3
                              className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                              whileHover={{ x: 5, transition: { duration: 0.2 } }}
                              whileTap={{ x: 5, transition: { duration: 0.2 } }}
                            >
                              {exp.company}
                            </motion.h3>
                            {exp.companyMeta && <TypeChip label={exp.companyMeta.toUpperCase()} />}
                          </div>
                          <motion.div
                            className="flex items-center mt-2"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            whileTap={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
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
                              <Briefcase className="text-purple-400 mr-2" size={18} />
                            </motion.div>
                            <motion.p
                              className="text-gray-700 dark:text-gray-200 font-medium transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 cursor-default"
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {singleRole.title}
                            </motion.p>
                          </motion.div>
                          {exp.location && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-7">
                              {exp.location}
                            </p>
                          )}
                        </div>
                        <DateChip period={singleRole.period} />
                      </div>
                      <div className="mt-6">
                        <RoleBody role={singleRole} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row justify-between mb-6">
                        <div>
                          <div className="flex flex-wrap items-center mb-2">
                            <motion.h3
                              className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                              whileHover={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{
                                x: 5,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {exp.company}
                            </motion.h3>
                            {exp.companyMeta && <TypeChip label="INTERNSHIP" />}
                          </div>
                          <motion.div
                            className="flex items-center mt-2"
                            whileHover={{ x: 5, transition: { duration: 0.2 } }}
                            whileTap={{ x: 5, transition: { duration: 0.2 } }}
                          >
                            <motion.div
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
                              <Briefcase className="text-purple-400 mr-2" size={18} />
                            </motion.div>
                            <p className="text-gray-700 dark:text-gray-200 font-medium">
                              {exp.companyMeta}
                            </p>
                          </motion.div>
                          {exp.location && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 ml-7">
                              {exp.location}
                            </p>
                          )}
                        </div>
                        {exp.companyPeriod && <DateChip period={exp.companyPeriod} />}
                      </div>

                      {exp.companySummary && (
                        <motion.div
                          className="mb-6 p-4 rounded-lg border border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5"
                          whileHover={{ x: 3, transition: { duration: 0.2 } }}
                          whileTap={{ x: 3, transition: { duration: 0.2 } }}
                        >
                          <motion.h4
                            className="text-sm md:text-base font-bold uppercase tracking-wide text-purple-600 dark:!text-purple-300 mb-2"
                            whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            whileTap={{ x: 3, transition: { duration: 0.2 } }}
                          >
                            Professional Summary
                          </motion.h4>
                          <motion.p
                            className="text-sm md:text-base text-gray-700 dark:text-gray-200 leading-relaxed"
                            whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            whileTap={{ x: 3, transition: { duration: 0.2 } }}
                          >
                            {exp.companySummary}
                          </motion.p>
                        </motion.div>
                      )}

                      <div className="relative ml-1 md:ml-2 space-y-5">
                        <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-purple-500 to-cyan-500" />

                        {exp.roles.map((role) => (
                          <motion.div
                            key={role.title}
                            className="relative pl-7"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ x: 3, transition: { duration: 0.2 } }}
                            whileTap={{ x: 3, transition: { duration: 0.2 } }}
                          >
                            <motion.span
                              className="absolute left-0 top-4 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 ring-4 ring-white dark:ring-[#1e1e3c]"
                              whileHover={{ scale: 1.5, transition: { duration: 0.2 } }}
                              whileTap={{ scale: 1.5, transition: { duration: 0.2 } }}
                            />
                            <div className="rounded-lg border border-gray-200/80 dark:border-white/10 bg-gray-50/80 dark:bg-white/5 p-4 md:p-5">
                              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-1">
                                <div className="flex flex-wrap items-center">
                                  <motion.h4
                                    className="text-xl font-semibold text-gray-900 dark:text-white"
                                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                                    whileTap={{ x: 3, transition: { duration: 0.2 } }}
                                  >
                                    {role.title}
                                  </motion.h4>
                                  <TypeChip label={role.type.toUpperCase()} compact />
                                </div>
                                <DateChip period={role.period} compact />
                              </div>
                              <RoleBody role={role} />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
