import { siteConfig } from "@/content/site";

export type CertificateCategory = "redhat" | "programming" | "ai" | "ncc" | "general";

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  link: string;
  category: CertificateCategory;
}

export const certificates: readonly Certificate[] = [
  {
    title: "Red Hat OpenShift Administration I: Operating a Production Cluster (DO180)",
    issuer: "Red Hat",
    date: "2024",
    description:
      "Professional certification in OpenShift container platform administration and production cluster operations.",
    image: "/red_hat.jpg",
    link: siteConfig.documentsUrl,
    category: "redhat",
  },
  {
    title: "Red Hat System Administration I & II (RH124, RH134)",
    issuer: "Red Hat",
    date: "2024",
    description:
      "Comprehensive system administration certification covering Linux fundamentals and advanced administration.",
    image: "/red_hat.jpg",
    link: siteConfig.documentsUrl,
    category: "redhat",
  },
  {
    title: "Java Servlet Basics and JSP 101, Introduction to Spring Framework 101",
    issuer: "Simplilearn",
    date: "2024",
    description:
      "Java web development certification covering servlets, JSP, and Spring framework fundamentals.",
    image: "/Simplilearn.jpg",
    link: siteConfig.documentsUrl,
    category: "programming",
  },
  {
    title: "Java Programming, SQL(Basic and Intermediate) and Problem Solving Skill Certificate",
    issuer: "HackerRank",
    date: "2024",
    description:
      "Verified Java programming skills through comprehensive coding assessments and challenges.",
    image: "/HK.jpg",
    link: "https://www.hackerrank.com/certificates/d6f761d0ae01",
    category: "programming",
  },
  {
    title: "The Complete Prompt Engineering for AI Bootcamp",
    issuer: "Udemy",
    date: "2025",
    description:
      "Advanced certification in AI prompt engineering techniques and best practices for generative AI.",
    image: "/udemy.jpg",
    link: "https://www.udemy.com/certificate/UC-c7907ee5-8320-4fe2-9f40-de1e2c79bcca/",
    category: "ai",
  },
  {
    title: "Artificial Intelligence: Types of AI, Explore Machine Learning using Python",
    issuer: "Springboard",
    date: "2024",
    description:
      "Comprehensive AI and machine learning certification with hands-on Python implementation.",
    image: "/SB.jpg",
    link: siteConfig.documentsUrl,
    category: "ai",
  },
  {
    title: "Java Programming, Advanced SQL, Front End Development",
    issuer: "Great Learning",
    date: "2024",
    description:
      "Multiple certifications covering Java programming, advanced SQL techniques, and frontend development.",
    image: "/GL.jpg",
    link: siteConfig.documentsUrl,
    category: "general",
  },
  {
    title: "National Cadet Corps (NCC) - 'B' and 'C' Certificates",
    issuer: "National Cadet Corps",
    date: "2023-2025",
    description:
      "Military training and leadership development certificates with gold medals in cultural activities.",
    image: "/NCC.jpg",
    link: siteConfig.documentsUrl,
    category: "ncc",
  },
] as const;
