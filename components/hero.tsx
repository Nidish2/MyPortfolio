"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Cursor, useTypewriter } from "react-simple-typewriter"

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)
  const [words, count] = useTypewriter({
    words: ["Web Developer", "Problem Solver", "CS Engineer", "MERN Stack Developer"],
    loop: true,
    delaySpeed: 2000,
  })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#5e1fff]/20 to-transparent z-0 opacity-50"></div>

      {/* Simple background with gradient instead of 3D canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff]">
            NIDISH
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            <span>{words}</span>
            <Cursor cursorColor="#2ee5ff" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMounted ? (
              <button
                className="rounded-full px-8 py-4 bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff] text-white font-bold hover:shadow-lg hover:shadow-[#5e1fff]/50 transition-all duration-300"
                onClick={() => {
                  window.scrollTo({
                    top: window.innerHeight,
                    behavior: "smooth",
                  })
                }}
              >
                Explore My Work
              </button>
            ) : (
              <div className="rounded-full px-8 py-4 bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff] text-white font-bold">
                Explore My Work
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="text-[#2ee5ff] animate-pulse"
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </div>
  )
}
