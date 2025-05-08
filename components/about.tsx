"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <div className="container mx-auto max-w-6xl">
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={containerVariants} ref={ref}>
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            About Me
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div variants={itemVariants} className="w-full md:w-1/3 relative group">
            <div className="relative z-10 rounded-full overflow-hidden border-4 border-purple-500 shadow-xl shadow-purple-500/30 transition-all duration-500 group-hover:shadow-cyan-500/30 group-hover:border-cyan-500 w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto">
              <img
                src="/images/profile.png"
                alt="Nidish"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 w-[200px] h-[200px] md:w-[300px] md:h-[300px] mx-auto"></div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full md:w-2/3">
            <div className="p-8 rounded-xl bg-[rgba(30,30,60,0.4)] backdrop-blur-md shadow-xl border border-white/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
              <p className="text-lg mb-4 leading-relaxed">
                I am a Computer Science Engineering student with a strong background in programming, problem-solving,
                and teamwork. I enjoy applying theory to practical challenges and contributing to new projects.
              </p>
              <p className="text-lg mb-4 leading-relaxed">
                I continuously work on expanding my technical skills and using modern technologies to create effective
                solutions and improve system performance.
              </p>
              <p className="text-lg leading-relaxed">
                My expertise spans across web development with the MERN stack, containerization with Docker and
                Kubernetes, and I'm currently exploring machine learning and AI.
              </p>
            </div>

            <motion.div variants={containerVariants} className="mt-8">
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <div className="p-3 bg-[rgba(30,30,60,0.4)] rounded-md border-l-4 border-purple-500 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1">
                    <p className="font-bold">Location</p>
                    <p>Bangalore, India</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <div className="p-3 bg-[rgba(30,30,60,0.4)] rounded-md border-l-4 border-purple-500 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1">
                    <p className="font-bold">Email</p>
                    <p>nidish2207@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <div className="p-3 bg-[rgba(30,30,60,0.4)] rounded-md border-l-4 border-purple-500 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1">
                    <p className="font-bold">Phone</p>
                    <p>+91 8904316325</p>
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
                  <div className="p-3 bg-[rgba(30,30,60,0.4)] rounded-md border-l-4 border-purple-500 transition-all duration-300 hover:border-cyan-500 hover:-translate-y-1">
                    <p className="font-bold">Languages</p>
                    <p>English, Kannada, Tulu, Hindi, Telugu, Tamil</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
