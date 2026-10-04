export type HackathonType = "ai" | "web" | "cloud" | "voice" | "coding";

export interface Hackathon {
  name: string;
  duration: string;
  project: string;
  description: string;
  technologies: readonly string[];
  type: HackathonType;
  year: string;
}

export const hackathons: readonly Hackathon[] = [
  {
    name: "IBM Hackathon",
    duration: "48 hours",
    project: "Climate Change Analysis and Mitigation",
    description:
      "Developed an AI-powered solution for climate change analysis using Agentic AI and RAG (Retrieval-Augmented Generation) to provide actionable insights for environmental mitigation strategies.",
    technologies: ["Agentic AI", "RAG", "Python", "Machine Learning"],
    type: "ai",
    year: "2024",
  },
  {
    name: "Hackwell 5.0",
    duration: "48 hours",
    project: "AI Agent for Task Allocation",
    description:
      "Built an intelligent task allocation system using AWS SageMaker for machine learning model deployment, with Python backend and React frontend for seamless user experience.",
    technologies: ["AWS SageMaker", "Python", "React", "Machine Learning"],
    type: "cloud",
    year: "2024",
  },
  {
    name: "SIH 2024 - Nirman",
    duration: "36 hours",
    project: "Real-time Construction Monitoring via Drone Imagery",
    description:
      "Developed a comprehensive solution for monitoring construction progress using drone imagery analysis, computer vision, and real-time data processing for project management.",
    technologies: ["Computer Vision", "Drone Technology", "Python", "Image Processing"],
    type: "ai",
    year: "2024",
  },
  {
    name: "HackOn with Amazon - Season 4",
    duration: "24 hours",
    project: "Timed Coding Challenges",
    description:
      "Participated in competitive programming challenges focusing on algorithmic problem-solving, data structures, and optimization techniques under time constraints.",
    technologies: ["Algorithms", "Data Structures", "Java", "Problem Solving"],
    type: "coding",
    year: "2024",
  },
  {
    name: "Hackman V7",
    duration: "24 hours",
    project: "Voice Assistance System",
    description:
      "Created an intelligent voice assistant using speech recognition, natural language processing, and text-to-speech technologies with Flask web framework integration.",
    technologies: ["SpeechRecognition", "PyAudio", "pyttsx3", "Flask", "NLP"],
    type: "voice",
    year: "2024",
  },
] as const;
