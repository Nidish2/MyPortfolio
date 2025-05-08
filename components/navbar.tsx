"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void
  refs: {
    aboutRef: React.RefObject<HTMLDivElement>
    experienceRef: React.RefObject<HTMLDivElement>
    educationRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    skillsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
  }
}

export default function Navbar({ scrollToSection, refs }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")

  useEffect(() => {
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
        scrollPosition >= refs.aboutRef.current?.offsetTop &&
        scrollPosition < refs.experienceRef.current?.offsetTop
      ) {
        setActiveSection("about")
      } else if (
        scrollPosition >= refs.experienceRef.current?.offsetTop &&
        scrollPosition < refs.educationRef.current?.offsetTop
      ) {
        setActiveSection("experience")
      } else if (
        scrollPosition >= refs.educationRef.current?.offsetTop &&
        scrollPosition < refs.projectsRef.current?.offsetTop
      ) {
        setActiveSection("education")
      } else if (
        scrollPosition >= refs.projectsRef.current?.offsetTop &&
        scrollPosition < refs.skillsRef.current?.offsetTop
      ) {
        setActiveSection("projects")
      } else if (
        scrollPosition >= refs.skillsRef.current?.offsetTop &&
        scrollPosition < refs.contactRef.current?.offsetTop
      ) {
        setActiveSection("skills")
      } else if (scrollPosition >= refs.contactRef.current?.offsetTop) {
        setActiveSection("contact")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [refs])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = [
    { name: "About", ref: refs.aboutRef, id: "about" },
    { name: "Experience", ref: refs.experienceRef, id: "experience" },
    { name: "Education", ref: refs.educationRef, id: "education" },
    { name: "Projects", ref: refs.projectsRef, id: "projects" },
    { name: "Skills", ref: refs.skillsRef, id: "skills" },
    { name: "Contact", ref: refs.contactRef, id: "contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0f0c29]/80 backdrop-blur-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#5e1fff] to-[#2ee5ff]"
        >
          NIDISH
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <button
                onClick={() => scrollToSection(item.ref)}
                className={`text-white px-3 py-2 rounded-md transition-all duration-300 ${
                  activeSection === item.id ? "border-b-2 border-[#2ee5ff] text-[#2ee5ff]" : "hover:text-[#5e1fff]"
                }`}
              >
                {item.name}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-[#2ee5ff] p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0f0c29]/90 backdrop-blur-md"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.ref)
                  setIsMenuOpen(false)
                }}
                className={`text-white text-left py-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "border-l-4 border-[#2ee5ff] text-[#2ee5ff] pl-4"
                    : "hover:text-[#5e1fff] pl-4"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
