export type ProjectIconName = "box" | "chart" | "message";

export interface Project {
  title: string;
  year: string;
  description: string;
  impact: string;
  focus: string;
  technologies: readonly string[];
  github: string;
  live?: string;
  icon: ProjectIconName;
}

export const projects: readonly Project[] = [
  {
    title: "Text-to-3D Model Generation",
    year: "2025",
    description:
      "Text-to-3D model generation is a tool that transforms user prompts into 3D objects instantly. Built with Python's FastAPI for the backend and React with Vite for the frontend, it leverages Point-E model to create single 3D assets from simple text commands.",
    impact: "Turns natural-language prompts into usable 3D assets through an API-driven workflow.",
    focus: "AI product prototype",
    technologies: ["Python", "FastAPI", "React", "Vite", "Point-E", "3D Modeling"],
    github: "https://github.com/Nidish2/Text-to-3D",
    icon: "box",
  },
  {
    title: "Employee Data Analytics",
    year: "2025",
    description:
      "It is a data-driven analytics platform designed to identify employee challenges and predict actionable solutions. Built with Python using libraries like Pandas for data processing, Scikit-learn for machine learning, and XGBoost, RandomForest for model training and Streamlit for the interactive frontend dashboard.",
    impact:
      "Highlights workplace risk patterns and suggests data-backed actions for decision makers.",
    focus: "ML analytics dashboard",
    technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost", "RandomForest", "Streamlit"],
    github: "https://github.com/Nidish2/Employ-Data-Analytics",
    icon: "chart",
  },
  {
    title: "Real Time Chat Application - Chit-Chat",
    year: "2024",
    description:
      "Chit-chat is a real-time web application where users can communicate with each other instantly. Built using the MERN stack for the web interface and Socket.IO for real-time communication, it enables seamless interaction.",
    impact: "Delivers real-time messaging with a production-style MERN and Socket.IO architecture.",
    focus: "Realtime web app",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.IO"],
    github: "https://github.com/Nidish2/Chit-Chat",
    live: "https://chit-chat-real-time-app.vercel.app/",
    icon: "message",
  },
] as const;
