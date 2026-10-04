"use client";

import { motion } from "framer-motion";
import { Award, Code, ExternalLink, FolderOpen, Shield, Trophy } from "lucide-react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { type CertificateCategory, certificates } from "@/content/certificates";
import { siteConfig } from "@/content/site";
import { containerVariants, itemVariants } from "@/lib/animations";

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryIcon = (category: CertificateCategory) => {
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

  const getCategoryColor = (category: CertificateCategory) => {
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
            whileTap={{
              scale: 1.05,
              textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
              transition: { duration: 0.3 },
            }}
          >
            Certifications
          </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          {/* Google Drive Archive Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center"
          >
            <motion.a
              href={siteConfig.documentsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 font-bold shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FolderOpen className="mr-2" size={20} />
              View Complete Certificate Archive
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="space-y-8">
          {certificates.map((certificate) => {
            const IconComponent = getCategoryIcon(certificate.category);
            const colorClass = getCategoryColor(certificate.category);

            return (
              <motion.div
                key={certificate.title}
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
                        whileTap={{
                          scale: 1.05,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div
                          className={`absolute -inset-1 bg-gradient-to-r ${colorClass} rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000`}
                        ></div>
                        <div className="relative">
                          <Image
                            src={certificate.image}
                            alt={certificate.title}
                            width={400}
                            height={300}
                            sizes="(max-width: 767px) 100vw, 33vw"
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
                          whileTap={{
                            scale: 1.1,
                            rotate: 360,
                            transition: { duration: 0.5 },
                          }}
                        >
                          <IconComponent size={20} />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3
                            className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                            whileHover={{
                              x: 5,
                              transition: { duration: 0.2 },
                            }}
                            whileTap={{
                              x: 5,
                              transition: { duration: 0.2 },
                            }}
                          >
                            {certificate.title}
                          </motion.h3>
                          <div className="flex flex-wrap items-center gap-2 mb-3">
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
                              {certificate.issuer}
                            </motion.p>
                            <motion.span
                              className={`bg-gradient-to-r ${colorClass} text-white px-2 py-1 rounded-md text-xs font-medium`}
                              whileHover={{
                                scale: 1.1,
                                transition: { duration: 0.2 },
                              }}
                              whileTap={{
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
                        className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed transition-colors duration-200 hover:text-purple-600 dark:hover:text-purple-400 cursor-default"
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.3 },
                        }}
                        whileTap={{
                          x: 5,
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
                          className="inline-flex items-center text-cyan-600 dark:text-cyan-400 transition-colors duration-200 hover:text-cyan-500 dark:hover:text-cyan-300 w-fit"
                          whileHover={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                          whileTap={{
                            x: 5,
                            transition: { duration: 0.2 },
                          }}
                        >
                          View Certificate{" "}
                          <motion.div
                            whileHover={{
                              rotate: 360,
                              transition: { duration: 0.5 },
                            }}
                            whileTap={{
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
