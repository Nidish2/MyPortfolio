"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Achievements from "@/components/achievements"
import Personality from "@/components/personality"
import ProfessionalGoals from "@/components/professional-goals"
import Connect from "@/components/connect"
import Certificates from "@/components/certificates"
import Hackathons from "@/components/hackathons"
import Extracurricular from "@/components/extracurricular"

export default function Home() {
  const [theme, setTheme] = useState("dark")
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const savedTheme = localStorage.getItem("theme") || "dark"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const certificatesRef = useRef<HTMLDivElement>(null)
  const hackathonsRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)
  const extracurricularRef = useRef<HTMLDivElement>(null)
  const personalityRef = useRef<HTMLDivElement>(null)
  const goalsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const yOffset = -80 // Adjust for header height
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <main
      className={`text-gray-800 dark:text-white min-h-screen transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}
    >
      <Navbar
        scrollToSection={scrollToSection}
        refs={{
          aboutRef,
          experienceRef,
          educationRef,
          projectsRef,
          skillsRef,
          certificatesRef,
          hackathonsRef,
          achievementsRef,
          extracurricularRef,
          personalityRef,
          goalsRef,
          contactRef,
        }}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <section className="h-screen">
        <Hero />
      </section>

      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10"
      >
        <About />
      </motion.section>

      <motion.section
        id="experience"
        ref={experienceRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 dark:bg-[#24243e]/70 bg-gray-50"
      >
        <Experience />
      </motion.section>

      <motion.section
        id="education"
        ref={educationRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10"
      >
        <Education />
      </motion.section>

      <motion.section
        id="projects"
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 dark:bg-[#24243e]/70 bg-gray-50"
      >
        <Projects />
      </motion.section>

      <motion.section
        id="skills"
        ref={skillsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10"
      >
        <Skills />
      </motion.section>

      <motion.section
        id="certificates"
        ref={certificatesRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 dark:bg-[#24243e]/70 bg-gray-50"
      >
        <Certificates />
      </motion.section>

      <motion.section
        id="hackathons"
        ref={hackathonsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10"
      >
        <Hackathons />
      </motion.section>

      <motion.section
        id="achievements"
        ref={achievementsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 dark:bg-[#24243e]/70 bg-gray-50"
      >
        <Achievements />
      </motion.section>

      <motion.section
        id="extracurricular"
        ref={extracurricularRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10"
      >
        <Extracurricular />
      </motion.section>

      <motion.section
        id="personality"
        ref={personalityRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 dark:bg-[#24243e]/70 bg-gray-50"
      >
        <Personality />
      </motion.section>

      <motion.section
        id="goals"
        ref={goalsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10"
      >
        <ProfessionalGoals />
      </motion.section>

      <motion.section
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 dark:bg-[#24243e]/70 bg-gray-50"
      >
        <Contact />
        <div className="mt-20">
          <Connect />
        </div>
      </motion.section>

      <Footer />
    </main>
  )
}
