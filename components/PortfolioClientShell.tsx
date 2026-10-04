"use client";

import { motion } from "framer-motion";
import type React from "react";
import { startTransition, useEffect, useRef, useState } from "react";
import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Certificates from "@/components/Certificates";
import Connect from "@/components/Connect";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Extracurricular from "@/components/Extracurricular";
import Footer from "@/components/Footer";
import Hackathons from "@/components/Hackathons";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function PortfolioClientShell() {
  const [theme, setTheme] = useState("dark");
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    // The persisted preference only exists in the browser after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    startTransition(() => {
      setTheme(newTheme);
    });
  };

  // Cursor glow tracking, clicks, hover detection, and scroll parallax bindings.
  // Pointer Events cover mouse, touch, and pen with one listener set.
  useEffect(() => {
    let tickingCursor = false;
    let tickingScroll = false;

    const isInteractiveTarget = (target: EventTarget | null) => {
      if (!(target instanceof HTMLElement)) return false;

      return (
        Boolean(target.closest("a")) ||
        Boolean(target.closest("button")) ||
        Boolean(target.closest(".portfolio-card")) ||
        Boolean(target.closest("[role='button']")) ||
        Boolean(target.closest(".cursor-pointer")) ||
        Boolean(target.closest("input")) ||
        Boolean(target.closest("textarea"))
      );
    };

    const updateCursorPosition = (x: number, y: number) => {
      if (!tickingCursor) {
        window.requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;
          }
          tickingCursor = false;
        });
        tickingCursor = true;
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      updateCursorPosition(event.clientX, event.clientY);
    };

    const handlePointerDown = (event: PointerEvent) => {
      updateCursorPosition(event.clientX, event.clientY);

      if (cursorRef.current) {
        cursorRef.current.classList.add("cursor-clicked");
        if (isInteractiveTarget(event.target)) {
          cursorRef.current.classList.add("cursor-hover");
        }
      }
    };

    const handlePointerUp = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("cursor-clicked");
        cursorRef.current.classList.remove("cursor-hover");
      }
    };

    const handlePointerOver = (event: PointerEvent) => {
      cursorRef.current?.classList.toggle("cursor-hover", isInteractiveTarget(event.target));
    };

    let lastScrollPercent = -1;
    const handleScroll = () => {
      if (!tickingScroll) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent =
            scrollHeight > 0 ? Math.round((window.scrollY / scrollHeight) * 100) / 100 : 0;
          if (Math.abs(scrollPercent - lastScrollPercent) >= 0.01) {
            lastScrollPercent = scrollPercent;
            document.documentElement.style.setProperty(
              "--scroll-percent",
              scrollPercent.toString(),
            );
          }
          tickingScroll = false;
        });
        tickingScroll = true;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const hackathonsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const extracurricularRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      const yOffset = -80;
      const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main
      className={`portfolio-shell text-gray-800 dark:text-white min-h-screen transition-colors duration-300 ${theme === "dark" ? "dark" : ""}`}
    >
      <div ref={cursorRef} className="cursor-glow" />
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

      <PortfolioSection id="about" sectionRef={aboutRef}>
        <About />
      </PortfolioSection>
      <PortfolioSection id="experience" sectionRef={experienceRef} muted>
        <Experience />
      </PortfolioSection>
      <PortfolioSection id="education" sectionRef={educationRef}>
        <Education />
      </PortfolioSection>
      <PortfolioSection id="projects" sectionRef={projectsRef} muted>
        <Projects />
      </PortfolioSection>
      <PortfolioSection id="skills" sectionRef={skillsRef}>
        <Skills />
      </PortfolioSection>
      <PortfolioSection id="certificates" sectionRef={certificatesRef} muted>
        <Certificates />
      </PortfolioSection>
      <PortfolioSection id="hackathons" sectionRef={hackathonsRef}>
        <Hackathons />
      </PortfolioSection>
      <PortfolioSection id="achievements" sectionRef={achievementsRef} muted>
        <Achievements />
      </PortfolioSection>
      <PortfolioSection id="extracurricular" sectionRef={extracurricularRef}>
        <Extracurricular />
      </PortfolioSection>
      <PortfolioSection id="contact" sectionRef={contactRef} muted>
        <Contact />
        <div className="mt-20">
          <Connect />
        </div>
      </PortfolioSection>

      <Footer />
    </main>
  );
}

type PortfolioSectionProps = {
  children: React.ReactNode;
  id: string;
  muted?: boolean;
  sectionRef: React.RefObject<HTMLElement | null>;
};

function PortfolioSection({ children, id, muted = false, sectionRef }: PortfolioSectionProps) {
  return (
    <motion.section
      id={id}
      ref={sectionRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`portfolio-section${muted ? " portfolio-section-muted" : ""}`}
    >
      {children}
    </motion.section>
  );
}
