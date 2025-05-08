"use client"

import type React from "react"

import { useRef } from "react"
import { motion } from "framer-motion"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const educationRef = useRef<HTMLDivElement>(null)
  const projectsRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, experienceRef, educationRef, projectsRef, skillsRef, contactRef }}
      />

      <section className="h-screen">
        <Hero />
      </section>

      <motion.section
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
        ref={experienceRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 bg-[#24243e]/70"
      >
        <Experience />
      </motion.section>

      <motion.section
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
        ref={projectsRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 bg-[#24243e]/70"
      >
        <Projects />
      </motion.section>

      <motion.section
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
        ref={contactRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-20 px-4 md:px-10 bg-[#24243e]/70"
      >
        <Contact />
      </motion.section>
    </main>
  )
}
