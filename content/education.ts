export type EducationType = "engineering" | "puc" | "sslc";

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
  score: string;
  type: EducationType;
}

export const educationItems: readonly EducationItem[] = [
  {
    degree: "Bachelor's of Engineering",
    institution: "B N M Institute Of Technology",
    period: "2022 - 2026",
    details: "Computer Science and Engineering",
    score: "CGPA: 9.08 / 10",
    type: "engineering",
  },
  {
    degree: "Pre University - Biology (PCMB)",
    institution: "Alva's Pre University College",
    period: "2020 - 2022",
    details: "Physics, Chemistry, Math, Biology",
    score: "Percentage: 95%",
    type: "puc",
  },
  {
    degree: "SSLC",
    institution: "Alva's English Medium High School",
    period: "2019 - 2020",
    details: "Secondary School Leaving Certificate",
    score: "Percentage: 91.04%",
    type: "sslc",
  },
] as const;
