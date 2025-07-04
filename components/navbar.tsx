"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sun, Moon } from "lucide-react"

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>
    experienceRef: React.RefObject<HTMLDivElement>
    educationRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
    certificatesRef: React.RefObject<HTMLDivElement>
    hackathonsRef: React.RefObject<HTMLDivElement>
    achievementsRef: React.RefObject<HTMLDivElement>
    extracurricularRef: React.RefObject<HTMLDivElement>
    personalityRef: React.RefObject<HTMLDivElement>
    goalsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
  }
  theme: string
  toggleTheme: () => void
}

export default function Navbar({ scrollToSection, refs, theme, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 100

      if (scrollPosition < window.innerHeight) {
        setActiveSection("hero")
      } else if (
        scrollPosition >= (refs.aboutRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.experienceRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("about")
      } else if (
        scrollPosition >= (refs.experienceRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.educationRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("experience")
      } else if (
        scrollPosition >= (refs.educationRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.projectsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("education")
      } else if (
        scrollPosition >= (refs.projectsRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.skillsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("projects")
      } else if (
        scrollPosition >= (refs.skillsRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.certificatesRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("skills")
      } else if (
        scrollPosition >= (refs.certificatesRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.hackathonsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("certificates")
      } else if (
        scrollPosition >= (refs.hackathonsRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.achievementsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("hackathons")
      } else if (
        scrollPosition >= (refs.achievementsRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.extracurricularRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("achievements")
      } else if (
        scrollPosition >= (refs.extracurricularRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.personalityRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("extracurricular")
      } else if (
        scrollPosition >= (refs.personalityRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.goalsRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("personality")
      } else if (
        scrollPosition >= (refs.goalsRef.current?.offsetTop || 0) &&
        scrollPosition < (refs.contactRef.current?.offsetTop || Number.POSITIVE_INFINITY)
      ) {
        setActiveSection("goals")
      } else if (scrollPosition >= (refs.contactRef.current?.offsetTop || 0)) {
        setActiveSection("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [refs])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navItems = [
    { name: "About", ref: refs.aboutRef, id: "about" },
    { name: "Experience", ref: refs.experienceRef, id: "experience" },
    { name: "Education", ref: refs.educationRef, id: "education" },
    { name: "Projects", ref: refs.projectsRef, id: "projects" },
    { name: "Skills", ref: refs.skillsRef, id: "skills" },
    { name: "Certificates", ref: refs.certificatesRef, id: "certificates" },
    { name: "Hackathons", ref: refs.hackathonsRef, id: "hackathons" },
    { name: "Achievements", ref: refs.achievementsRef, id: "achievements" },
    { name: "Activities", ref: refs.extracurricularRef, id: "extracurricular" },
    { name: "Personality", ref: refs.personalityRef, id: "personality" },
    { name: "Goals", ref: refs.goalsRef, id: "goals" },
    { name: "Contact", ref: refs.contactRef, id: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? theme === "dark"
            ? "bg-[#0f0c29]/95 backdrop-blur-xl py-2 shadow-2xl border-b border-white/10"
            : "bg-white/95 backdrop-blur-xl py-2 shadow-2xl border-b border-gray-200/50"
          : theme === "dark"
            ? "bg-transparent py-4"
            : "bg-black/10 backdrop-blur-md py-4 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          whileHover={{
            scale: 1.05,
            textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
          }}
          whileTap={{ scale: 0.95 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff] cursor-pointer transition-all duration-300 hover:animate-glow"
        >
          NIDISH
        </motion.button>

        {/* Desktop Navigation - ENHANCED WITH BEAUTIFUL STYLING */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {isMounted && (
                <motion.button
                  onClick={() => scrollToSection(item.ref)}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    textShadow:
                      theme === "dark" ? "0 4px 12px rgba(94, 31, 255, 0.6)" : "0 4px 12px rgba(94, 31, 255, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-4 py-2.5 rounded-xl transition-all duration-300 text-sm font-bold relative overflow-hidden group
                    ${
                      activeSection === item.id
                        ? theme === "dark"
                          ? "text-[#2ee5ff] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-2 border-[#2ee5ff]/50 shadow-lg shadow-cyan-500/25"
                          : "text-[#2ee5ff] bg-gradient-to-r from-purple-500/15 to-cyan-500/15 border-2 border-[#2ee5ff]/40 shadow-lg shadow-cyan-500/25"
                        : theme === "dark"
                          ? "text-white hover:text-[#5e1fff] hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/30 border border-transparent hover:border-purple-500/30"
                          : isScrolled
                            ? "text-gray-900 hover:text-[#5e1fff] hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:shadow-lg hover:shadow-purple-500/25 border border-transparent hover:border-purple-500/20"
                            : "text-white drop-shadow-lg hover:text-[#5e1fff] hover:bg-white/20 hover:shadow-lg hover:shadow-purple-500/30 border border-white/20 hover:border-purple-500/40 backdrop-blur-sm"
                    }
                  `}
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                    animate={{
                      x: activeSection === item.id ? ["-100%", "100%"] : 0,
                    }}
                    transition={{
                      duration: 2,
                      repeat: activeSection === item.id ? Number.POSITIVE_INFINITY : 0,
                      ease: "linear",
                    }}
                  />

                  {/* Text with enhanced styling */}
                  <span className="relative z-10 tracking-wide">{item.name}</span>

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </motion.button>
              )}
            </motion.div>
          ))}

          {/* Enhanced Theme Toggle */}
          <motion.button
            whileHover={{
              scale: 1.15,
              rotate: 180,
              boxShadow: theme === "dark" ? "0 8px 25px rgba(255, 193, 7, 0.4)" : "0 8px 25px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`
              p-3 rounded-full backdrop-blur-lg border-2 transition-all duration-500 ml-4
              ${
                theme === "dark"
                  ? "bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-yellow-400/30 hover:border-yellow-400/50 shadow-lg shadow-yellow-400/20"
                  : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 hover:border-blue-500/50 shadow-lg shadow-blue-500/20"
              }
            `}
            aria-label="Toggle theme"
          >
            <motion.div
              animate={{ rotate: theme === "dark" ? 0 : 180 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-yellow-400 drop-shadow-lg" />
              ) : (
                <Moon className="h-5 w-5 text-blue-600 drop-shadow-lg" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation Toggle - Enhanced */}
        <div className="lg:hidden flex items-center space-x-4">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`
              p-2.5 rounded-full backdrop-blur-lg border-2 transition-all duration-500
              ${
                theme === "dark"
                  ? "bg-gradient-to-r from-yellow-400/20 to-orange-400/20 border-yellow-400/30 shadow-lg shadow-yellow-400/20"
                  : "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/30 shadow-lg shadow-blue-500/20"
              }
            `}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-600" />
            )}
          </motion.button>

          {isMounted && (
            <motion.button
              onClick={toggleMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle menu"
              className={`
                p-2.5 rounded-full backdrop-blur-lg border-2 transition-all duration-300
                ${
                  theme === "dark"
                    ? "bg-cyan-500/20 border-cyan-500/30 text-cyan-400 hover:border-cyan-400/50 shadow-lg shadow-cyan-500/20"
                    : "bg-purple-500/20 border-purple-500/30 text-purple-600 hover:border-purple-500/50 shadow-lg shadow-purple-500/20"
                }
              `}
            >
              <motion.div animate={{ rotate: isMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          )}
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -20 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`
            lg:hidden backdrop-blur-xl border-t-2
            ${
              theme === "dark"
                ? "bg-[#0f0c29]/95 border-white/10 shadow-2xl shadow-purple-500/10"
                : "bg-white/95 border-gray-200/50 shadow-2xl shadow-purple-500/5"
            }
          `}
        >
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                onClick={() => {
                  scrollToSection(item.ref)
                  setIsMenuOpen(false)
                }}
                whileHover={{ x: 8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  text-left py-4 px-6 rounded-xl transition-all duration-300 font-semibold relative overflow-hidden group
                  ${
                    activeSection === item.id
                      ? theme === "dark"
                        ? "text-[#2ee5ff] bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-l-4 border-[#2ee5ff] shadow-lg shadow-cyan-500/20"
                        : "text-[#2ee5ff] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-l-4 border-[#2ee5ff] shadow-lg shadow-cyan-500/15"
                      : theme === "dark"
                        ? "text-white hover:text-[#5e1fff] hover:bg-white/10 hover:border-l-4 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
                        : "text-gray-900 font-bold hover:text-[#5e1fff] hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 hover:border-l-4 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/15"
                  }
                `}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10 tracking-wide">{item.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
