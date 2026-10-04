export interface HeroMetric {
  value: string;
  label: string;
}

export const heroWords = [
  "Web Developer",
  "Problem Solver",
  "CS Engineer",
  "MERN Stack Developer",
] as const;

export const heroMetrics: readonly HeroMetric[] = [
  { value: "3+", label: "Full-stack projects" },
  { value: "5", label: "Hackathons" },
  { value: "8+", label: "Certifications" },
] as const;
