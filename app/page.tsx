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
import Certificates from "@/components/certificates"
import Hackathons from "@/components/hackathons"
import Extracurricular from "@/components/extracurricular"
import Connect from "@/components/connect"

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
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
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
      className={`portfolio-shell text-gray-800 dark:text-white min-h-screen transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}
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
          contactRef,
        }}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <section className="min-h-[100svh]">
        <Hero />
      </section>

      <motion.section
        id="about"
        ref={aboutRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="portfolio-section"
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
        className="portfolio-section portfolio-section-muted"
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
        className="portfolio-section"
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
        className="portfolio-section portfolio-section-muted"
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
        className="portfolio-section"
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
        className="portfolio-section portfolio-section-muted"
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
        className="portfolio-section"
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
        className="portfolio-section portfolio-section-muted"
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
        className="portfolio-section"
      >
        <Extracurricular />
      </motion.section>

      <motion.section
        id="contact"
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="portfolio-section portfolio-section-muted"
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
