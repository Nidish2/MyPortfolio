"use client";

import { motion } from "framer-motion";
import { Award, Castle, Medal, Star, Trophy } from "lucide-react";
import { useInView } from "react-intersection-observer";
import {
  type AchievementCategory,
  type AchievementIconName,
  achievements,
} from "@/content/achievements";
import { containerVariants, itemVariants } from "@/lib/animations";

const achievementIcons: Record<AchievementIconName, typeof Award> = {
  award: Award,
  castle: Castle,
  medal: Medal,
  star: Star,
  trophy: Trophy,
};

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryColor = (category: AchievementCategory) => {
    switch (category) {
      case "academic":
        return "from-blue-500 to-purple-500";
      case "ncc":
        return "from-green-500 to-teal-500";
      case "sports":
        return "from-orange-500 to-red-500";
      case "competition":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-purple-500 to-cyan-500";
    }
  };

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
            Achievements
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement) => {
            const colorClass = getCategoryColor(achievement.category);
            const Icon = achievementIcons[achievement.icon];

            return (
              <motion.div
                key={`${achievement.title}-${achievement.organization}`}
                variants={itemVariants}
                whileHover={{
                  y: -15,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                whileTap={{
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
                  whileTap={{
                    boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.4)",
                  }}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorClass}`}
                  ></div>

                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start">
                      <motion.div
                        className={`p-3 rounded-full bg-gradient-to-r ${colorClass} text-white mr-4 mt-1`}
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
                        <Icon size={24} />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3
                          className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          {achievement.title}
                        </motion.h3>
                        <motion.p
                          className="text-gray-700 dark:text-gray-100 text-sm font-medium transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 cursor-default"
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{
                            x: 5,
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
                        whileTap={{
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
                        whileTap={{
                          scale: 1.1,
                          backgroundColor: "rgba(94, 31, 255, 0.2)",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {achievement.badge}
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
                      whileTap={{
                        x: 5,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <motion.p
                        className="text-gray-700 dark:text-gray-100 text-sm leading-relaxed transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{
                          x: 5,
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
                    whileTap={{
                      opacity: 0.3,
                      scale: 1.1,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <Icon size={40} />
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
