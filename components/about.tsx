"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="container mx-auto max-w-6xl about-section">
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
          >
            Profile
          </motion.h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/3 relative group"
          >
            <motion.div
              className="relative z-10 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/30 transition-all duration-500 group-hover:shadow-cyan-500/30 group-hover:border-cyan-500 w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto"
              whileHover={{
                scale: 1.05,
                rotate: 5,
                boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.6)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src="Profile.jpg"
                alt="Nidish"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full md:w-2/3">
            <motion.div
              className="p-8 portfolio-card portfolio-card-light dark:portfolio-card-dark"
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.4)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>

              <motion.p
                className="text-lg mb-4 leading-relaxed text-primary-light dark:text-primary-dark font-medium"
                whileHover={{
                  x: 5,
                  color: "#5e1fff",
                  transition: { duration: 0.3 },
                }}
              >
                Computer Science Engineering student skilled in{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                >
                  MERN stack
                </motion.span>
                ,{" "}
                <motion.span
                  className="text-cyan-600 dark:text-cyan-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#06b6d4" }}
                >
                  Java web tech
                </motion.span>
                ,{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                >
                  Data Science
                </motion.span>
                , and{" "}
                <motion.span
                  className="text-cyan-600 dark:text-cyan-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#06b6d4" }}
                >
                  AI/ML
                </motion.span>
                .
              </motion.p>

              <motion.p
                className="text-lg mb-4 leading-relaxed text-primary-light dark:text-primary-dark font-medium"
                whileHover={{
                  x: 5,
                  color: "#2ee5ff",
                  transition: { duration: 0.3 },
                }}
              >
                Built scalable projects like{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                >
                  3D model generators
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-cyan-600 dark:text-cyan-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#06b6d4" }}
                >
                  analytics dashboards
                </motion.span>{" "}
                using FastAPI, React, and ML tools.
              </motion.p>

              <motion.p
                className="text-lg leading-relaxed text-primary-light dark:text-primary-dark font-medium"
                whileHover={{
                  x: 5,
                  color: "#5e1fff",
                  transition: { duration: 0.3 },
                }}
              >
                Strong in{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                >
                  DSA (Java)
                </motion.span>{" "}
                with proven leadership via{" "}
                <motion.span
                  className="text-cyan-600 dark:text-cyan-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#06b6d4" }}
                >
                  NCC
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-purple-600 dark:text-purple-400 font-semibold"
                  whileHover={{ scale: 1.05, color: "#8b5cf6" }}
                >
                  BNMIT Super 60
                </motion.span>
                .
              </motion.p>
            </motion.div>

            <motion.div variants={containerVariants} className="mt-8">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                {[
                  { label: "Location", value: "Bangalore, India" },
                  { label: "Email", value: "nidish2207@gmail.com" },
                  { label: "Phone", value: "+91 8904316325" },
                  { label: "GitHub", value: "Nidish22" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <motion.div
                      className="p-4 bg-secondary-card rounded-lg border-l-4 border-purple-500 transition-all duration-300 shadow-lg backdrop-blur-md"
                      whileHover={{
                        borderColor: "#06b6d4",
                        boxShadow: "0 15px 30px rgba(94, 31, 255, 0.3)",
                      }}
                    >
                      <motion.p
                        className="font-bold text-primary-light dark:text-primary-dark"
                        whileHover={{
                          color: "#5e1fff",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {item.label}
                      </motion.p>
                      <motion.p
                        className="text-secondary-light dark:text-secondary-dark"
                        whileHover={{
                          color: "#2ee5ff",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {item.value}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
