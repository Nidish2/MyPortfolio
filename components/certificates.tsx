"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, ExternalLink, Shield, Code, Trophy } from "lucide-react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link?: string;
  category: "redhat" | "programming" | "ai" | "ncc" | "general";
}

const certificates: Certificate[] = [
  {
    title:
      "Red Hat OpenShift Administration I: Operating a Production Cluster (DO180)",
    issuer: "Red Hat",
    date: "2024",
    description:
      "Professional certification in OpenShift container platform administration and production cluster operations.",
    image: "/red_hat.jpg?height=300&width=400",
    link: "#",
    category: "redhat",
  },
  {
    title: "Red Hat System Administration I & II (RH124, RH134)",
    issuer: "Red Hat",
    date: "2024",
    description:
      "Comprehensive system administration certification covering Linux fundamentals and advanced administration.",
    image: "/red_hat.jpg?height=300&width=400",
    link: "#",
    category: "redhat",
  },
  {
    title:
      "Java Servlet Basics and JSP 101, Introduction to Spring Framework 101",
    issuer: "Simplilearn",
    date: "2024",
    description:
      "Java web development certification covering servlets, JSP, and Spring framework fundamentals.",
    image: "/Simplilearn.jpg?height=300&width=400",
    link: "#",
    category: "programming",
  },
  {
    title: "Java Programming Skill Certificate",
    issuer: "HackerRank",
    date: "2024",
    description:
      "Verified Java programming skills through comprehensive coding assessments and challenges.",
    image: "/HK.jpg?height=300&width=400",
    link: "#",
    category: "programming",
  },
  {
    title: "The Complete Prompt Engineering for AI Bootcamp",
    issuer: "Udemy",
    date: "2025",
    description:
      "Advanced certification in AI prompt engineering techniques and best practices for generative AI.",
    image: "/udemy.jpg?height=300&width=400",
    link: "#",
    category: "ai",
  },
  {
    title:
      "Artificial Intelligence: Types of AI, Explore Machine Learning using Python",
    issuer: "Springboard",
    date: "2024",
    description:
      "Comprehensive AI and machine learning certification with hands-on Python implementation.",
    image: "/SB.jpg?height=300&width=400",
    link: "#",
    category: "ai",
  },
  {
    title: "Java Programming, Advanced SQL, Front End Development",
    issuer: "Great Learning",
    date: "2024",
    description:
      "Multiple certifications covering Java programming, advanced SQL techniques, and frontend development.",
    image: "/GL.jpg?height=300&width=400",
    link: "#",
    category: "general",
  },
  {
    title: "National Cadet Corps (NCC) - 'B' and 'C' Certificates",
    issuer: "National Cadet Corps",
    date: "2023-2025",
    description:
      "Military training and leadership development certificates with gold medals in cultural activities.",
    image: "/NCC.jpg?height=300&width=400",
    link: "#",
    category: "ncc",
  },
];

export default function Certificates() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "redhat":
        return Shield;
      case "programming":
        return Code;
      case "ai":
        return Award;
      case "ncc":
        return Trophy;
      default:
        return Award;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "redhat":
        return "from-red-500 to-red-700";
      case "programming":
        return "from-blue-500 to-blue-700";
      case "ai":
        return "from-purple-500 to-purple-700";
      case "ncc":
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
          >
            Certifications
          </motion.h2>
        </motion.div>

        <div className="space-y-8">
          {certificates.map((certificate, index) => {
            const IconComponent = getCategoryIcon(certificate.category);
            const colorClass = getCategoryColor(certificate.category);

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div className="overflow-hidden portfolio-card portfolio-card-light dark:portfolio-card-dark">
                  <div className="flex flex-col md:flex-row">
                    {/* Certificate Image */}
                    <div className="w-full md:w-1/3 p-6 flex items-center justify-center">
                      <motion.div
                        className="relative group w-full max-w-sm"
                        whileHover={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${colorClass} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                        ></div>
                        <div className="relative">
                          <img
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            className="rounded-lg w-full h-auto object-cover"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Certificate Details */}
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
                      <div className="flex items-start mb-4">
                        <motion.div
                          className={`p-2 rounded-full bg-gradient-to-r ${colorClass} text-white mr-3 mt-1`}
                          whileHover={{
                            scale: 1.1,
                            rotate: 360,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <IconComponent size={20} />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            className="text-xl font-bold text-primary-light dark:text-primary-dark mb-2 leading-tight"
                            whileHover={{
                              x: 5,
                              color: "#5e1fff",
                              transition: { duration: 0.2 },
                            }}
                          >
                            {certificate.title}
                          </motion.h3>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <motion.p
                              className="text-secondary-light dark:text-secondary-dark font-medium"
                              whileHover={{
                                color: "#2ee5ff",
                                transition: { duration: 0.2 },
                              }}
                            >
                              {certificate.issuer}
                            </motion.p>
                            <motion.span
                              className={`bg-gradient-to-r ${colorClass} text-white px-2 py-1 rounded-md text-xs font-medium`}
                              whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                              }}
                            >
                              {certificate.date}
                            </motion.span>
                          </div>
                        </div>
                      </div>

                      <motion.p
                        className="text-secondary-light dark:text-secondary-dark mb-4 leading-relaxed"
                        whileHover={{
                          color: "#5e1fff",
                          transition: { duration: 0.3 },
                        }}
                      >
                        {certificate.description}
                      </motion.p>

                      {certificate.link && (
                        <motion.a
                          href={certificate.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-cyan-600 dark:text-cyan-400 transition-colors w-fit"
                          whileHover={{
                            x: 5,
                            color: "#06b6d4",
                            transition: { duration: 0.2 },
                          }}
                        >
                          View Certificate{" "}
                          <motion.div
                            whileHover={{
                              rotate: 360,
                              transition: { duration: 0.5 },
                            }}
                          >
                            <ExternalLink size={16} className="ml-2" />
                          </motion.div>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
