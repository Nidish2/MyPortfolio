export type SkillIconName =
  | "code"
  | "coffee"
  | "cpu"
  | "database"
  | "layers"
  | "rocket"
  | "server"
  | "workflow";

export interface Skill {
  name: string;
  level: number;
  category?: string;
}

export interface SkillCategory {
  name: string;
  icon: SkillIconName;
  level: string;
  skills: readonly Skill[];
}

export interface SkillHighlight {
  icon: SkillIconName;
  title: string;
  description: string;
}

export const skillCategories: readonly SkillCategory[] = [
  {
    name: "Web Development",
    icon: "code",
    level: "Intermediate",
    skills: [
      { name: "React.js", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "Node.js with Express.js", level: 80, category: "Backend" },
      { name: "JSP, Servlet, JDBC", level: 75, category: "Java Web" },
      { name: "Hibernate, Spring Boot (MVC)", level: 70, category: "Java Web" },
    ],
  },
  {
    name: "Database",
    icon: "database",
    level: "Intermediate",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    name: "Python",
    icon: "coffee",
    level: "Intermediate",
    skills: [
      { name: "Data Science", level: 70 },
      { name: "Machine Learning", level: 60 },
      { name: "Generative AI", level: 55 },
    ],
  },
  {
    name: "Programming Languages",
    icon: "cpu",
    level: "Intermediate",
    skills: [
      { name: "Java (DSA)", level: 80 },
      { name: "Python", level: 75 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "C (Basics)", level: 60 },
    ],
  },
  {
    name: "DevOps & Cloud",
    icon: "server",
    level: "Basic to Intermediate",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Kubernetes", level: 65 },
      { name: "Red Hat OpenShift", level: 60 },
    ],
  },
] as const;

export const skillHighlights: readonly SkillHighlight[] = [
  {
    icon: "layers",
    title: "Full-stack delivery",
    description:
      "Builds responsive React frontends, APIs, auth-ready flows, and database-backed features.",
  },
  {
    icon: "workflow",
    title: "Problem solving",
    description:
      "Uses Java DSA, clean debugging, and structured project planning for reliable execution.",
  },
  {
    icon: "rocket",
    title: "AI + cloud curiosity",
    description:
      "Experiments with ML, GenAI, Docker, Kubernetes, OpenShift, and deployable product ideas.",
  },
] as const;
