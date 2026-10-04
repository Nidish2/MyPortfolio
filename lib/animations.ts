import type { Variants } from "framer-motion";

export const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
};

export const standardHover = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

export const glowHover = {
  scale: 1.05,
  textShadow: "0 0 20px rgba(94, 31, 255, 0.8)",
  transition: { duration: 0.3 },
};

export const rotateHover = {
  scale: 1.05,
  rotate: 5,
  boxShadow: "0 25px 50px -12px rgba(94, 31, 255, 0.6)",
  transition: { duration: 0.3 },
};

export const subtleHover = {
  x: 5,
  transition: { duration: 0.3 },
};
